import React from 'react';
import '../STYLING/Footer.css';
import {IoLogoInstagram} from 'react-icons/io';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <a href="#" className='footer-logo'>GERALDINE</a>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="footer-icons">
          <a
              href="https://api.whatsapp.com/send?phone+2348073987093"
              target="_blank"
            ><FaWhatsapp size={'20px'}/></a>
          <a href="https://www.linkedin.com/in/geraldine-omezi-902a32163/"   target="_blank"><AiOutlineLinkedin size={'20px'}/></a>
          <a href=""   target="_blank"><IoLogoInstagram size={'20px'}/></a>
        </div>
      </div>

      <div className="footer-bottom">
        <small>&copy; GERALDINE PORTFOLIO 2023. All Rights Are Reserved.</small>
      </div>
    </div>
  )
}

export default Footer