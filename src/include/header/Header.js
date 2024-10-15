import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Your custom styles
import { FaUser } from 'react-icons/fa'; // Using React Icons for the user icon

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="header-container" onClick={handleOutsideClick}>
      <nav className="navbar">
        <Link to={'/'} className="logo-container">
          <img className="logo" alt="Not available" src="/Images/Prospera Logo Text.png" />
        </Link>
        
        <div className='navbar-box-right'>
          <div className="user-icon-button" onClick={(e) => { e.stopPropagation(); handleDropdownToggle(); }}>
            <FaUser className="user-icon" />
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <strong>User Name:</strong> John Doe
                </li>
                <li className="dropdown-item">
                  <strong>Role:</strong> Admin
                </li>
                <li className="dropdown-item logout-item">
                  <Link to={'/'}>Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
