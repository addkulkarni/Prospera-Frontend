import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useNavigate, useParams } from 'react-router-dom';

function ViewLedger() {
    const navigate = useNavigate();
    const {cid} = useParams();
    const[data,setData]=useState();

    useEffect(()=>{
        axios.get(`http://localhost:9096/ah/getLedger/${cid}`)
        .then(response=>setData(response.data))
        .catch(error=>alert("Something went wrong"));
    },[])

    const payEmi = (ledgerId)=>{
        axios.get(`http://localhost:9096/ah/payEMI/${cid}/${ledgerId}`)
        .then(response=>{alert("Emi for the current month has been paid");navigate(0)})
        .catch(error=>alert("Something went wrong"));
    }

    const skipEmi = (ledgerId)=>{
        axios.get(`http://localhost:9096/ah/skipEMI/${cid}/${ledgerId}`)
        .then(response=>{alert("Emi for the current month has been skipped");navigate(0)})
        .catch(error=>{
            if(error.status===404)
            {
                alert(error.response.data.message);
            }
            else{
                alert("Emi for the current month has been skipped");
                navigate(0);
            }
        });
    }
    const cols=[
        {
            name:'Payable Amount',
            selector:(row)=>row.payableAmount,
        },
        {
            name:"EMI payment start date",
            selector:(row)=>row.nextEmiStartDate
        },
        {
            name:"EMI payment end date",
            selector:(row)=>row.nextEmiEndDate
        },
        {
            name:"Emi status",
            selector:(row)=>row.currentMonthEmiStatus,
        },
        {
            name:"EMI amount",
            selector:(row)=>row.monthlyEmi,
        },
        {
            name:"Loan status",
            selector:(row)=>row.loanStatus,
        },
        {
            name:"Action",
            cell:(row)=><div>
                            <button className='m-1' hidden={row.currentMonthEmiStatus==="Paid"||row.currentMonthEmiStatus==="Skipped"} onClick={()=>payEmi(row.ledgerId)} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}>Pay EMI</button>
                            <button className='m-1' hidden={row.currentMonthEmiStatus==="Paid"||row.currentMonthEmiStatus==="Skipped"} onClick={()=>skipEmi(row.ledgerId)} style={{borderRadius:'4px', backgroundColor:'#233b5e',color:'white',border:'none',padding:'10px'}}>Skip EMI</button>
                        </div>
        }
    ]

  return (
    <div className='m-3 mt-4'>
      <DataTable columns={cols} data={data}/>
    </div>
  )
}

export default ViewLedger
