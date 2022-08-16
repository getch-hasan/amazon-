import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import{useCreateUserWithEmailAndPassword}from 'react-firebase-hooks/auth'
import auth from '../../init.auth';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setConpassword] = useState('')
    const [error, setError] = useState('')
    const navigate=useNavigate()
    const [CreateUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth,password)
    const handleEmail = (event) => {
        setEmail(event.target.value)

    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConPassword = (event) => {
        setConpassword(event.target.value)
    }
    if(user){
        navigate('/home')
    }
    const handleSubmit = (event) => {
        if (password !== conpassword) {
            setError("password not matched!")
            return;
        }
        if(password.length<6){
           setError("password must be 6 characters")
           return;
       
        }
       
        CreateUserWithEmailAndPassword(email,password)
           
       
        event.preventDefault();

    }

    return (
        <div>
            <div className='form-container'>

                <div>
                    <h1 className='form-title'>Sign up</h1>
                    <div>
                        <div className="input-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" onBlur={handleEmail} name="" id="" required />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onBlur={handlePassword} name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password"> Confirm Password</label>
                            <input type="password" onBlur={handleConPassword} name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>

                        <button className='form-submit' onClick={handleSubmit} type="submit">Sign up</button>
                    </div>
                    <p>Already have an account? <Link className='form-link' to="/login">Log in</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signup;