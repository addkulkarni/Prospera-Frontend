import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

import  '../cm/Cm.css';
import SetLoanDetails from './setloandetails/SetLoanDetails';


function Cm() {
    const[data,setData]=useState([]);
    const [filter, setFilter] = useState(''); 
    const[showForm,setShowForm]=useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCid, setSelectedCid] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:9095/cm/getallpendingsanction')
        .then(response=>{setData(response.data);setFilteredData(response.data)

        }
       )
        .catch(error=>console.log("Something went wrong"));
        
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
            const newData = data.filter(row=>row.enquiry.enquiryStatus===filterValue)
            setFilteredData(newData);
        }
    }
    const handleSetLoanDetails = (cid) => {
        // setSelectedCid(cid); // Set the selected CID
        // setShowForm(true); // Show the form
        navigate(`/dashboard/cm/setloandetails/${cid}`);
    };
    

    // const SetLoanDetails = () => {
    //     //  navigate(`setloandetails/${cid}`);
    //     setShowForm(true);
        
    // };
    function calculateEmi(cid)
    {
        axios.get(`http://localhost:9095/cm/calculateEMI/${cid}`)
        .then(response => {console.log(response.data);  
         navigate(0);
            // alert(`EMI amount is ${emiAmount}`);
        })
        .catch(() => console.log("Something went wrong"));
};

function generatesanctionletter(cid)
{
    const sanctionLetterUrl =`http://localhost:9095/cm/generatesanctionletter/${cid}`;
    const emailSanctionLetterUrl =`http://localhost:9095/cm/emailsanctionletter/${cid}`;

        axios.get(sanctionLetterUrl)
            .then(sanctionResponse => {
                console.log(sanctionResponse.data, "Sanction letter generated");
                // Now call the email API
                return axios.get(emailSanctionLetterUrl);
            })
            .then(emailResponse => {
                console.log(emailResponse.data, "Email sent");   //setFilteredData(data);
                 navigate(0);
            })
            .catch(error => {
                console.error("Error in generating sanction letter or sending email  or already generated:", error);
            });
};

   
 const cols=[
        
        {
            name:"First Name",
            selector:row=>row.firstName,
            sortable:true
        },
        {
            name:"Last Name",
            selector:row=>row.lastName,
            sortable:true
        },
        {
            name:"PAN No",
            selector:row=>row.pancardNo,
            sortable:true
        },
        {
            name:"EnquiryStatus",
            selector:row=>row.enquiry?.enquiryStatus||'NA',
            sortable:true
        },
        {
            name:"Cibil score",
            selector:row=>row.enquiry?.cibil?.cibilscore||'NA',
            sortable:true
        },
        
        
        {
            name:"Actions",
            cell: (row) => (
            <>
                {row.enquiry?.enquiryStatus === "Pending Sanction" && (
                    <button className='set-cm-button' onClick={() => handleSetLoanDetails(row.cid)} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px',width:'170px'}}>Set Loan Details</button>
                )}
                {row.enquiry?.enquiryStatus === "Sanction Process In Progress" && (
                    <button  className='set-cm-button' onClick={() => calculateEmi(row.cid)} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px',width:'170px'}}>Calculate EMI</button>
                )}
               {
               (row.enquiry?.enquiryStatus === "EMI calculated" || row.enquiry?.enquiryStatus === "Sanction Letter Generated") && (
                <button className='set-cm-button' onClick={() => generatesanctionletter(row.cid)} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px',width:'170px'}}>Generate and Email SL</button>
               )
               }
            </>
            )
        }
    ]
  return (
            <div>
            {
                (showForm)? (<SetLoanDetails cid={selectedCid} setShowForm={setShowForm} /> ):(
                <div>
                    <div className='m-3'>
                    {
                        <div style={{ marginBottom: '20px' }} className='float-start'>
                            <label className='m-3'>Filter By:</label>&nbsp;&nbsp;
                            <select value={filter} onChange={handleFilterChange} className='m1-auto'>
                                <option disabled>Filter by</option>
                                <option value="Pending Sanction">Pending Sanction Details</option>
                                <option value="Sanction Process In Progress">Pending EMI Calculation</option>
                                <option value="EMI calculated">Pending Sanction letter generation</option>
                                <option value="">Show all</option>
                            </select>
                        </div>
                    } 
                    </div>

                    <div className=' mt-3 m-3' style={{minHeight:'94vh'}}>
                        <DataTable columns={cols} data={filteredData} pagination fixedHeader> </DataTable>
                    </div>
        
                </div>)
            } 
            </div>  
        );
}


export default Cm