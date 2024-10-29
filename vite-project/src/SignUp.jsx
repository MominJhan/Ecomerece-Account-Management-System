import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginAndNavigate } from './userSlice'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignuppapge = (e) => {
    e.preventDefault()
   

    const userData = {name, email, password ,role}
    axios.post('http://localhost:3000/users',userData)
        .then((res) => {
          console.log('respose.data',res.data);
          
      dispatch(loginAndNavigate({userData:res.data , navigate}))
       setRole('')
        setName('')
        setEmail('');
        setPassword('')
  })
        .catch((err) => console.log(err));
  }
 
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignuppapge}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

       <label>
       <input  type="radio" 
        name='role'
        value="admin"
        onChange={()=>setRole('admin')}
        checked={role === 'admin'} />  
        Admin </label>

       <label>
       <input type="radio" 
        name='role'
        value="seller"
        onChange={()=>setRole('seller')} 
        checked={role === 'seller'}/> 
         Seller  </label>

       <label>
       <input type="radio" 
        name='role'
        value="customer"
        onChange={()=>setRole('customer')} 
        checked={role === 'customer'}/> 
        Customer </label>

        <button type="submit">Sign Up</button>
        <p>Already have an account?</p>
        <Link to="/login" className="signin-link">Sign In</Link>

      </form>
    </div>
  )
}

export default SignUp
