import './FileList.css'
import FileDetail from './FileDetail'

interface FileListProps {
  files: File[]
  onDelete: (index: number) => void
}

const FileList = ({ files, onDelete }: FileListProps) => {
  return (
    <>
      {files.map((file, index) => (
        <FileDetail
          key={index}
          filename={file}
          onDelete={() => onDelete(index)}
        />
      ))}
    </>
  )
}

export default FileList
