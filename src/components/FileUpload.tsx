import React, { useCallback, useState } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import './FileUpload.css'
import upload_icon from '../assets/images/upload-icon.png'

interface FileUploadProps {
  onUploadComplete?: (file: File[]) => void
  maxFiles?: number
  accept?: string
  maxSize?: number
  square?: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  maxFiles = 1,
  accept,
  square = false,
  maxSize = 5242880, // 5 MB
}) => {
  const [files, setFiles] = useState<File[]>([])
  const [uploadError, setUploadError] = useState<string | null>(null)

  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles)
      setUploadError(null)
      onUploadComplete && onUploadComplete(acceptedFiles)
      toast.success('File uploaded successfully!', {
        position: 'top-center',
        autoClose: 1500,
        theme: 'colored',
        transition: Bounce,
      })
    },
    [onUploadComplete]
  )

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    const errors = fileRejections.map((rejection) => {
      rejection.errors.map((error) => {
        toast.error(
          `${rejection.file.name} caused an error - ${error.message}`,
          {
            position: 'top-center',
            autoClose: 3000,
            theme: 'colored',
            transition: Bounce,
          }
        )
      })
    })
    setUploadError(errors.join('\n'))
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    maxFiles,
    maxSize,
    accept: {
      ...(accept ? { accept } : { 'application/json': ['.json'] }),
    },
  })

  return (
    <div className={`upload-container`}>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''} ${
          square ? 'square' : ''
        }`}
      >
        <div className='content'>
          <img src={upload_icon} alt='upload logo' className='uploadIcon' />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default FileUpload
