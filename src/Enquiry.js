import React, { useState } from 'react'
import './Enquiry.css'
import axios from 'axios';
import { useForm } from 'react-hook-form'

function Enquiry() {
  const[statement,setStatement] = useState("Submit your enquiry here");
  const{register,handleSubmit, reset,setValue,formState:{errors}}=useForm()
  const validator={
    fname:{
      required:{value:true,message:"*Required field."},
      minLength:{value:3,message:"*Name must contain at least 3 characters"}
    },
    age:{
      min:{value:18,message:"*Age must be above 18 years."},
      max:{value:110,message:"*Please enter a valid age"}
    },
    email:{
      required:{value:true,message:"*Required field"},
      pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"*Please enter a valid email"}
    },
    mobile:{
      required:{value:true,message:"*Required field"},
      pattern:{value:/^[789]\d{9}$/,message:"*Please enter a valid mobile number"}
    },
    pan:{
      required:{value:true,message:"*Required field"},
      pattern:{value:/^[A-Z][A-Z]{4}[0-9]{4}[A-Z]$/,message:"*Please enter a valied PAN card number"}
    },
    adhar:{
      pattern:{value:/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/ ,message:"*Please enter a valid Aadhar card number"}
    },
    amount:{
      required:{value:true,message:"*Required field"},
      min:{value:100000,message:"*Amount must be between 100000 and 10000000"},
      max:{value:10000000,message:"*Amount must be between 100000 and 10000000"}
    }
  }

  function submitForm(e)
  {
    axios.post('http://localhost:9091/enquiry/addenquiry',e).then(response=>console.log(response.data)).catch(()=>alert("Something went wrong"));
    setStatement("Enquiry has been submitted. Our relationship manager will get in touch with you shortly");

    console.log(e);
    reset();
  }

  return (
    <div>
      
      <form className='enquiry-form' onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading'>{statement}</h5>
        <div className='form-element'><label>First name: </label><span>{errors.fname&&errors.fname.message}</span><br/>
        <input type="text" {...register('fname',validator.fname)}/><br/><br/></div>
        
        <div className='form-element'><label>Last name: </label><br/>
        <input type="text" {...register('lname')}/><br/><br/></div>
        
        <div className='form-element'><label>Age: </label><span>{errors.age&&errors.age.message}</span><br/>
        <input type="number" {...register('age',validator.age)}/><br/><br/></div>
        
        <div className='form-element'><label>Email: </label><span>{errors.email&&errors.email.message}</span><br/>
        <input type="email" {...register('email',validator.email)}/><br/><br/></div>
        
        <div className='form-element'><label>Mobile number: </label><span>{errors.mobile&&errors.mobile.message}</span><br/>
        <input type="tel" {...register('mobile',validator.mobile)}/><br/><br/></div>
        
        <div className='form-element'><label>PAN card number: </label><span>{errors.pan&&errors.pan.message}</span><br/>
        <input type="text" {...register('pan',validator.pan)}/><br/><br/></div>
        
        <div className='form-element'><label>Aadhar card number: </label><span>{errors.adhar&&errors.adhar.message}</span><br/>
        <input type="text" {...register('adhar',validator.adhar)}/><br/><br/></div>
        
        <div className='form-element'><label>Gender: </label><br/>
        <select {...register('gender')}>
          <option>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br/><br/></div>
        
        <div className='form-element'><label>Loan amount: </label><span>{errors.amount&&errors.amount.message}</span><br/>
        <input type="number" {...register('amount',validator.amount)}/><br/><br/></div>
        
        <div className='form-element'><label>Tenure: </label><br/>
        <input type="text" {...register('tenure')}/><br/><br/></div>
        
        <button type="submit" className='submit-button'>Submit Enquiry</button>
      </form>
    </div>
  )
}

export default Enquiry
