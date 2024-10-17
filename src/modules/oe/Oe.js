import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import VerifyForm from './VerifyForm';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
export const context=createContext();

function Oe() {
    const navigate = useNavigate();
    const[data,setData]=useState([]);
    const[customer, setCustomer]=useState({})
    const [filteredData, setFilteredData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(''); 
    const[showForm,setShowForm]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:9092/oe/oetasks')
        .then(response=>{setData(response.data);setFilteredData(response.data)})
        .catch(error=>console.log("Something went wrong"))
    },[])

    const handleFilterChange = (e)=>{
        const filterValue = e.target.value;
        setFilter(filterValue);

        if(filterValue==='')
        {
           
            setFilteredData(data);
        }
        else
        {
            const newData = data.filter(row=>row.enquiryStatus===filterValue)
            setFilteredData(newData);
        }
    }

    const verifyUser = (index)=>{
        
        setShowForm(true);
        
        axios.get(`http://localhost:9092/oe/getCustomerDetails/${index}`)
        .then(response=>{setCustomer(response.data)})
        .catch(error=>alert("Something went wrong"));
    }

    const callCalculateCibil = (index) =>{
        setLoading(true);
        axios.get(`http://localhost:9092/oe/cibilscore/${index}`)
        .then(response=>{setCustomer(response.data);alert(`Your cibil score is: ${response.data}`);navigate(0);})
        .catch(error=>console.log("Something went wrong"))
        .finally(() => setLoading(false));
        
    }

    const cols = [
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
            selector:(row)=>row.enquiryStatus,
            sortable:true,
        },
        {
            name:'Actions',
            cell:(row)=>(
                <div>
                    {
                        loading?<div className="loading-container">
                                    <TailSpin height="40" width="40" color="#48c5b7" ariaLabel="Submitting Enquiry" />
                                    <p>Submitting Enquiry</p>
                                </div>: <div><button onClick={() => callCalculateCibil(row.enquiryID)} hidden={row.enquiryStatus === "Pending Verification"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px',width:'120px'}}>Calculate CIBIL</button>
                                             <button onClick={() => verifyUser(row.enquiryID)} hidden={row.enquiryStatus === "Forwarded to OE"} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px',width:'120px'}}>Verify</button>
                                        </div>
                    }
                    
                    
                </div>
            )
        }
        
    ];

    const handleVerificationComplete = () => {
        setShowForm(false);
        // Refresh data if needed after verification
        axios.get('http://localhost:9092/oe/oetasks')
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => console.log("Something went wrong"));
    };

  return (
    
      
       <div className='col-12 mt-4 outer-container' style={{minHeight:'92vh'}}>
            
      <div>
        {
          
            (showForm)?<context.Provider value={customer}><VerifyForm onVerificationComplete={handleVerificationComplete}/></context.Provider>:(
            <div>
                <div style={{ marginBottom: '20px' }} className='float-start'>
                <label className='m-3'>Filter By:</label>&nbsp;&nbsp;
                    <select value={filter} onChange={handleFilterChange} className='m1-auto'>
                        <option disabled>Filter by</option>
                        <option value="Pending Verification">Pending Verification</option>
                        <option value="Forwarded to OE">Forwarded to OE</option>
                        <option value="">Show all</option>
                    </select>
            </div>
            <div className='m-3'>   
                <DataTable columns={cols} data={filteredData}  pagination fixedHeader highlightOnHover></DataTable>
            </div></div>)
        }
        </div>
        </div> 
  )
}

export default Oe
