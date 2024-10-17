import React, { useState } from 'react'
import validator from '../../validation/Validator';
import { useForm } from 'react-hook-form';
import './Admin.css'
import axios from 'axios';

  const Admin = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register, reset, getValues, formState: { errors } } = useForm();
    const [statement, setStatement] = useState("Submit User Data here");

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file && file.size > 2 * 1024 * 1024) { // 2 MB limit
          setError('File size exceeds 2 MB');
          setImage(null);
      } else {
          setImage(file);
      }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    
    // Create a user object
    const user = {
      username: getValues('username'),
      password: getValues('password'),
      firstname: getValues('firstname'),
      lastname: getValues('lastname'),
        userEmail: getValues('userEmail'),
        userType: getValues('userType'),
    };

    // Append user data as a JSON string
    formData.append('data', JSON.stringify(user));
    
    if (image) {
        formData.append('photo', image);
    }

    try {
        const response = await axios.post('http://localhost:9097/admin/saveUser', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setSuccess('User saved successfully!');
        alert('User saved successfully');
        console.log('User saved:', response.data);
        reset(); // Reset form after successful submission
    } catch (error) {
        setError('Error saving user. Please try again.');
        console.error('Error saving user:', error);
    }
};

  return (
    <div className='admin-form-container mb-5 mt-3 w-50' style={{minHeight:'80vh'}}>
    <form className='admin-form' onSubmit={handleSubmit}>
        <h5 className='subheading'>{statement}</h5>

        <div className='form-row'>
          <div className='form-element'>
         
            <span className="error"></span>
            <input type="text" placeholder="Enter Username" {...register('username')} />
          </div>
          <div className='form-element'>
          <span className="error"></span>
            <input type="text" placeholder="Enter Password"{...register('password')} />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-element'>
         
            <span className="error">{errors.firstName && errors.firstName.message}</span>
            <input type="text" placeholder="Enter First Name" {...register('firstname', validator.fname)} />
          </div>
          <div className='form-element'>
          <span className="error"></span>
            <input type="text" placeholder="Enter Last Name"{...register('lastname')} />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-element'>
            
            <span className="error">{errors.email && errors.email.message}</span>
            <input type="email" placeholder='Enter Email' {...register('userEmail', validator.email)} />
          </div>
          <div className='form-element'>
          <span className="error"></span>
            <select {...register('userType')} defaultValue="">
              <option value="" disabled>Select UserType</option>
              <option value="Oe">oe</option>
              <option value="Re">re</option>
              <option value="Cm">cm</option>
              <option value="Ah">ah</option>
              <option value="Admin">admin</option>
            </select>
          </div>
        </div>
        <div className='form-element'>
        <span className="error"></span>
        <input type="file"  accept="image/*" {...register('photo')}   onChange={handleImageChange}/></div>

        <div className='form-navigation'>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  )
}
      
export default Admin