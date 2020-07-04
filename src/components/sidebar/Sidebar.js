import React, { useState } from "react";
import "./Sidebar.scss";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleSidebar = e => {
    if (window.innerWidth > 1000) {
      setToggleNavbar(false);
      return;
    }
    if (e.target.classList.contains("wrapper")) {
      setToggleNavbar(false);
    }
    if (e.target.classList.contains("navbar-item-link")) {
      setToggleNavbar(false);
    }
    if (
      e.target.classList.contains("hamburger-menu") ||
      e.target.classList.contains("hamburger-menu-line") ||
      e.target.classList.contains("close-btn")
    ) {
      setToggleNavbar(!toggleNavbar);
    }
  };


  return (
    <div className="sidebar">
      <div className="brand">
        <Link to="/">
          <h2 className="brand-icon">JG</h2>
        </Link>
      </div>
      <div className={toggleNavbar ? "hamburger-menu hamburger-trans":"hamburger-menu"} 
      onClick={handleSidebar}>
        <div className="hamburger-menu-line"></div>
        <div className="hamburger-menu-line"></div>
        <div className="hamburger-menu-line"></div>
      </div>

      <div
        className={toggleNavbar ? "wrapper overlay" : "wrapper"}
        onClick={handleSidebar}
      >
        <ul className={toggleNavbar ? "navbar navbar-open" : "navbar"}>
          {/* <div className="close-btn" onClick={handleSidebar}>
            &times;
          </div> */}
          <li className="navbar-item">
            <NavLink
              exact
              className="navbar-item-link"
              activeClassName="active"
              to="/"
              onClick={handleSidebar}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              className="navbar-item-link"
              activeClassName="active"
              to="/about"
              onClick={handleSidebar}
            >
              About
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              className="navbar-item-link"
              activeClassName="active"
              to="/projects"
              onClick={handleSidebar}
            >
              Projects
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              className="navbar-item-link"
              activeClassName="active"
              to="/contact"
              onClick={handleSidebar}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/jassem-lab"
          className="social-links-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="social-links-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/jassem-gaaloul/"
          className="social-links-url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="social-links-icons" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
