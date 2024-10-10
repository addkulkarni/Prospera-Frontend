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

function Body() {
  return (
  <div >
    
      
<div className='div-container'>
<div className='heading'>
      <h1>Manifest prosperity with <br/>Prospera Finance<br/></h1>
    </div>
            {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="./Images/BG art.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./ImagesBG art.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="./Images/BG art.jpg" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}
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
    </div>
    
  </div>
   
  )
}

export default Body
