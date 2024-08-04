import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import open from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { motion} from "framer-motion";
import "../css/navbar.css"

function Navbar() {
  const [isOpen, setopen] = useState(false);
  function toggleMenu() {
    setopen(!isOpen);
  }

  const navVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        stiffness: "300",
      },
    },
  };

  return (
    <motion.header
      className={`nav wrapper`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className={`nav-inner container`}>
        
          <div className="logo-container">
            <img src={logo} alt="logo" className={`nav-logo ${isOpen && "open"}`} />
          </div>
          <ul className={`links-container ${isOpen && "open"}`}>
            <li className="nav-link">Pricing</li>
            <li className="nav-link">Product</li>
            <li className="nav-link">About Us</li>
            <li className="nav-link">Careers</li>
            <li className="nav-link">Community</li>
          </ul>
        
        <a className="link nav-cta">Get Started</a>
        <div className="toggle-container" onClick={toggleMenu}>
          <img
            src={isOpen ? close : open}
            className={`${isOpen ? "close-icon" : "open-icon"}`}
            alt={`${isOpen ? "close-icon" : "open-icon"}`}
          />
        </div>
      </nav>
      <div className={`mask ${isOpen ? "open" : ""}`}>
        <div className="inner-mask"></div>
      </div>
    </motion.header>
  );
}

export default Navbar;
