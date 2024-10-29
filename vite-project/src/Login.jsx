import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAndNavigate } from './userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3000/users')
        .then((res)=>{
            console.log('user from db', res.data);
            
            const user = res.data.find((u)=>u.email == email && u.password === password )
            if (user) {
                console.log('login succesful',user);
                dispatch(loginAndNavigate({userData:user , navigate}))
                setEmail('')
                setPassword('')
              
            }else{
                alert('Invalid Email or Password')
            }
        } )
        .catch((err)=>console.log(err))
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Enter Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder='Enter Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Submit</button>
                <p>Not a member?</p>
        <Link to="/" className="signin-link">SignUp Here</Link>
            </form>
        </div>
    );
}

export default Login;
