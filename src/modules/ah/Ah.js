import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import DataTable, { Alignment } from 'react-data-table-component';
import BankAccount from './BankAccount';
import { useNavigate } from 'react-router-dom';
function Ah() {
    const navigate = useNavigate();
    const[data,setData]=useState();
    const [filteredData, setFilteredData] = useState([]); 
    const [filter, setFilter] = useState(''); 
    const[showForm,setShowForm]=useState(false);
    const[customerid,setCustomerid]=useState();
    useEffect(()=>{
        axios.get('http://localhost:9096/ah/getallsanctionapproved')
        .then((response)=>{setData(response.data);setFilteredData(response.data)})
        .catch(()=>alert("something went wrong"));
    },[])

    const handleFilterChange= (e) =>{
        const filterValue = e.target.value;
        setFilter(filterValue);

        if(filterValue==='')
        {
            setFilteredData(data);
        }
        else
        {
            const newData = data.filter(row=>row.enquiry.enquiryStatus===filterValue)
            setFilteredData(newData);
        }
    }

    const openShowForm = (cid)=>{
        setCustomerid(cid);
        setShowForm(true);  
    }

    const disburseAmount = (cid)=>{
        axios.get(`http://localhost:9096/ah/disburseamount/${cid}`)
        .then(()=>alert("Amount has been disbursed"))
        .catch(()=>alert("Something went wrong"));
        navigate(0);
    }

    const createLedger=(cid)=>{
        axios.get(`http://localhost:9096/ah/createledger/${cid}`)
        .then(()=>alert("Ledger has been created successfully"))
        .catch(()=>alert("Something went wrong"));
       navigate(0);
    }

    const showLedger = (cid)=>{
        axios.get('')
    }

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
            minwidth: '20px',
           
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
                            <button className='m-1' hidden={row.enquiry.enquiryStatus != "Forwarded to Account Head"||row.disbursement.disbursementAccountNo!=0} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}} onClick={() => openShowForm(row.cid)}>Set recipient account</button>
                            <button className='m-1' hidden={row.enquiry.enquiryStatus != "Forwarded to Account Head"||row.disbursement.disbursementAccountNo==0} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}} onClick={()=> disburseAmount(row.cid)}>Disburse Amount</button>
                            <button className='m-1' hidden={row.enquiry.enquiryStatus != "Loan Disbursed"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}} onClick={()=> createLedger(row.cid)}>Create Ledger</button>
                            <button className='m-1' hidden={row.enquiry.enquiryStatus != "Ledger Created"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}} onClick={()=> showLedger(row.cid)}>Show Ledger</button>
                        </div>
                    }    
                </div>
            ),
            minwidth: '100px',
           
        }
    ]

  return (
  
     <div>
                
   
    <div className='ah-component' style={{minHeight:'94vh'}}>
    {

        (showForm)?<BankAccount cid={customerid}/>:<div className='mt-3 m-3'><div style={{ marginBottom: '20px' }} className='float-start'>
        <label className='m-3'>Filter By:</label>&nbsp;&nbsp;
            <select className='m1-auto' value={filter} onChange={handleFilterChange}>
                <option disabled>Filter by</option>
                <option value="Forwarded to Account Head">Pending Recipient's Bank Account Number</option>
                <option value="Hello">Pending Disbursement</option>
                <option value="Loan Disbursed">Pending Ledger Creating</option>
                <option value="">Show all</option>
            </select>
            </div>
                <DataTable columns={cols} data={filteredData} pagination highlightOnHover fixedHeader compact ></DataTable>
            </div>
    }
      
    </div>
    </div>
  )
}

export default Ah
