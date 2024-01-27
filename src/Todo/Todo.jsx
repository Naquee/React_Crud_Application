import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { deletePost, editData, getData, postTodo, toggleTodoStatus } from "../api/service";
import Todoitem from "./Todoitem";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodoDatas();
  }, []);

  const getTodoDatas = () => {
    getData()
      .then((res) => {
        // console.log("res", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAdd = (title, setText) => {
    // console.log("text", title);
    postTodo({
      title,
      status: false,
    }).then(() => {
      getTodoDatas();
    });
    setText("");
  };

  const handleDelete = (id) =>{
    deletePost(id).then(() => {
      getTodoDatas()
    })
  }

  const handleToggle = (id,newStatus) => {
    toggleTodoStatus({id,newStatus}).then(() =>{
      getTodoDatas();
    })
  }
  

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />

      <div style={{width:"40%",margin:"auto"}}> 
        {data?.map((item) => (
          <Todoitem
            key={item.id}
            title={item.title}
            status={item.status}
            id={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
