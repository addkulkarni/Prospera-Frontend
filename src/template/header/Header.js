import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <nav className="navbar">
        <Link to={'/'} className="logo-container">
          <img className="logo" alt="Not available" src="./Images/Prospera Logo Text.png" />
        </Link>
        <div className='navbar-box-right'>
            <ul className='navbar-list'>
              <li className="login-button"><Link to={'/login'}>Login</Link></li>
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Header;
