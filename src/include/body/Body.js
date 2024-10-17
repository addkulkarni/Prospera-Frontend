import 'bootstrap'
import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Enquiry from '../../modules/enquiry/Enquiry.js'
import About from '../../template/about/About.js'
import EMICalculator from '../../template/emicalculator/EMICalculator.js'
import Faq from '../../template/faq/Faq.js'
import Footer from '../../template/footer/Footer.js'
import Process from '../../template/process/Process.js'
import Navbar from '../navbar/Navbar.js'
import './Body.css'
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
     
      <About></About>
      <Process></Process>
      <Faq></Faq>
      <Footer></Footer>
    </div>
    
  </div>
   
  )
}

export default Body
