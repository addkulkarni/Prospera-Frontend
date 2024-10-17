import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css' // Your custom styles
import { FaUser } from 'react-icons/fa'; // Using React Icons for the user icon
import Profile from './Profile';

function Header() {

  const[displayList,setDisplayList]=useState(false);

  const showList = ()=>{
    alert("clicked")
    setDisplayList(true);
  }

  return (
    <div className="header-container" >
      <nav className="navbar">
        <Link to={'/'} className="logo-container">
          <img className="logo" alt="Not available" src="/Images/Prospera Logo Text.png" />
        </Link>
        
        <div className='navbar-box-right'>
          
            <Profile></Profile>
            
          
        </div>
      </nav>
    </div>
  );
}

export default Header;
