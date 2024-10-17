import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-container" onClick={handleOutsideClick}>
      <div className="dropdown-trigger" onClick={(e) => { e.stopPropagation(); toggleDropdown(); }}>
      <i className="bi bi-person-circle"></i>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <img src="/path/to/your/image1.jpg" alt="Option 1" className="menu-image" />
              <span>Option 1</span>
            </li>
            <li>
              <img src="/path/to/your/image2.jpg" alt="Option 2" className="menu-image" />
              <span>Option 2</span>
            </li>
            <li>
              <img src="/path/to/your/image3.jpg" alt="Option 3" className="menu-image" />
              <span>Option 3</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Profile;
