
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import validator from '../../../validation/Validator';
function Register() 
{
  const { enquiryId} = useParams();
  const [step, setStep] = useState(1);
  const [statement,setStatement] = useState("");
  const {register,handleSubmit, reset,setValue,formState:{errors}}=useForm();
  const[enquiry,setEnquiry]=useState({});


  
  useEffect(() => {
    // Fetch data for the specific enquiryId
    axios.get(`http://localhost:9093/re/getenquirybyid/${enquiryId}`)
      .then(response => {
        console.log(response.data)
        setEnquiry(response.data);
        
      })
      .catch(error => console.error("Error fetching data:", error));
  },[enquiryId]);

  useEffect(()=>{
    setValue('enquiryID',enquiryId);
        for (let prop in enquiry) {
          setValue(prop, enquiry[prop]);
        }
  },[enquiry,setValue])



  const submitForm = (data) => {
    // console.log(data);
    axios.post(`http://localhost:9093/re/savedata`, data,{ headers: {
        'Content-Type': 'application/json'
    }})
      .then(response => {//correct
        console.log(response.data);
        alert('Registration successfully');
      })
      .catch(error => {
        console.error("Error saving data:", error.response ? error.response.data : error.message);
        alert("Something went wrong");
      });
  };

  return (
    <div>
         <form className='register-form' onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading1'>{statement}</h5>
        <div className='step'>
        <h4>Personal Details</h4>
        <div className='form-element1'><label>Enquiry Id: </label>
        <input type="number" {...register('enquiryID')}/></div>
        <div className='form-element1'><label>First name: </label>
        <input type="text" {...register('firstName')}/></div>
        <div className='form-element1'><label>Last name: </label>
        <input type="text" {...register('lastName')}/></div>
        
        <div className='form-element1'><label>Age: </label>
        <input type="number" {...register('age',validator.age)}/></div>
      
       <div className='form-element1'><label>Email: </label>
       <input type="email" {...register('email',validator.email)}/></div>

       <div className='form-element1'><label>Date Of Birth: </label>
       <input type="date" {...register('dob')}/></div>
       
       <div className='form-element1'><label>Mobile number: </label>
       <input type="tel" {...register('mobileNo',validator.mobile)}/></div>
       <div className='form-element1'><label>Gender: </label>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></div>

        <div className='form-element1'><label>PAN card number: </label>
        <input type="text" {...register('pancardNo',validator.pan)}/></div>
        
        <div className='form-element1'><label>Aadhar card number: </label>
        <input type="text" {...register('adharcardNo',validator.adhar)}/></div>
        <button type="submit" className='submit-button1'>
              Submit Form
            </button>
       </div>

        </form>
    </div>
  )
}

export default Register