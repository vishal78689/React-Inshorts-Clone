import React from 'react'

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://vishalthakur24.web.app/" target="__blank">
        vishal thakur
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/vishalthakur_18/?hl=en" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/vishal-thakur-81aab1209/</div>" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://vishalthakur24.web.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;