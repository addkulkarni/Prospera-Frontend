import React from 'react';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import validator from '../../validation/Validator'
import { useForm } from 'react-hook-form';

function Login() {
    const{register,handleSubmit,reset}=useForm()
    function loginuser(e)
    {
        console.log(e);
        reset();
    }
    return (
    <div className='login-page'>
      <div className='login-form-container'>
        <form className='login-form' onSubmit={handleSubmit(loginuser)}>
          <h2 className='login-title'>Login</h2>
          <div >
            <input className='login-field' type='text' placeholder='Username'  {...register('username')}/>
            <i className="bi bi-person icon"></i>
          </div>
          <div >
            <input className='login-field' type='password' placeholder='Password'  {...register('password')}/>
            <i className="bi bi-lock icon"></i>
          </div>
          <button type='submit' className='login-form-button'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
