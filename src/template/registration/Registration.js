import React from 'react'
import './Registration.css'
import { useForm } from 'react-hook-form'
function Registration() {
    const{register,handleSubmit,reset,setValue,formState:{errors}}=useForm()
    function submitForm(e)
    {
        console.log(e)
    }
  return (
    <div className='registration-form-container'>
      <div className='form-field-container'>
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='form-field'>
                <label>Enter your first name:</label>
                <input type='fname' {...register('fname')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your last name:</label>
                <input type='fname' {...register('lname')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your email name:</label>
                <input type='email' {...register('email')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your age:</label>
                <input type='number' {...register('age')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your mobile number:</label>
                <input type='tel' {...register('mobile')}></input>
            </div>

            <div className='form-field'>
                <label>Select gender:</label>
                <select defaultValue={""} {...register('gender')}>
                    <option value="" disabled >Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className='form-field'>
                <label>Enter your PAN:</label>
                <input type='text' {...register('pan')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your Aadhar number:</label>
                <input type='text' {...register('aadhar')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your date of birth:</label>
                <input type='date' {...register('dob')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your bank name:</label>
                <input type='text' {...register('Bank.bankname')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your bank branch name:</label>
                <input type='text' {...register('Bank.branch')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your bank IFSC Code:</label>
                <input type='text' {...register('Bank.ifsc')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your bank account number:</label>
                <input type='number' {...register('Bank.accno')}></input>
            </div>

            <div className='form-field'>
                <label>Enter your bank account type:</label>
                <input type='number' {...register('Bank.acctype')}></input>
            </div>

            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Registration
