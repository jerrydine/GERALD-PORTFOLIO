import React from "react";
import '../STYLING/About.css';
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import CV from '../Images/Omezi Geraldine CV.pdf';
import ME from '../Images/newimproved-removebg-preview (1).png'

const About = () => {
  return (
    <div className="aboutme" id="About">
      <h4 id="h4">Get to know</h4>
      <h2 id="h2">About Me</h2>
      <div className="about-container">
        <div className=" animate__animated animate__slideInLeft   animate__delay-2s myimage   about-me">
          <div className="about-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-info  animate__animated animate__slideInRight animate__delay-2s ">
          <div className="cards">
            <div className="abt-cards">
              <FaAward className="abt-icons" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </div>

            <div className="abt-cards">
              <FiUsers className="abt-icons" />
              <h5>Clients</h5>
              <small>4+ Worldwide</small>
            </div>

            <div className="abt-cards">
              <IoMdTime className="abt-icons" />
              <h5>Avaliable</h5>
              <small>24 hours</small>
            </div>
          </div>

          <p>
            A Frontend Web Developer, with an extensive experience, converting
            still-life designs to interactive web pages. User Focused
            Frontend-end developer adept in collaborating with UX and designs
            teams to plan the technical writing and execution of functional
            specifications for websites and applications. Expericenced in
            building multi-platform websites using Reponsives Frameworks
          </p>

          <a href={CV} download className="btn-download">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
