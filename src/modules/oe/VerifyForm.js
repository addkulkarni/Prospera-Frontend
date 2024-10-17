import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { context } from './Oe';
import { TailSpin } from 'react-loader-spinner';
import Oe from './Oe';
import './VerifyForm.css';
function VerifyForm({ onVerificationComplete }) {
    const customer = useContext(context);
    const{register,handleSubmit,setValue}=useForm();
    const[loading,setLoading]=useState(false);
    const navigate = useNavigate(); 
    const [doc,setDoc]=useState({});
    const onSubmit = (data) => {
        {
            setLoading(true);
            axios.get(`http://localhost:9092/oe/documentverification/${data.cid}/approved`)
            .then(response=>{
                if(response.status===200)
                {
                    console.log("Verification successful");
                    onVerificationComplete();
                }
                else{
                    console.log("Verification failed ")
                }
            })
            .catch(error=>alert("Verification failed"))
            .finally(()=>setLoading(false));
        }
    }
      useEffect(()=>{
        
        console.log(customer);
          for(let fields in customer)
          {
            setValue(fields,customer[fields])
             if(fields==='doc') setDoc(customer[fields]);
          }

        
      },[setValue,customer])


  return (
    <div className="form-container">
       <button className="btn mb-2" onClick={()=>onVerificationComplete()} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}><i class="bi bi-arrow-left"></i>&nbsp;Back</button>
      <form onSubmit={handleSubmit(onSubmit)} className="customer-form">
      <h4>Customer Details</h4>
      
     
        <input type="text" hidden {...register('cid')}/>
     
      
        <input type="text" hidden {...register('username')}/>
      
        <input type="text" hidden {...register('password')}/>
      

      <div className='form-element'>
        <label>First Name</label>
        <input type="text" disabled {...register('firstName')} style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Last Name</label>
        <input type="text" disabled {...register('lastName')} style={{width:'270px'}} />
      </div>

      <div className='form-element'>
        <label>Age</label>
        <input type="number" disabled {...register('age')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Gender</label>
        <input type="text" disabled {...register('gender')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Date of Birth</label>
        <input type="text" disabled {...register('dob')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Email</label>
        <input type="email" disabled {...register('email')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Mobile No</label>
        <input type="text" disabled {...register('mobileNo')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Aadhar Card No</label>
        <input type="text" disabled {...register('adharcardNo')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>PAN Card No</label>
        <input type="text" disabled {...register('pancardNo')}  style={{width:'270px'}}/>
      </div>

      <h4>Bank Details</h4>
      <div className='form-element'>
        <label>Bank Name</label>
        <input type="text" disabled {...register('bank.bankName')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Branch</label>
        <input type="text" disabled {...register('bank.branch')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>IFSC Code</label>
        <input type="text" disabled {...register('bank.ifscCode')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Account No</label>
        <input type="text" disabled {...register('bank.accNo')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Account Type</label>
        <input type="text" disabled {...register('bank.accType')}  style={{width:'270px'}}/>
      </div>

      <h4>Employment Details</h4>
      <div className='form-element'>
        <label>Organization</label>
        <input type="text" disabled {...register('emp.organization')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Type</label>
        <input type="text" disabled {...register('emp.type')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Status</label>
        <input type="text" disabled {...register('emp.status')}  style={{width:'270px'}}/>
      </div>

      <h4>Address Details</h4>
      <h5>Permanent Address</h5><br/>
      <div className='form-element'>
        <label>Area</label>
        <input type="text" disabled {...register('padr.areaName')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>City</label>
        <input type="text" disabled {...register('padr.cityName')} style={{width:'270px'}} />
      </div>

      <div className='form-element'>
        <label>District</label>
        <input type="text" disabled {...register('padr.district')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Pincode</label>
        <input type="text" disabled {...register('padr.pincode')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>State</label>
        <input type="text" disabled {...register('padr.state')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Country</label>
        <input type="text" disabled {...register('padr.country')} style={{width:'270px'}} />
      </div>

      <h5>Local Address</h5><br/>
      <div className='form-element'>
        <label>Area</label>
        <input type="text" disabled {...register('ladr.areaName')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>City</label>
        <input type="text" disabled {...register('ladr.cityName')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>District</label>
        <input type="text" disabled {...register('ladr.district')} style={{width:'270px'}} />
      </div>

      <div className='form-element'>
        <label>Pincode</label>
        <input type="text" disabled {...register('ladr.pincode')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>State</label>
        <input type="text" disabled {...register('ladr.state')}  style={{width:'270px'}}/>
      </div>

      <div className='form-element'>
        <label>Country</label>
        <input type="text" disabled {...register('ladr.country')}  style={{width:'270px'}}/>
      </div>

      <h4>Document Details</h4>
      <div className='form-element'>
        <label>Adhar Card</label>
        <img src={'data:image/jpeg;base64,'+doc.adhar}/>
      </div>

      <div className='form-element'>
        <label>PAN Card</label>
        <img src={'data:image/jpeg;base64,'+doc.pan} />
      </div>

      <div className='form-element'>
        <label>Photo</label>
        <img src={'data:image/jpeg;base64,'+doc.photo} />
      </div>

      <div className='form-element'>
        <label>Signature</label>
        <img src={'data:image/jpeg;base64,'+doc.sign} />
      </div>

      <div className='form-element'>
        <label>Income Certificate</label>
        <img src={'data:image/jpeg;base64,'+doc.incomeCertificate} />
      </div>

      <div className='form-element'>
        <label>Salary Slip</label>
        <img src={'data:image/jpeg;base64,'+doc.salarySlip} />
      </div>

        {
            loading?<div className="loading-container">
            <TailSpin height="40" width="40" color="#48c5b7" ariaLabel="Submitting Enquiry" />
            <p>Submitting Enquiry</p>
            </div>:<button type="submit" className='verify-button'>Verify</button>
        }
      
      </form>
    </div>
  )

}
export default VerifyForm