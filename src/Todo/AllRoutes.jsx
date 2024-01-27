import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todo'
import Edit from './Edit'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Todo/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
