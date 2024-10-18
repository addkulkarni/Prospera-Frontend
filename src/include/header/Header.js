import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser } from 'react-icons/fa';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    setUser(userJson ? JSON.parse(userJson) : null);
  }, []);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo-container">
          <img className="logo" alt="Not available" src="/Images/Prospera Logo Text.png" />
        </Link>
        
        <div className='navbar-box-right'>
          <div 
            className="user-icon-button" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            <FaUser className="user-icon" />
            {isDropdownOpen && user && (
              <ul className="dropdown-menu">
                
                <li className="dropdown-item">
                  <strong>User Name:</strong> {user.username}
                </li>
                <li className="dropdown-item">
                  <strong>Role:</strong> {user.userType}
                </li>
                <li className="dropdown-item">
                  <strong>Email:</strong> {user.userEmail}
                </li><br/>
                <li>
                  <Link className='logout-form-button'to={'/'} onClick={handleLogout}>Logout</Link>
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
