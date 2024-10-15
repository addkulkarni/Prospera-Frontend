import React, { useState } from 'react';
import './EMICalculator.css';
import { useForm } from 'react-hook-form';
function EMICalculator() {
  const{register,handleSubmit}=useForm();
  const[emi,setEmi]=useState();
  const[interest,setInterest]=useState();
  const[total,setTotal]=useState();

  function calculateEmi(e)
  {
    let P = parseInt(e.amount);
    let N = parseInt(e.tenure);
    let R = parseInt(e.rate);
    
    let EMI = (((P*(R/100))+P)/N);
    let interestAmount = P*N*R/1200;
    let tot = P+(P*N*R/1200)
    setEmi(Math.ceil(EMI));
    setInterest(Math.ceil(interestAmount))
    setTotal(tot);
  }

  return (
    <div className='calculator-component'>
      <h1>Try our EMI calculator and plan in advance.</h1>
    
    <div className='calculator-container'> 
      <div className='calculator-fields'>
        <form onSubmit={handleSubmit(calculateEmi)}>
          <div className='calculator-field'>
            <label>Home Loan amount</label>
            <input type='number' {...register('amount')} defaultValue={1000000} ></input><i className="bi bi-currency-rupee"></i>
          </div>
          <div className='calculator-field'>
            <label>Interest Rate (annual)</label>
            <input type='number' {...register('rate')} defaultValue={12} ></input><i className="bi bi-percent"></i>
          </div>
          <div className='calculator-field'>
            <label>Loan Tenure (In months)</label>
            <input type='number' {...register('tenure')} defaultValue={24} ></input><i className="bi bi-calendar"></i>
          </div>
          <button type='submit' className='submit-button'>Calculate EMI</button>
        </form>
      </div>
      <div className='resultfield'>
        <div className='result-item'>
          <p>Monthly EMI </p><br></br>
          <h5>&#8377; {emi}</h5>
        </div>

        <div className='result-item'>
          <p>Total Interest Payable</p><br></br>
          <h5>&#8377; {interest}</h5>
        </div>

        <div className='result-item'>
          <p>Total Payment (Principal + Interest) </p><br></br>
          <h5>&#8377; {total}</h5>
        </div>
      </div>
    </div>
  </div>
  )
}
export default EMICalculator
