import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
  return (
    <div className="navbar-container">
      <Link to={'/'}><img className="logo" alt="Not available" src="/Images/Prospera Logo Text.png"></img></Link>
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
              <li className="login-link"><Link to={'/login'}>Login</Link></li>
            </ul>
          </div>
          
        </nav>
     
    </div>
  )
}

export default Navbar
