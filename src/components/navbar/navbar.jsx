import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import "../../assets/style/navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleDropdown = (section) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [section]: !prevExpanded[section],
    }));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact" && location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < scrollPosition || currentScrollPos < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <>
      <div
        className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"}`}
      >
        <div className="navbar-logo" style={{ width: "20%" }}>
          <img
          onClick={()=> navigate("/")}
            style={{ width: "100%" }}
            src={logo}
            alt="Dravanti Middle East Logo"
          />
        </div>
        <div style={{ width: "50%" }}>
          <ul className="navbar-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Dravanti
              </NavLink>
            </li>
            <li className="dropdown" onClick={() => toggleDropdown("Partners")}>
              <NavLink>
                Partners <FaChevronDown className="dropdown-icon" />
              </NavLink>
              {expanded.Partners && (
                <ul className="submenu">
                  <li>
                    <NavLink to="/interMTraders" className="submenu-link">
                      Inter-M Traders FZ LLC
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/MBMEgroup" className="submenu-link">
                      MBME Group
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/GulfInternational" className="submenu-link">
                      Gulf data international
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Team
              </NavLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="investor-login-btn">Investor Login</button>
        </div>
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>
            Let's make things <br />
            <span style={{ color: "#828c8f" }}>happen</span>
          </h1>
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-menu">
          {["Home", "Dravanti", "Partners", "Team", "Contact Us", "News"].map(
            (item, index) => (
              <li key={index} className="menu-item">
                <div
                  className="menu-title"
                  onClick={() => toggleDropdown(item)}
                >
                  <NavLink
                    to={
                      item === "Home"
                        ? "/" 
                        : item === "Dravanti" ? "/about" : item === "Contact Us" ? "/#contact" : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    {item}
                  </NavLink>
                  {item !== "Contact Us" &&
                    item !== "Home" &&
                    item !== "Dravanti" &&
                    item !== "Team" &&
                    item !== "News" && (
                      <FaChevronDown className="dropdown-icon" />
                    )}
                </div>
                {expanded[item] &&
                  item !== "Contact Us" &&
                  item !== "Home" &&
                  item !== "Dravanti" &&
                  item !== "Team" &&
                  item !== "News" && (
                    <ul className="submenu">
                      <li>
                        <NavLink to={`/interMTraders`} className="submenu-link">
                          Inter-M Traders FZ LLC
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`/MBMEgroup`} className="submenu-link">
                          MBME Group
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`/MBMEgroup`} className="submenu-link">
                          Gulf Data International
                        </NavLink>
                      </li>
                    </ul>
                  )}
              </li>
            )
          )}
        </ul>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p style={{ fontSize: "1rem", color: "#828c8f" }}>
            Dravanti Middle East Floor 11-47, Uptown Tower Dubai Multi
            Commodities Centre Unite Arab Emirates
            <br />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="http://+971548883919"
            >
              +971548883919
            </a>
            <br />
            <a
              style={{ textDecoration: "none", color: "#828c8f" }}
              href="mailto:info@dravantigroup.com"
            >
              info@dravantigroup.com
            </a>
          </p>

          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
