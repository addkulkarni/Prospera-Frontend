import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import validator from '../../validation/Validator';
import './Enquiry.css';


function Enquiry() {
  const [step, setStep] = useState(1);
  const [statement,setStatement] = useState("Submit your enquiry here");
  const {register,handleSubmit, reset,setValue,formState:{errors}}=useForm()

  
  // Move to the next step
  const nextStep = () => setStep(prev => prev + 1);
  
  // Move to the previous step
  const prevStep = () => setStep(prev => prev - 1);

  function submitForm(e)
  {
    axios.post('http://localhost:9091/enquiry/addenquiry',e).then(response=>console.log(response.data)).catch(()=>alert("Something went wrong"));
    setStatement("Thank you. Our team will get in touch with you shortly.");

    console.log(errors.fname);
    reset();
  }

  function checkValue(e)
  {
    console.log()
  }

  return (
    <div >
      
      <form className='enquiry-form' onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading'>{statement}</h5>

      {step===1 && (
      <div className='setp'>
        <div className='form-element'><label>First name: </label><span>{errors.fname&&errors.fname.message}</span><br/>
        <input onChange={handleSubmit(submitForm)} type="text" {...register('fname',validator.fname)}/><br/><br/></div>
        
        <div className='form-element'><label>Last name: </label><br/>
        <input type="text" {...register('lname')}/><br/><br/></div>
        
        <div className='form-element'><label>Age: </label><span>{errors.age&&errors.age.message}</span><br/>
        <input type="number" {...register('age',validator.age)}/><br/><br/></div>
      </div>
      )}

      {step===2 && (
        <div className='setp'>
        <div className='form-element'><label>Email: </label><span>{errors.email&&errors.email.message}</span><br/>
        <input type="email" {...register('email',validator.email)}/><br/><br/></div>
        
        <div className='form-element'><label>Mobile number: </label><span>{errors.mobile&&errors.mobile.message}</span><br/>
        <input type="tel" {...register('mobile',validator.mobile)}/><br/><br/></div>
        </div>
      )}

      {step===3 && (
        <div>
        <div className='form-element'><label>Gender: </label><br/>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br/><br/></div>
        
        <div className='form-element'><label>PAN card number: </label><span>{errors.pan&&errors.pan.message}</span><br/>
        <input type="text" {...register('pan',validator.pan)}/><br/><br/></div>
        
        <div className='form-element'><label>Aadhar card number: </label><span>{errors.adhar&&errors.adhar.message}</span><br/>
        <input type="text" {...register('adhar',validator.adhar)}/><br/><br/></div>
        </div>
      )} 
        
      {step===4 && (
        <div>
        <div className='form-element'><label>Loan amount: </label><span>{errors.amount&&errors.amount.message}</span><br/>
        <input type="number" {...register('amount',validator.amount)}/><br/><br/></div>
        
        <div className='form-element'><label>Tenure: </label><br/>
        <input type="text" {...register('tenure')}/><br/><br/></div>
        </div>
      )}

        <div className='form-navigation'>
          {step > 1 && (
            <button type="button" className='nav-button' onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 4 && (
            <button type="button" className='nav-button' onClick={nextStep} >
              Next
            </button>
          )}
          {step === 4 && (
            <button type="submit" className='submit-button'>
              Submit Enquiry
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default Enquiry
