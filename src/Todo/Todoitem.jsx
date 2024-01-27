import React from 'react'
import { Link } from 'react-router-dom'

const Todoitem = ({id,status,title,handleDelete,handleToggle}) => {
  return (
    <div style={{display:'flex',gap:"1rem",marginTop:"1rem"}}>  
        <p>{id}</p>  
        <p>{title}</p> 
        <button onClick={() =>handleToggle(id,!status)}>
          {status?"Done":"NOT DONE"}
          </button> 
          <Link to={`/edit/${id}`}>
          <button>edit</button>
          </Link>
        <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  )
}

export default Todoitem
