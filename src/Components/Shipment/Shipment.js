import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.auth';

const Shipment = () => {
    const [user]=useAuthState(auth)
   
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    //const navigate=useNavigate()
   
  
    const handleName=(event)=>{
        setName(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handlePhone= (event) => {
        setPhone(event.target.value)
    }
  
    const handleSubmit = (event) => {
        console.log(name,user.email,address,phone)
        
       
        
           
       
        event.preventDefault();

    }

    return (
        <div>
            <div className='form-container'>

                <div>
                    <h1 className='form-title'>Shipping information</h1>
                    <div>
                        <div className="input-group">
                            <label htmlFor="Email">Email</label>
                            <input type="email" value={user?.email} name="" id="" required />
                            <label htmlFor="name">Name</label>
                            <input type="text" onBlur={handleName}  name="name" id="" required />

                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Address</label>
                            <input type="text" onBlur={handleAddress} name="Address" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="number" onBlur={handlePhone} name="number" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>

                        <button className='form-submit' onClick={handleSubmit} type="submit">submit</button>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Shipment;