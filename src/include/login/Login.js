import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const oenavigation = useNavigate()
    const{register,handleSubmit,reset}=useForm()
    function loginuser(e)
    { 
        if(e.username==='oe' && e.password==='oe')
        {
          oenavigation('/dashboard/oe');
        }
        else if(e.username==='re' && e.password==='re')
          {
            oenavigation('/dashboard/re');
          }
          else if(e.username==='cm' && e.password==='cm')
            {
              oenavigation('/dashboard/cm');
            }
            else if(e.username==='ah' && e.password==='ah')
              {
                oenavigation('/dashboard/ah');
              }

                else
                {
                  alert("Incorrect username or password")
                }
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
