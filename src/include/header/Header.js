import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser } from 'react-icons/fa';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [propic,setPropic] = useState();
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const userData = JSON.parse(userJson);
    (userData)?setPropic(userData.photo):setPropic(false);
    setUserInfo(userData);
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
    setUserInfo(null);
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
            {propic ? (
      <img src={`data:image/jpg;base64,${propic}`} alt="User Profile" />
    ) : (
      <FaUser className="default-user-icon" /> // Fallback icon when no profile picture is available
    )}
            {isDropdownOpen && userInfo && (
              <ul className="dropdown-menu">
                
                <li className="dropdown-item">
                  <strong>Name:</strong> {userInfo.firstname} {userInfo.lastname}
                </li>
                <li className="dropdown-item">
                  <strong>Role:</strong> {userInfo.userType}
                </li>
                <li className="dropdown-item">
                  <strong>Email:</strong> {userInfo.userEmail}
                </li><br/>
                <li className="logout-container">
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
