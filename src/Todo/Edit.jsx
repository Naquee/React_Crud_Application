import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { geteditData,editData, editTodo } from '../api/service';
import axios from 'axios';

const Edit = () => {
    const{id} = useParams();
    // console.log("paramsid",id)
    const[editData,setEditData]=useState([])
    // console.log("eData",editData)
    const navigate = useNavigate()

    useEffect(() => {
        geteditData(id).then((res) => {
            setEditData(res.data)
        })

    },[])

    const handleEdit = (id) => {
      // console.log("id",id)
      editTodo({id,editData}).then((res) =>{
         alert(`Edit Successful`)
         navigate("/")
      })
    }


    

  return (
    <div>
    <h1>Please Edit here</h1>
        <input type='text' value={editData.title} onChange={(e) => setEditData({...editData,title:e.target.value})}/>
        <button onClick={()=>handleEdit(id)}>Update</button>
    </div>
  )
}

export default Edit
