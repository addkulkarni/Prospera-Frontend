import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Header from '../../include/header/Header';
import { useNavigate } from 'react-router-dom';
import  '../cm/Cm.css';



function Cm() {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9095/cm/getallpendingsanctionbyLoanStatus')
        .then(response=>{setData(response.data);console.log(response.data)})
        .catch(error=>console.log("Something went wrong"));
        
    },[])
    const navigate = useNavigate();

    const SetLoanDetails = (cid) => {
        navigate(`/setloandetails/${cid}`);
    };
    function calculateEmi(cid)
    {
        axios.get(`http://localhost:9095/cm/calculateEMI/${cid}`)
        .then(response => {console.log(response.data);navigate(0);
            // alert(`EMI amount is ${emiAmount}`);
        })
        .catch(() => console.log("Something went wrong"));
};

function generatesanctionletter(cid)
{
    // axios.get(`http://localhost:9095/cm/generatesanctionletter/${cid}`)
    // axios.get(`http://laptop-24mcb6q9:9095/cm/emailsanctionletter/${cid}`)
    // .then(response => {console.log(response.data,"downloaded letter and mail send"); //navigate(0);
        
    // })
    // .catch(() => console.log("Something went wrong"));


    const sanctionLetterUrl =`http://localhost:9095/cm/generatesanctionletter/${cid}`;
    const emailSanctionLetterUrl =`http://localhost:9095/cm/emailsanctionletter/${cid}`;

        // Promise.all([
        //     axios.get(sanctionLetterUrl),
        //     axios.get(emailSanctionLetterUrl)
        // ])
        // .then(([sanctionResponse, emailResponse]) => {
        //     console.log(sanctionResponse.data, "Sanction letter generated");
        //     console.log(emailResponse.data, "Email sent");
        // })
        // .catch(() => console.log("Something went wrong"));

        // Promise.allSettled([
        //     axios.get(sanctionLetterUrl),
        //     axios.get(emailSanctionLetterUrl)
        // ])
        // .then((results) => {
        //     results.forEach((result, index) => {
        //         if (result.status === 'fulfilled') {
        //             console.log(result.value.data, index === 0 ? "Sanction letter generated" : "Email sent");
        //         } else {
        //             console.error("Error in API call:", result.reason);
        //         }
        //     });
        // });

        axios.get(sanctionLetterUrl)
            .then(sanctionResponse => {
                console.log(sanctionResponse.data, "Sanction letter generated");
                // Now call the email API
                return axios.get(emailSanctionLetterUrl);
            })
            .then(emailResponse => {
                console.log(emailResponse.data, "Email sent");navigate(0);
            })
            .catch(error => {
                console.error("Error in generating sanction letter or sending email:", error);
            });
};

   
 const cols=[
        {
        name:"Customer ID",
        selector:row=>row.cid,
        sortable:true
        },
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
            name:"Bank Name",
            selector:row=>row.bank?.bankName||'NA',
            sortable:true
        },
        {
            name:"Bank IFSC code",
            selector:row=>row.bank?.ifscCode||'NA',
            sortable:true
        },
        {
            name:"Bank Account No",
            selector:row=>row.bank?.accNo||'NA',
            sortable:true
        },
        {
            name:"Actions",
            cell: (row) => (
                <>
                {row.enquiry?.enquiryStatus === "Pending Sanction" && (
                    <button className='set-cm-button' onClick={() => SetLoanDetails(row.cid)}>Set Loan Details</button>
                )}
                {row.enquiry?.enquiryStatus === "Sanction Process In Progress" && (
                    <button  className='set-cm-button' onClick={() => calculateEmi(row.cid)}>Calculate EMI</button>
                )}
               {
    (row.enquiry?.enquiryStatus === "EMI calculated" || row.enquiry?.enquiryStatus === "Sanction Letter Generated") && (
        <button className='set-cm-button' onClick={() => generatesanctionletter(row.cid)}>Generate Sanction Letter and Send Email</button>
    )
}
            </>
            )
        }
    ]
  return (
    <div>

        <div className='m-3'>
            
            
        </div>
        <div className='col col-12 mt-5'>
         <DataTable columns={cols} data={data} pagination fixedHeader> </DataTable>
        </div>
    </div>
  )
}

export default Cm