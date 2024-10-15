
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import validator from '../../validation/Validator';
import '../registration/Registration.css';



function Registration() {
  const { enquiryId } = useParams();
  const [step, setStep] = useState(1);
  const [statement,setStatement] = useState("");
  const {register,handleSubmit, reset,setValue,formState:{errors}}=useForm()
  const[enquiry,setEnquiry]=useState({});
  const [files, setFiles] = useState({});

  // Move to the next step
  const nextStep = () => setStep(prev => prev + 1);
  
  // Move to the previous step
  const prevStep = () => setStep(prev => prev - 1);

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



  // const submitForm = (data) => {
  //   // console.log(data);
  //   axios.post(`http://localhost:9093/re/savedata`, data)
  //     .then(response => {//correct
  //       console.log(response.data);
  //       alert('Registration successfully');
  //     })
  //     .catch(() => alert("Something went wrong"));
  // };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles(prevFiles => ({ ...prevFiles, [name]: files[0] }));
  };
  const submitForm = (data) => {
    const formData = new FormData();
    
    // Append all form fields
    for (const key in data) {
      let dt = JSON.stringify(data[key])
      // formData.append(key, dt);
      formData.append("data",dt)
    }
    
    // Append all files
    for (const key in files) {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    }
  
    // Log formData for debugging
    formData.forEach((value, key) => {
      console.log(key,value);
    });
  
    axios.post(`http://localhost:9093/re/savedata`, formData)
      .then(response => {
        console.log(response.data);
        alert('Registration successfully');
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Something went wrong");
      });
  };
  
  


  return (
    <div >
      
      <form className='register-form' onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading1'>{statement}</h5>
      <input hidden {...register('enquiry.enquiryID')}/>
      {step===1 && (
      <div className='step'>
        <h4>Personal Details</h4>
    
        <div className='form-element1'><label>First name: </label><span>{errors.fname&&errors.fname.message}</span>
        <input type="text" {...register('firstName')}/></div>
        <div className='form-element1'><label>Last name: </label>
        <input type="text" {...register('lastName')}/></div>
        
        <div className='form-element1'><label>Age: </label><span>{errors.age&&errors.age.message}</span>
        <input type="number" {...register('age',validator.age)}/></div>
      
       <div className='form-element1'><label>Email: </label><span>{errors.email&&errors.email.message}</span>
       <input type="email" {...register('email',validator.email)}/></div>

       <div className='form-element1'><label>Date Of Birth: </label><span>{errors.dob&&errors.dob.message}</span>
       <input type="date" {...register('dob')}/></div>
       
       <div className='form-element1'><label>Mobile number: </label><span>{errors.mobile&&errors.mobile.message}</span>
       <input type="tel" {...register('mobileNo',validator.mobile)}/></div>
       <div className='form-element1'><label>Gender: </label>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></div>

        <div className='form-element1'><label>PAN card number: </label><span>{errors.pan&&errors.pan.message}</span>
        <input type="text" {...register('pancardNo',validator.pan)}/></div>
        
        <div className='form-element1'><label>Aadhar card number: </label><span>{errors.adhar&&errors.adhar.message}</span>
        <input type="text" {...register('adharcardNo',validator.adhar)}/></div>

       </div>

       
      )}

      {step===2 && (
        <div>
          <h2>Bank Details</h2>
       <div className='form-element1'><label>Bank Name:</label>
       <input type='text' {...register('bank.bankName',validator.bankName)}/></div>

        <div className='form-element1'><label>Branch Name:</label>
        <input type='text' {...register('bank.branch',validator.branch)}/></div>

        <div className='form-element1'><label>IFSC Code:</label>
        <input type='text' {...register('bank.ifsccode',validator.ifsccode)}/></div>

        <div className='form-element1'><label>Account Number:</label>
        <input type='text' {...register('bank.accNo',validator.accNo)}/></div>

        <div className='form-element1'><label>Account Type:</label>
        <input type='text' {...register('bank.accType',validator.accType)}/></div>
         </div>
      )}

      {step===3 && (
        <div>
          <h2>Employment Details</h2>
          <div className='form-element1'><label>Organization Name:</label>
          <input type='text' {...register('emp.organization',validator.organization)}/></div>

          <div className='form-element1'><label>Organization Type:</label>
          <input type='text' {...register('emp.type',validator.type)}/></div>

          <div className='form-element1'><label>Organization Status:</label>
          <input type='text' {...register('emp.status',validator.status)}/></div>

        </div>
        
      )} 
        
      {step===4 && (
        <div>
          <h2>Permanent Address</h2>
        <div className='form-element1'><label>Area Name: </label><span>{errors.amount&&errors.amount.message}</span>
        <input type="text" {...register('padr.areaName',validator.areaName)}/></div>
        
        <div className='form-element1'><label>City Name: </label>
        <input type="text" {...register('padr.cityName',validator.cityName)}/></div>

        <div className='form-element1'><label>District:</label>
        <input type='text' {...register('padr.district',validator.district)}/></div>

        <div className='form-element1'><label>Pincode:</label><br/>
        <input type='text' {...register('padr.pincode',validator.pincode)}/></div>


        <div className='form-element1'><label>State:</label>
        <input type='text' {...register('padr.state',validator.state)}/></div>

        <div className='form-element1'><label>Country:</label>
        <input type='text' {...register('padr.country',validator.country)}/></div>

    
        </div>
      )}

     {step===5 && (
        <div>
          <h2>Local Address</h2>
        <div className='form-element1'><label>Area Name: </label><span>{errors.amount&&errors.amount.message}</span>
        <input type="text" {...register('ladr.areaName',validator.areaName)}/></div>
        
        <div className='form-element1'><label>City Name: </label>
        <input type="text" {...register('ladr.cityName',validator.cityName)}/></div>

        <div className='form-element1'><label>District:</label>
        <input type='text' {...register('ladr.district',validator.district)}/></div>

        <div className='form-element1'><label>Pincode:</label><br/>
        <input type='text' {...register('ladr.pincode',validator.pincode)}/></div>


        <div className='form-element1'><label>State:</label>
        <input type='text' {...register('ladr.state',validator.state)}/></div>

        <div className='form-element1'><label>Country:</label>
        <input type='text' {...register('ladr.country',validator.country)}/></div>

    
        </div>
      )}

{step===6 && (
        <div>
          <h2>Disbursment</h2>
        {/* <div className='form-element1'><label>: </label><span>{errors.amount&&errors.amount.message}</span> */}
        <input type="text" {...register('disbursement.disbursementAccountNo')}/>
        <input type="text" {...register('disbursement.disbursementLetter')}/></div>
        // </div>
      )}

      {step===7 &&(
        <div>
        <h2>Upload Document</h2>
        <div className='form-element1'><label>AadharCard: </label>
        <input type="file" {...register('doc.adhar')}  onChange={handleFileChange}/></div>

        <div className='form-element1'><label>PanCard: </label>
        <input type="file" {...register('doc.pan')} onChange={handleFileChange}/></div>

        <div className='form-element1'><label>Photo: </label>
        <input type="file" {...register('doc.photo')} onChange={handleFileChange}/></div>

        <div className='form-element1'><label>Sign: </label>
        <input type="file" {...register('doc.sign')} onChange={handleFileChange} /></div>

        <div className='form-element1'><label>Income Certificate: </label>
        <input type="file" {...register('doc.incomeCertificate')} onChange={handleFileChange} /></div>

        <div className='form-element1'><label>Salary Slip: </label>
        <input type="file" {...register('doc.salarySlip')} onChange={handleFileChange}/></div>
      </div>
      )}

        <div className='form-navigation1'>
          {step > 1 && (
            <button type="button" className='nav-button1' onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 7 && (
            <button type="button" className='nav-button1' onClick={nextStep} >
              Next
            </button>
          )}
          {step === 7 && (
            <button type="submit" className='submit-button1'>
              Submit Form
            </button>
          )}
        </div>
      </form>

    </div>
  )
}

export default Registration
