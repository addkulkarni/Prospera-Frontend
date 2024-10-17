
import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import validator from '../../../validation/Validator';
import './Registration.css';


function Registration() {

 
  const { enquiryId} = useParams();
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
    setValue('enquiry.enquiryID',enquiryId);
        for (let prop in enquiry) {
          setValue(prop, enquiry[prop]);
        }
  },[enquiry,setValue])


 



const submitForm = async (data) => {
  try {
    const formData = new FormData();
    const formattedDob = format(new Date(data.dob), 'dd/MM/yyyy'); 
    // Create an object to hold the specific fields
    const payload = {
      dob: formattedDob, // Assuming you handle this as a string in the required format
      enquiry: {
        enquiryID: data.enquiry.enquiryID
      },
      bank: {
        bankName: data.bank.bankName,
        branch: data.bank.branch,
        ifscCode: data.bank.ifscCode,
        accNo: data.bank.accNo,
        accType: data.bank.accType
      },
      padr: {
        areaName: data.padr.areaName,
        cityName: data.padr.cityName,
        district: data.padr.district,
        pincode: data.padr.pincode,
        state: data.padr.state,
        country: data.padr.country
      },
      ladr: {
        areaName: data.ladr.areaName,
        cityName: data.ladr.cityName,
        district: data.ladr.district,
        pincode: data.ladr.pincode,
        state: data.ladr.state,
        country: data.ladr.country
      },
      emp: {
        organization: data.emp.organization,
        type: data.emp.type,
        status: data.emp.status
      },
      disbursement: {} // If this is empty, you can just send it as is
    };

    // Append the JSON payload
    formData.append('data', JSON.stringify(payload));

    // Append the file inputs
    if (data.doc.adhar) {
      formData.append('adhar', data.doc.adhar[0]);
    }
    if (data.doc.pan) {
      formData.append('pan', data.doc.pan[0]);
    }
    if (data.doc.photo) {
      formData.append('photo', data.doc.photo[0]);
    }
    if (data.doc.sign) {
      formData.append('sign', data.doc.sign[0]);
    }
    if (data.doc.incomeCertificate) {
      formData.append('incomeCertificate', data.doc.incomeCertificate[0]);
    }
    if (data.doc.salarySlip) {
      formData.append('salarySlip', data.doc.salarySlip[0]);
    }

    // Make the POST request
    const response = await axios.post('http://localhost:9093/re/savedata', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle success response
    console.log('Response:', response.data);
    alert(response.data); // Or handle as per your app requirements
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form. Please try again.');
  }
};


  


  return (
    <div style={{height:'500px', display:'block'}} className="reg-form-container">
      
      <form className="customer-reg-form" onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading1'>{statement}</h5>
      {/* <input hidden {...register('enquiry.enquiryID')}/> */}
      {step===1 && (
      <div className='step'>
        <h4>Personal Details</h4>
        <div className='form-element1'>
        <input type="number" hidden {...register('enquiry.enquiryID')}/></div>

        <div className='reg-form-element'><label>First name: </label><span>{errors.fname&&errors.fname.message}</span>
        <input type="text" placeholder='First name' {...register('firstName')}/></div>

        <div className='reg-form-element'><label>Last name: </label>
        <input type="text" placeholder='Last name' {...register('lastName')}/></div>
        
        <div className='reg-form-element'><label>Age: </label><span>{errors.age&&errors.age.message}</span>
        <input type="number" {...register('age',validator.age)}/></div>
      
       <div className='reg-form-element'><label>Email: </label><span>{errors.email&&errors.email.message}</span>
       <input type="email" {...register('email',validator.email)}/></div>

       <div className='reg-form-element'><label>Date Of Birth: </label><span>{errors.dob&&errors.dob.message}</span>
       <input type="date" {...register('dob')}/></div>
       
       <div className='reg-form-element'><label>Mobile number: </label><span>{errors.mobile&&errors.mobile.message}</span>
       <input type="tel" {...register('mobileNo',validator.mobile)}/></div>

       <div className='reg-form-element'><label>Gender: </label>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></div>

        <div className='reg-form-element'><label>PAN card number: </label><span>{errors.pan&&errors.pan.message}</span>
        <input type="text" {...register('pancardNo',validator.pan)}/></div>
        
        <div className='reg-form-element'><label>Aadhar card number: </label><span>{errors.adhar&&errors.adhar.message}</span>
        <input type="text" {...register('adharcardNo',validator.adhar)}/></div>

       </div>

       
      )}

      {step===2 && (
        <div className='step'>
          <h2>Bank Details</h2>
       <div className='reg-form-element'><label>Bank Name:</label>
       <input type='text' {...register('bank.bankName')}/></div>

        <div className='reg-form-element'><label>Branch Name:</label>
        <input type='text' {...register('bank.branch')}/></div>

        <div className='reg-form-element'><label>IFSC Code:</label>
        <input type='text' {...register('bank.ifscCode')}/></div>

        <div className='reg-form-element'><label>Account Number:</label>
        <input type='number' {...register('bank.accNo')}/></div>

        <div className='reg-form-element'><label>Account Type:</label>
        <input type='text' {...register('bank.accType')}/></div>
         </div>
      )}

      {step===3 && (
        <div className='step'>
          <h2>Employment Details</h2>
          <div className='reg-form-element'><label>Organization Name:</label>
          <input type='text' {...register('emp.organization')}/></div>

          <div className='reg-form-element'><label>Organization Type:</label>
          <input type='text' {...register('emp.type')}/></div>

          <div className='reg-form-element'><label>Organization Status:</label>
          <input type='text' {...register('emp.status')}/></div>

        </div>
        
      )} 
        
      {step===4 && (
        <div className='step'>
          <h2>Permanent Address</h2>
        <div className='reg-form-element'><label>Area Name: </label><span>{errors.amount&&errors.amount.message}</span>
        <input type="text" {...register('padr.areaName')}/></div>
        
        <div className='reg-form-element'><label>City Name: </label>
        <input type="text" {...register('padr.cityName')}/></div>

        <div className='reg-form-element'><label>District:</label>
        <input type='text' {...register('padr.district')}/></div>

        <div className='reg-form-element'><label>Pincode:</label><br/>
        <input type='number' {...register('padr.pincode')}/></div>


        <div className='reg-form-element'><label>State:</label>
        <input type='text' {...register('padr.state')}/></div>

        <div className='reg-form-element'><label>Country:</label>
        <input type='text' {...register('padr.country')}/></div>

    
        </div>
      )}

     {step===5 && (
        <div className='step'>
          <h2>Local Address</h2>
        <div className='reg-form-element'><label>Area Name: </label><span>{errors.amount&&errors.amount.message}</span>
        <input type="text" {...register('ladr.areaName')}/></div>
        
        <div className='reg-form-element'><label>City Name: </label>
        <input type="text" {...register('ladr.cityName')}/></div>

        <div className='reg-form-element'><label>District:</label>
        <input type='text' {...register('ladr.district')}/></div>

        <div className='reg-form-element'><label>Pincode:</label><br/>
        <input type='number' {...register('ladr.pincode')}/></div>


        <div className='reg-form-element'><label>State:</label>
        <input type='text' {...register('ladr.state')}/></div>

        <div className='form-element'><label>Country:</label>
        <input type='text' {...register('ladr.country')}/></div>

    
        </div>
      )}



      {step===6 &&(
      <div className='step'>
        <h2>Upload Document</h2>
        <div className='reg-form-element'><label>AadharCard: </label>
        <input type="file" {...register('doc.adhar')} /></div>

        <div className='reg-form-element'><label>PanCard: </label>
        <input type="file" {...register('doc.pan')}/></div>

        <div className='reg-form-element'><label>Photo: </label>
        <input type="file" {...register('doc.photo')} /></div>

        <div className='reg-form-element'><label>Sign: </label>
        <input type="file" {...register('doc.sign')}  /></div>

        <div className='reg-form-element'><label>Income Certificate: </label>
        <input type="file" {...register('doc.incomeCertificate')} /></div>

        <div className='reg-form-element'><label>Salary Slip: </label>
        <input type="file" {...register('doc.salarySlip')} /></div>
      </div>
      )}

        <div className='form-navigation1'>
          {step > 1 && (
            <button type="button" className='nav-button1' onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 6 && (
            <button type="button" className='nav-button1' onClick={nextStep} >
              Next
            </button>
          )}
          {step === 6 && (
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
