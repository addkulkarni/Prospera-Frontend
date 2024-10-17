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
              if(response.data.userType==='oe')
               {
                nnavigation('/dashboard/oe');
               }
             else if(response.data.userType==='re')
               {
                  nnavigation('/dashboard/re');
               }
             else if(response.data.userType==='cm')
               {
                    nnavigation('/dashboard/cm');
               }
             else if(response.data.userType==='ah')
               {
                     nnavigation('/dashboard/ah');
               }
             else 
               {
                      nnavigation('/dashboard/customer');
               }
            
        }
    } catch (error) {
        console.log(error);
    }

};
return (
    <div className='login-page'>
        <div className='login-form-container'>
            <form className='login-form' onSubmit={handleSubmit(onLogin)}>
                <h2 className='login-title'>Login</h2>
                <div>
                    <input className='login-field' type='text' placeholder='Username' {...register('username')} />
                    <i className="bi bi-person icon"></i>
                </div>
                <div>
                    <input className='login-field' type='password' placeholder='Password' {...register('password')} />
                    <i className="bi bi-lock icon"></i>
                </div>
                <br />
                {errorMessage && <p className="error-message">{errorMessage}</p>} 
                <button type='submit' className='login-form-button'>Login</button>
                <div className="col">
                    <a href='#'>Forgot password?</a>
                </div>
            </form>
        </div>
    </div>
);
}


export default Login;
