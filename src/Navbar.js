import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function Navbar(){
  return (
    <div>
      <img class="logo" src="./Images/Prospera Logo.png"></img>
        <nav>
          <ul className='navbar-box'>
            <li><a>About Us</a></li>
            <li><a style={{border:'1px groove #344d70'}}>Login</a></li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
