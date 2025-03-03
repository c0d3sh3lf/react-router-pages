import { useState } from 'react'
import './Home.css'
import FileUpload from '../components/FileUpload'
import FileList from '../components/FileList'

const Home = () => {
  const [files, setFiles] = useState<File[]>([])

  const handleUploadComplete = (files: File[]) => {
    setFiles(files)
  }

  const onDelete = (index: number) => {
    const newFiles = [...files] // Copy the files array
    newFiles.splice(index, 1) // Remove the file at the specified index from the new array
    setFiles(newFiles) // Update the files state with the new array
  }

  return (
    <>
      <FileUpload
        onUploadComplete={handleUploadComplete}
        maxFiles={5}
        square={true}
      />
      {files.length > 0 ? (
        <FileList files={files} onDelete={onDelete} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Home
