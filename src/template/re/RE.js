import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useNavigate, useParams } from 'react-router-dom';



function RE() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://gayatri:9093/re/getAllPendingRegistration')
      .then(response => setData(response.data))
      .catch(error => console.log("Something went wrong"));
  }, []);

  const saveRegister = (enquiryID) => {
    navigate(`/registration/${enquiryID}`);
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
      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '10px', cursor: 'pointer' }} onClick={()=>saveRegister(row.enquiryID)}>
        Register
      </button>
    ),
  }
  

]

  return (
    <div>
      <div>
        <Header></Header>
        <i className="bi bi-filter"></i>&nbsp;&nbsp;
        <select>
          <option value="" disabled>SELECT</option>
          <option value="PendingRegistration" onSelect={getAllPendingRegistration}>Pending Registration</option>
        </select>&nbsp;&nbsp;
      </div>
      <div>
      <DataTable columns={cols} data={data} pagination fixedHeader></DataTable>
      </div>
      {/* <Routes>
        <Route path='register' element={<Registration/>}></Route>
      </Routes> */}

     
    </div>
  
  )
}

export default RE
