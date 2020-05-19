import React from "react";
import "./Footer.scss";
import LinkedinIcon from "../../images/linkedinIcon.png";
import CodepenIcon from "../../images/codepenIcon.png";

function Footer() {
  return (
    <div className="footer">
      <p>By Tamara Bonyai -all rights reserved.</p>
      <a
        href="https://www.linkedin.com/in/tamarabonyai/"
        title="LinkedIn Profile"
        target="_blank"
      >
        <p>
          <img src={LinkedinIcon} alt="LinkedIn icon" width="20px" /> LinkedIn
          Profile
        </p>
      </a>
      <a
        href="https://codepen.io/Tama18/pen/LYEGPWa?editors=1100"
        title="Old version of Wild Circus made before the course"
        target="_blank"
      >
        <p>
          <img src={CodepenIcon} alt="Codepen icon" width="20px" />
          "Before-course" version of Wild Circus
        </p>
      </a>
      <p>18 May 2020</p>
    </div>
  );
}

export default Footer;
