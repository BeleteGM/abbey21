import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/img/my-profile-img.jpg'; // Profile image import
import './Header.css'; // Import the new CSS file

const Header = () => {
  // State to toggle the visibility of the sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="header-container">
      {/* Sidebar container */}
      <header className={`header ${isSidebarVisible ? 'header-show' : ''}`}>
        {/* Hamburger button for toggling sidebar */}
        <button
          className="header-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Profile Image */}
        <div className="profile-img">
          <img src={image1} alt="Profile" className="profile-img-thumbnail" />
        </div>

        {/* Logo */}
        <Link to="/" className="logo">
          <h1 className="sitename">Alex Smith</h1>
        </Link>

        {/* Social Links */}
        <div className="social-links">
          <Link to="#" className="social-link twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link to="#" className="social-link facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="#" className="social-link instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to="#" className="social-link skype">
            <i className="bi bi-skype"></i>
          </Link>
          <Link to="#" className="social-link linkedin">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>

        {/* Sidebar Navigation Menu */}
        <nav className="navmenu">
          <ul>
            <li>
              <Link to="/" className="nav-item">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                <i className="bi bi-person"></i> About
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-item">
                <i className="bi bi-file-earmark-text"></i> Resume
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-item">
                <i className="bi bi-images"></i> Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-item">
                <i className="bi bi-hdd-stack"></i> Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">
                <i className="bi bi-envelope"></i> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
