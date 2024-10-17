import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Customer.css'
function Customer() {
  const stringdata = localStorage.getItem('user');
  const {firstname,lastname,username,password}=JSON.parse(stringdata);
  const[customer,setCustomer]=useState();
  const[letter,setLetter]=useState();

  useEffect(()=>{
    axios.get(`http://localhost:9094/login/login/${username}/${password}`)
    .then(response=>{setCustomer(response.data);console.log(response.data);setLetter(response.data.sanction.sanctionLetter)})
    .catch(error=>alert("Login service is down"))
  },[])

  const approveSanction=()=>{
    axios.get(`http://localhost:9094/login/approvesanctiondetails/${username}/${password}`)
    .then(response=>{alert("Sanction has been approved successfully")})
    .catch(error=>alert("Something went wrong"));
  }

  return (
    <div>
      <div className='row row-container' >
      <div className='col-6' >
        <div className='m-5 p-5 backgorund-color'>
          <p>Congratulations {firstname},</p>
          <p> Below is your generated sanction letter which contains all the details of the loan.</p>
          <p>Please go through the document and click on the button below the document to approve the sanction letter so as to continue the further loan disbursal process</p>
          <p>Thanks a lot for choosing Prospera Finance Ltd. We are glad to be a part of your eventful life.</p>
          <p>Team Prospera Finance</p>
        </div>
       
      </div>
      
      <div className='col-6 p-5 document-container'>
        <iframe src={'data:application/pdf;base64,'+letter} title="PDF Viewer" style={{ border: 'none' }}></iframe>
      </div>
      </div>
      <br/><button className='btn mb-5  p-2 w-25' onClick={approveSanction} style={{borderRadius:'4px', backgroundColor:'#48c5b7',color:'#233b5e',border:'none',padding:'10px',width:'120px'}}>Approve Sanction</button>
    </div>
    
  ) 
}

export default Customer