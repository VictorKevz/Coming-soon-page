import React from "react";
import "../css/footer.css";
import Form from "./Form/Form";
import logo from "../../assets/images/footer-logo.svg";
import yt from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import fb from "../../assets/images/icon-facebook.svg";
import ig from "../../assets/images/icon-instagram.svg";

function Footer() {
  const footerLinks = [
    {
      id: 1,
      links: ["Home", "Pricing", "Products", "About Us"],
    },
    {
      id: 2,
      links: ["Careers", "Community", "Privacy Policy"],
    },
  ];

  return (
    <div className="footer wrapper">
      <div className="footer-inner container">
      <p className="copyright mobile">Copyright 2020. All Rights Reserved</p>

        <div className="logo-socials-container">
          <div className="footer-logo-container">
            <img src={logo} alt="footer-logo" className="footer-logo" />
          </div>
          <div className="socials-container">
            <img src={fb} alt="" className="facebook-icon" />
            <img src={yt} alt="" className="youtube-icon" />
            <img src={twitter} alt="" className="twitter-icon" />
            <img src={pin} alt="" className="pinterest-icon" />
            <img src={ig} alt="" className="instagram-icon" />
          </div>
        </div>
        <div className="footer-links-wrapper">
          {footerLinks.map((obj) => (
            <div key={obj.id} className="footer-link-group">
              <ul className="footer-links-container">
                {obj.links.map((link, index) => (
                  <li key={index} className="footer-link">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Form/>
        <p className="copyright desktop">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
