
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../init.auth';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/home')
    }




    return (
        <div className='form-container'>

            <div>
                <h1 className='form-title'>Please Login....</h1>
                <div >
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" name="" id="" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="" required />
                    </div>
                    


                        <p> {error?.message}</p>


                    



                    <button onClick={() => signInWithEmailAndPassword(email, password)} className='form-submit' type="submit">Login</button>
                </div>
                <p>New to Amazon? <Link className='form-link' to="/signup">Create  an account</Link></p>

            </div>



        </div>
    );
};

export default Login;