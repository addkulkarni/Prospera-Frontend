import axios from 'axios';

import './SetLoanDetails.css'
import {useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../header/Header';

function SetLoanDetails() {
 
   const { register,handleSubmit}=useForm();
  const {cid}=useParams();

  // const[InputData,setInputData]=useState([])

   const nnavigate= useNavigate();
   
  function submitForm(e)
  {
   
    axios.post(`http://localhost:9095/cm/setloandetails/${cid}`,e)
    .then(response=>{
      console.log(response.data);
      alert("Data Saved Successfully..!")
      
    }
  ).catch(()=>alert("Something went wrong"));
  nnavigate('/cm')
  }
  return (
 
    <div >
        <Header/>
     <div className='setLoan-form-container'>
    
        <form className='setLoan-form' onSubmit={handleSubmit(submitForm)}>
          <h2 className='setLoan-title'>Set LoanDetails</h2>
          <div >
            <input className='setLoan-field' type='number' placeholder='Loanamount' {...register('loanamount')}/>
            <i className="bi bi-cash icon"></i>
          </div>
          <div >
            <input className='setLoan-field' type='number' placeholder='InterestRate (%)' {...register('interestRate')}/>
            <i className="bi bi-percent icon"></i>
          </div>
          <div >
            <input className='setLoan-field' type='number' placeholder='Tenure (Months)' {...register('tenure')}/>
            <i className="bi bi-calendar icon"></i>
          </div>
          <button type='submit' className='setLoan-form-button'>Set LoanDetails</button>
        </form>
      </div>
    </div>
  )
}

export default SetLoanDetails;