import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import auth from '../../init.auth';
import './Header.css'

const Header = () => {
    const [user]=useAuthState(auth)
    
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='properties'>
                <Link to="Home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/about">About</Link>
                

                    {
                        user?
                           <button onClick={logout}>Log out</button>
                           
                        :<Link to="/login">Login</Link>
                    }
                        

                
               


            </div>
        </div>
    );
};

export default Header;