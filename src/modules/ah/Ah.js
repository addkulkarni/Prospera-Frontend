import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
function Ah() {

    const[data,setData]=useState();

    useEffect(()=>{
        axios.get('http://localhost:9096/ah/getallsanctionapproved')
        .then((response)=>{setData(response.data);console.log(response.data)})
        .catch(()=>alert("something went wrong"));
    },[])

    const cols=[
        {
            name:'First Name',
            selector:(row)=>row.firstName,
            sortable:true,
        },
        {
            name:'Last Name',
            selector:(row)=>row.lastName,
        },
        {
            name:'Email',
            selector:(row)=>row.email,
        },
        {
            name:'PAN',
            selector:(row)=>row.pancardNo,
        },
        {
            name:'Enquiry Status',
            selector:(row)=>row.enquiry.enquiryStatus,
            sortable:true,
        },
        {
            name:'Actions',
            cell:(row)=>(
                <div>
                    {
                        <div>
                            <button  hidden={row.enquiry.enquiryStatus === "Forwarded to Account Head"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}>Set recipient account</button>
                            <button hidden={row.enquiry.enquiryStatus === "Forwarded to Account Head"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}>Disburse Amount</button>
                            <button hidden={row.enquiry.enquiryStatus === "Loan Disbursed"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}>Create Ledger</button>
                        </div>
                    }
                    
                    
                </div>
            )
        }
    ]


  return (
    <div className='ah-component'>
      <div className='mt-3'>
        <DataTable columns={cols} data={data} pagination highlightOnHover fixedHeader ></DataTable>
      </div>
    </div>
  )
}

export default Ah
