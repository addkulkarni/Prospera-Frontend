import React from 'react'
import Header from '../header/Header'
import { useState,useEffect } from 'react'
import axios from 'axios';
function Oe() {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://mypc:9092/oe/oetasks')
        .then(response=>setData(response.data))
        .catch(error=>console.log("Something went wrong"))
    },[])

    const getPendingVerification = () =>{
        data.filter(x=>x.enquiryStatus==="Pending Verification")
    }

    const getCibilPending = () =>{

    }

    const callCalculateCibil = (index) =>{
        axios.get(`http://mypc:9092/oe/cibilscore/${index}`)
        .then(response=>alert(response.data))
        .catch(error=>console.log("Something went wrong"))
    }
  return (
    <div>
      <div>
        <Header></Header>
        <i className="bi bi-filter"></i>&nbsp;&nbsp;
        <select defaultValue="">
            <option value="" disabled>SELECT</option>
            <option value="verificationpending" onSelect={getPendingVerification}>Verification Pending</option>
            <option value="cibilcheckpending" onSelect={getCibilPending}>Cibil Check Pending</option>
        </select>&nbsp;&nbsp;
        
        <i className="bi bi-arrow-down-up"></i>&nbsp;&nbsp;
        <select default="">
            <option id="" disabled>SELECT</option>
            <option>Date created</option>
            <option>Cibil score</option>
        </select>
      </div>
      <div className='col-12'>
        <table className='table table-centered table-bordered mt-5'>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>PAN</th>
                <th>Enquiry status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map((enquiry,index)=>{
                    return(
                        <tr key={index}>
                            <td>{enquiry.firstName}</td>
                            <td>{enquiry.lastName}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.pancardNo}</td>
                            <td>{enquiry.enquiryStatus}</td>
                            <td><button hidden={enquiry.enquiryStatus==="Pending Verification"} onClick={()=>callCalculateCibil(enquiry.enquiryID)}>Calulate CIBIL</button><button hidden={enquiry.enquiryStatus==="Forwarded to OE"}>Verify</button></td>
                        
                        </tr>
                    )
                })
            }   
            </tbody> 
        </table>
      </div>
    </div>
  )
}

export default Oe
