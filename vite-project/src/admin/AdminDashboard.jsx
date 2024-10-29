import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminDashboard() {
    const  [users , setusers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
    .then((res)=>
    setusers(res.data)
    )
    .catch((err)=>console.log(err) )
    },[])
    const removeHandle=(id)=>{
     const updatedUsers =   users.filter((user)=>user.id !== id)
     setusers(updatedUsers)
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Paasword</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>(
                 <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.role}</td>
                    <td>
                        <button onClick={()=>removeHandle(user.id)}>Remove</button>
                    </td>
                 </tr>
                ))}
            </tbody>
        </table>
    </div>
    
  )
}

export default AdminDashboard