import axios from "axios"

export const getData = () => {
    return axios.get("http://localhost:8181/User")
}

export const postTodo = ({title,status}) => {
    return axios({
        url:"http://localhost:8181/User",
        method:"POST",
        data :{
            title,
            status:false
        }
    })
}

export const deletePost = (id) => {
    return axios({
        url:`http://localhost:8181/User/${id}`,
        method:"DELETE"
    })
}

export const toggleTodoStatus = ({id,newStatus}) => {
    return axios({
        url:`http://localhost:8181/User/${id}`,
        method:"PATCH",
        data:{
            status:newStatus
        }
    })
}

export const geteditData =(id) => {
   return axios.get(`http://localhost:8181/User/${id}`)

}

export const editTodo = ({id,editData}) => {
    return axios.put(`http://localhost:8181/User/${id}`,editData)
  }

