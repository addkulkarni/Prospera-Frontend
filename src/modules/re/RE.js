import React, { useEffect, useState } from 'react'
import Header from '../../include/header/Header'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useNavigate, useParams } from 'react-router-dom';



function RE() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9093/re/getAllPendingRegistration')
      .then(response => setData(response.data))
      .catch(error => console.log("Something went wrong"));
  }, []);

  const saveRegister = (enquiryID) => {
    navigate(`/dashboard/re/${enquiryID}`);
  };


const getAllPendingRegistration = () =>{
  data.filter(x=>x.enquiryStatus==="Pending Registration")
}
  
const cols=[
  {
    name:"First Name",
    selector:(row)=>row.firstName,
    sortable:'true',//use for sorting
  },
  {
    name:"Last Name",
    selector:(row)=>row.lastName,
  },
  {
    name:"Pancard",
    selector:(row)=>row.pancardNo,
  },
  {
    name:"Cibil Score",
    selector:(row)=>row.cibil?.cibilscore||'NA',
  },
  {
    name:"Enquiry Status",
    selector:(row)=>row.enquiryStatus,
  },
  {
    name: "Action",
    cell: (row) => (
      //  <Link className='btn btn-warning me-2 login-form-button' to={'register'}>Register</Link>
      <button style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}} onClick={()=>saveRegister(row.enquiryID)}>
        Register
      </button>
    ),
  }
  

]

  return (
    <div className='m-3 mt-5' style={{minHeight:'86vh'}}>
     
     
      <DataTable columns={cols} data={data} pagination fixedHeader></DataTable>
  
      

     
    </div>
  
  )
}

export default RE
