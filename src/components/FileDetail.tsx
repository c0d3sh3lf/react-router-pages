import './FileDetail.css'
import { FaRegTrashCan } from 'react-icons/fa6'
import Button from './Button'

interface FileDetailProps {
  filename: File
  onDelete: (file: File) => void
}

const FileDetail = ({ filename, onDelete }: FileDetailProps) => {
  return (
    <div className='fileDetail'>
      <span>{filename.name}</span>
      <Button type='danger' onClick={() => onDelete(filename)}>
        <FaRegTrashCan />
      </Button>
    </div>
  )
}

export default FileDetail
