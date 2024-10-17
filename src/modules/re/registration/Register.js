
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
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
    setValue('enquiry.enquiryID',enquiryId);
        for (let prop in enquiry) {
          setValue(prop, enquiry[prop]);
        }
  },[enquiry,setValue])



  const submitForm = async (data) => {
    try {
        // Create a new FormData object
        const formData = new FormData();

        // Extract JSON data from the form fields
        const jsonData = {
            enquiryID: data.enquiry.enquiryID,
            dob: data.dob,
           
        };

        // Add the JSON data to the formData object as a string
        formData.append('jsonData', JSON.stringify(jsonData));

        // Add file fields for `doc` (ensure that you have input fields for these in your form)
        if (data.doc?.adhar) {
            formData.append('adhar', data.doc.adhar[0]); // Assuming `data.doc.adhar` is a File object from an input field
        }
        if (data.doc?.pan) {
            formData.append('pan', data.doc.pan[0]); // Assuming `data.doc.pan` is a File object from an input field
        }
        if (data.doc?.photo) {
            formData.append('photo', data.doc.photo[0]); // Assuming `data.doc.photo` is a File object from an input field
        }

        // Send the data using axios
        await axios.post('http://localhost:9093/re/savedata', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Data saved successfully');
    } catch (error) {
        console.error('Error saving data:', error);
    }
};

  return (
    <div>
         <form className='register-form' onSubmit={handleSubmit(submitForm)}>
      <h5 className='subheading1'>{statement}</h5>
        <div className='step'>
        <h4>Personal Details</h4>
        <div className='form-element1'>
        <input type="number"  {...register('enquiry.enquiryID')}/></div>
        {/* <div className='form-element1'><label>First name: </label>
        <input type="text" {...register('firstName')}/></div>
        <div className='form-element1'><label>Last name: </label>
        <input type="text" {...register('lastName')}/></div>
        
        <div className='form-element1'><label>Age: </label>
        <input type="number" {...register('age')}/></div>
      
       <div className='form-element1'><label>Email: </label>
       <input type="email" {...register('email')}/></div> */}

       <div className='form-element1'><label>Date Of Birth: </label>
       <input type="date" {...register('dob')}/></div>
       
       {/* <div className='form-element1'><label>Mobile number: </label>
       <input type="tel" {...register('mobileNo')}/></div>
       <div className='form-element1'><label>Gender: </label>
        <select {...register('gender')} defaultValue="">
          <option value="" disabled>---Select---</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></div>

        <div className='form-element1'><label>PAN card number: </label>
        <input type="text" {...register('pancardNo')}/></div>
        
        <div className='form-element1'><label>Aadhar card number: </label>
        <input type="text" {...register('adharcardNo')}/></div> */}
        <button type="submit" className='submit-button1'>
              Submit Form
            </button>
       </div>

        </form>
    </div>
  )
}

export default Register