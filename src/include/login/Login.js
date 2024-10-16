import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import axios from 'axios';


function Login() {
  // const oenavigation = useNavigate()
    const{register,handleSubmit,reset}=useForm()
    // function loginuser(e)
    // { 
    //     if(e.username==='oe' && e.password==='oe')
    //     {
    //       oenavigation('/dashboard/oe');
    //     }
    //     else if(e.username==='re' && e.password==='re')
    //       {
    //         oenavigation('/dashboard/re');
    //       }
    //       else if(e.username==='cm' && e.password==='cm')
    //         {
    //           oenavigation('/dashboard/cm');
    //         }
    //         else if(e.username==='ah' && e.password==='ah')
    //           {
    //             oenavigation('/dashboard/ah');
    //           }

    //             else
    //             {
    //               alert("Incorrect username or password")
    //             }
    //     reset();
    // }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitt= async (e) => {
      // e.preventDefault();
      
      try {
        const response = await axios.get(`http://localhost:9094/login/login/${username}/${password}`, {
          params: { username, password }
        });
        
        if (response.data.success) {
          localStorage.setItem('userType', response.data.userType);
          // Redirect to user type component
          window.location.href = `/${response.data.userType}`;
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('An error occurred. Please try again.');
      }
    };


    return (
    <div className='login-page'>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={handleSubmit(handleSubmitt)}>
          <h2 className='login-title'>Login</h2>
          <div >
            <input className='login-field' type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}  {...register('username')}/>
            <i className="bi bi-person icon"></i>
          </div>
          <div >
            <input className='login-field' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}  {...register('password')}/>
            <i className="bi bi-lock icon"></i>
          </div>
          <button type='submit' className='login-form-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
