import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
    const[text,setText]=useState("")
    // console.log("text",text)
  return (
    <div>
        <p>Please fill data</p>
        <input onChange={(e) => setText(e.target.value)} type='text' value={text} placeholder='enter your data'/> 
        <button onClick={()=>handleAdd(text,setText) }>Add</button>
    </div>
  )
}

export default AddTodo
