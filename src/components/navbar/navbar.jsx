import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleDropdown = (section) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [section]: !prevExpanded[section],
    }));
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="path/to/logo.png" alt="Dravanti Middle East Logo" />
        </div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Dravanti</li>
          <li className="dropdown" onClick={() => toggleDropdown('Partners')}>
            Partners
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
            {expanded.Partners && (
              <ul className="submenu">
                <li>Partner 1</li>
                <li>Partner 2</li>
                <li>Partner 3</li>
              </ul>
            )}
          </li>
          <li>Team</li>
          <li>Contact</li>
          <li>News</li>
        </ul>
        <button className="investor-login-btn">Investor Login</button>
        <button className="menu-toggle" onClick={toggleSidebar}>☰</button>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* <img src="path/to/logo.png" alt="Logo" className="sidebar-logo" /> */}
          <h1>Let's make things <br /><span>happens</span></h1>
          <button className="close-btn" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <ul className="sidebar-menu">
          {['Home', 'Dravanti', 'Partners', 'Team', 'Contact Us','News'].map((item, index) => (
            <li key={index} className="menu-item">
              <div className="menu-title" onClick={() => toggleDropdown(item)}>
                {item.toUpperCase()}
                {item !== 'Contact Us' && item !== 'Home' && item !== 'Dravanti' && item !== 'Team' && item !== 'News' &&(
                  <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                )}
              </div>
              {expanded[item] && item !== 'Contact Us' && item !== 'Home' &&  item !== 'Dravanti' && item !== 'Team' && item !== 'News' && (
                <ul className="submenu">
                  <li>Submenu Item 1</li>
                  <li>Submenu Item 2</li>
                  <li>Submenu Item 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="contact-info">
          <h4>Contact Info</h4>
          <p>Chicago 12, Melbourne City, USA</p>
          <p>+88 01682648101</p>
          <p>info@example.com</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
