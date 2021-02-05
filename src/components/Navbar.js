import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MM <i className="fas fa-wifi"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/work-experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/education"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/hobbies"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hobbies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
