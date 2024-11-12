import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/subLogo.webp";
import logoMobile from "../../assets/images/mobilelogo.png";
import "../../assets/style/navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleDropdown = (section) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [section]: !prevExpanded[section],
    }));
  };

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        setIsScrolledUp(currentScrollPos > 10);
      } else {
        setIsVisible(false);
        setIsScrolledUp(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div
        className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"} ${
          isScrolledUp ? "navbar-scrolled-up" : isMobile ?  "navbar-scrolled-up" : ""
        } hover-target`}
      >
        <div className="navbar-logo" style={{ width: "20%" }}>
          {!isMobile ? (
            <img
              onClick={() => navigate("/")}
              style={{ width: "100%" }}
              src={!isScrolledUp ? logo : logo2}
              alt="Dravanti Middle East Logo"
            />
          ) : (
            <img
              onClick={() => navigate("/")}
              style={{ width: "30%" }}
              src={logoMobile}
              alt="Dravanti Middle East Logo"
            />
          )}
        </div>
        <div style={{ width: "50%" }}>
          <ul className="navbar-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleNavClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleNavClick}
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
                    <NavLink
                      to="/interMTraders"
                      className="submenu-link"
                      onClick={handleNavClick}
                    >
                      Inter-M Traders FZ LLC
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/MBMEgroup"
                      className="submenu-link"
                      onClick={handleNavClick}
                    >
                      MBME Group
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/GulfInternational"
                      className="submenu-link"
                      onClick={handleNavClick}
                    >
                      Gulf Data International
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleNavClick}
              >
                Team
              </NavLink>
            </li>
            <li className="contct">
              <HashLink
                to="/#contact"
                smooth
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleNavClick}
              >
                Contact
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={handleNavClick}
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
                        : item === "Dravanti"
                        ? "/about"
                        : item === "Contact Us"
                        ? "/#contact"
                        : `/${item.toLowerCase().replace(/\s+/g, "")}`
                    }
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                    onClick={handleNavClick}
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
                        <NavLink
                          to={`/interMTraders`}
                          className="submenu-link"
                          onClick={handleNavClick}
                        >
                          Inter-M Traders FZ LLC
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`/MBMEgroup`}
                          className="submenu-link"
                          onClick={handleNavClick}
                        >
                          MBME Group
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`/GulfInternational`}
                          className="submenu-link"
                          onClick={handleNavClick}
                        >
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
          <p
            style={{
              fontSize: "1rem",
              color: "#828c8f",
            }}
          >
            Dravanti Middle East Floor 11-47, Uptown Tower Dubai Multi
            Commodities Centre Unite Arab Emirates
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="http://+971548883919"
            >
              +971548883919
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#828c8f",
              }}
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
