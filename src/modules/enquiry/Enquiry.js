import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';
import validator from '../../validation/Validator';
import './Enquiry.css';

function Enquiry() {
  const [statement, setStatement] = useState("Submit your enquiry here");
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  function submitForm(data) {
    setLoading(true);
    axios.post('http://localhost:9091/enquiry/addenquiry', data)
      .then(response => setStatement("Enquiry has been submitted successfully"))
      .catch(() => alert("Something went wrong"))
      .finally(() => setLoading(false));
  }

  return (
    <div className='enquiry-form-container mb-5 mt-3 w-50' style={{minHeight:'80vh'}}>
      {loading ? (
                    // Display loading animation when loading is true
                    <div className="loading-container">
                        <TailSpin height="40" width="40" color="#48c5b7" ariaLabel="Submitting Enquiry" />
                        <p>Submitting Enquiry</p>
                    </div>
                ):(<form className='enquiry-form' onSubmit={handleSubmit(submitForm)}>
        <h5 className='subheading'>{statement}</h5>

        <div className='form-row'>
          <div className='form-element'>
         
            <span className="error">{errors.firstName && errors.firstName.message}</span>
            <input type="text" placeholder="Enter first name" {...register('firstName', validator.fname)} />
          </div>
          <div className='form-element'>
          <span className="error"></span>
            <input type="text" placeholder="Enter last name"{...register('lastName')} />
          </div>
        </div>

        <div className='form-row'>
        <div className='form-element'>

            <span className="error">{errors.mobile && errors.mobile.message}</span>
            <input type="tel" placeholder='Enter mobile number'{...register('mobileNo', validator.mobile)} />
          </div>
          <div className='form-element'>
            
            <span className="error">{errors.email && errors.email.message}</span>
            <input type="email" placeholder='Enter email' {...register('email', validator.email)} />
          </div>
        </div>

        <div className='form-row'>
          
          <div className='form-element'>
            
            <span className="error">{errors.age && errors.age.message}</span>
            <input type="number" placeholder="Enter age" {...register('age', validator.age)} />
          </div>
          <div className='form-element'>
          <span className="error"></span>
            <select {...register('gender')} defaultValue="">
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className='form-row'>
          <div className='form-element'>
          
            <span className="error">{errors.pan && errors.pan.message}</span>
            <input type="text" placeholder='Enter PAN' {...register('pancardNo', validator.pan)} />
          </div>
          <div className='form-element'>
            
            <span className="error">{errors.adhar && errors.adhar.message}</span>
            <input type="text" placeholder='Enter aadhar number' {...register('adharcardNo', validator.adhar)} />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-element'>
            
            <span className="error">{errors.amount && errors.amount.message}</span>
            <input type="number" placeholder='Enter loan amount' {...register('loanamount', validator.amount)} />
          </div>
          
          <div className='form-element'>
          <span className="error"></span>
            <input type="text" placeholder='Enter tenure' {...register('tenure')} />
          </div>
        </div>

        <div className='form-navigation'>
          <button type="submit" className='submit-button'>Submit Enquiry</button>
        </div>
      </form>)}
    </div>
  )
}

export default Enquiry;
