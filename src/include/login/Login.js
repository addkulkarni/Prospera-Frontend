import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import axios from 'axios';


function Login() {
     const nnavigation = useNavigate()
    const{register,handleSubmit,reset}=useForm();
    const [errorMessage, setErrorMessage] = useState('');
  
    let baseUrl='http://localhost:9094/login/loginUser/'

  const onLogin = async (auth) => {
    try {
        const response = await axios.get(baseUrl + auth.username + '/' + auth.password);
        console.log(response)
        if (response.data.statusCode === 401) {
          setErrorMessage('Incorrect username or password');
        } else {
            const userJson = JSON.stringify(response.data);
            localStorage.setItem('user', userJson);
              if(response.data.userType==='OE')
               {
                nnavigation('/dashboard/oe');
               }
             else if(response.data.userType==='RE')
               {
                  nnavigation('/dashboard/re');
               }
               else if(response.data.userType==='Admin')
                {
                   nnavigation('/dashboard/admin');
                }
             else if(response.data.userType==='CM')
               {
                    nnavigation('/dashboard/cm');
               }
             else if(response.data.userType==='AH')
               {
                     nnavigation('/dashboard/ah');
               }
             else if(response.data.userType==='Customer')
               {
                      nnavigation('/dashboard/customer');
               }
               else{
                nnavigation(0);
               }
            
        }
    } 
    catch (error) {
        console.log(error);
    }

};
return (
    <div className='login-page'>
        <div className='login-form-container'>
            <form className='login-form' onSubmit={handleSubmit(onLogin)}>
                <h2 className='login-title'>Login</h2>
                <div>
                <i className="bi bi-person username-icon"></i>
                    <input className='login-field' type='text' placeholder='Username' {...register('username')} />
                    
                </div>
                <div>
                <i className="bi bi-lock password-icon"></i>
                    <input className='login-field' type='password' placeholder='Password' {...register('password')} />
                    
                </div>
                <br />
                {errorMessage && <p className="error-message">{errorMessage}</p>} 
                <button type='submit' className='login-form-button'>Login</button>
                
            </form>
        </div>
    </div>
);
}


export default Login;
