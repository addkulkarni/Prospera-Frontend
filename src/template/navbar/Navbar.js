import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Body from '../body/Body';
import { Link } from 'react-router-dom';
function Navbar(){
  return (
    <div className="navbar-container">
      <Link to={'/'}><img class="logo" src="./Images/Prospera Logo Text.png"></img></Link>
        <nav className="navbar">
          <div className='navbar-box-left'>
            <ul className='navbar-list'>
              <li><a className='menu-elements' href="#about">About Us</a></li>
              <li><a className='menu-elements' href="#faq">FAQs</a></li>
              <li><a className='menu-elements' href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className='navbar-box-right'>
            <ul className='navbar-list'>
              <li className="login-button"><Link to={'/login'}>Login</Link></li>
            </ul>
          </div>
          
        </nav>
      
    </div>
  )
}

export default Navbar
