import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './BankAccount.css'
import { useNavigate } from 'react-router-dom';
function BankAccount(props) {
    const navigate = useNavigate();
    const{register,handleSubmit,reset,setValue}=useForm();
    const loginuser = (data)=>{
        axios.get(`http://localhost:9096/ah/disbursementaccount/${props.cid}/${data.disbursementAccountNo}`)
        .then((response)=>console.log(response.data))
        .catch(()=>alert("Something went wrong"));
        console.log(props.cid);
        console.log(data.disbursementAccountNo);
        navigate(0);
    }

  return (
    <div className='bankaccount-page'>
        <div className='bankaccount-container'>
        <form className='login-form' onSubmit={handleSubmit(loginuser)}>
        <div>
        <i className="bi bi-backspace-fill"></i>
        <h2 className='login-title'>Set recipient's account number</h2>
        </div>
       
          <div >
            <input className='login-field' type='text' placeholder='Account number'  {...register('disbursementAccountNo')}/>
            
          </div>
          <div >
            <input className='login-field' type='number' hidden {...register('cid')}/>
            
          </div>
          <button type='submit' className='login-form-button'>Submit</button>
        </form>
        </div>
      
    </div>
  )
}

export default BankAccount
