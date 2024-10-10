import React from 'react'
import './Faq.css'
function Faq() {
  return (
    <div className='faq-container' id='faq'>
      <h1>FAQs</h1>
      <div className='faq-card-container'>
        <div  className='faq-card'>
            <p><b>Q: What documents do I need to apply for a home loan?</b></p>
            <p>A: You’ll typically need proof of income, tax returns, credit history, and details of your assets and debts. Our team will provide a complete list to ensure you’re prepared.</p>
        </div>

        <div  className='faq-card'>
            <p><b>Q: How much can I borrow?</b></p>
            <p>A: The amount you can borrow depends on several factors, including your income, credit score, and the value of the property. We’ll help you determine your borrowing capacity during the pre-approval process.
            </p>
        </div>

        <div  className='faq-card'>
            <p><b>Q: What is the minimum down payment required?</b></p>
            <p>A: Down payment requirements vary by loan type. Conventional loans often require a minimum of 3% to 20%, while FHA loans may allow for as little as 3.5%.</p>
        </div>
      </div>
    </div>
  )
}

export default Faq
