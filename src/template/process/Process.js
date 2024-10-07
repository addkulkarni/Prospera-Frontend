import React from 'react'
import './Process.css'
function Process() {
  return (
    <div className='process-container'>
        <h1>Complete Home Loan Process</h1>
        <div className="parent-process-container">
            <div className="process_card">
                <h4>1. Submit your enquiry</h4>
                <p>Submit your inquiry, and our dedicated relationship manager will promptly reach out to assist you.</p>
            </div>

            <div className="process_card">
                <h4>2. CIBIL score check</h4>
                <p>We will review your CIBIL score, and if it meets the criteria, we will proceed with the application process.</p>
            </div>

            <div className="process_card">
                
               <h4>3. Registration</h4>
                <p>Our relationship manager will complete all necessary details and required documentation on your behalf.</p>
            </div>

            <div className="process_card">
                <h4>4. Document Verification</h4>
                <p>Our operations executive will thoroughly verify your documents to ensure a seamless process.</p>
            </div>

            <div className="process_card">
                <h4>5. Loan Sanction</h4>
                <p>Our credit manager will approve the loan details and send you the sanction letter for your acceptance.</p>
            </div>

            <div className="process_card">
                <h4>6. Loan Disbursement</h4>
                <p>Once you accept the sanction letter, the loan will be disbursed to the specified account.</p>
            </div>
        </div>
    </div>
  )
}

export default Process
