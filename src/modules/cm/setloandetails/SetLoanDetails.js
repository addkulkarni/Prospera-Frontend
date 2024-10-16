import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './SetLoanDetails.css';

function SetLoanDetails() {
  const {cid}=useParams();
  const navigate = useNavigate();
   const { register,handleSubmit}=useForm();
   
  function submitForm(data)
  {
   
    axios.post(`http://localhost:9095/cm/setloandetails/${cid}`,data)
    .then(response=>{
      alert("Data Saved Successfully..!")
      navigate('/dashboard/cm');
    }
  ).catch(()=>alert("Something went wrong"));
  
  }
  return (
 
    <div >
        
     <div className='setLoan-form-container'>
    
        <form className='setLoan-form' onSubmit={handleSubmit(submitForm)}>
          <h2 className='setLoan-title'>Set Loan Details</h2>
          <div className='set-form-element'>
          
            <input className='setLoan-field' type='number' placeholder='Loanamount' {...register('loanamount')}/>
            <i className="bi bi-cash icon"></i>
          </div>
          <div  className='set-form-element'>
         
            <input className='setLoan-field' type='number' placeholder='InterestRate (%)' {...register('interestRate')}/>
            <i className="bi bi-percent icon"></i>
          </div>
          <div className='set-form-element' >
          
            <input className='setLoan-field' type='number' placeholder='Tenure (Months)' {...register('tenure')}/>
            <i className="bi bi-calendar icon"></i>
          </div>
          <button type='submit' className='setLoan-form-button'>Set LoanDetails</button>
        </form>
      </div>
    </div>
  )
}

export default SetLoanDetails;