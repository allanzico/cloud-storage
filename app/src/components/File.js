import React from 'react'
import {AiFillFile} from 'react-icons/ai'

const File = ({file}) => {
  return (
  <a href={file.url} target="_blank" rel="noopener noreferrer" className='btn btn-outline-dark text-truncate w-100'>
 <AiFillFile className='mr-2' />
 {file.name}
  </a>
  )
}

export default File