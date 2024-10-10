import React from 'react'
import './Body.css'
import Enquiry from '../enquiry/Enquiry'
import EMICalculator from '../emicalculator/EMICalculator'
import About from '../about/About'
import Process from '../process/Process'
import Faq from '../faq/Faq'
import Registration from '../registration/Registration'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'
import Navbar from '../navbar/Navbar.js';
import Footer from '../footer/Footer.js'
function Body() {
  return (
  <div >
    
    <Navbar></Navbar>
    <div className='div-container'>

    <div className='heading'>
      <h1>Manifest prosperity with <br/>Prospera Finance<br/></h1>
    </div>
           
    <Enquiry></Enquiry> 
</div>
    <div>
      <EMICalculator></EMICalculator>
    </div>
    <div>
      {/* <Registration/> */}
      <About></About>
      <Process></Process>
      <Faq></Faq>
      <Footer></Footer>
    </div>
    
  </div>
   
  )
}

export default Body
