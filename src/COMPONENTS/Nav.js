import React from 'react';
import { icons } from 'react-icons/lib';
import Backgd from '../Assets/bg-2.mp4';
import '../STYLING/Nav.css';
import {GiHamburgerMenu} from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Respond from './Respond';
import Intro from './Intro';
// import Mypicture from '../Assets/de-andre-bush-baeDx6LuSt4-unsplash.jpg';

const Nav = () => {

  const [respond, setRespond] = useState(false)
  return (
    <div className="showcase" id='#'>
      <video src={Backgd} muted loop autoPlay className="bg-nav"></video>
      <div className="overlay"></div>

      <nav className=" container navbar">
        <div className="nav-logo">
          <h2>
            <span>G</span>eraldine
          </h2>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About" target="blank">
              About
            </a>
          </li>
          <li>
            <a href="#Skill">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="hamburger">
          <a href="#" onClick={() => setRespond(!respond)}>{respond? <FaTimes size={25}/> : <GiHamburgerMenu size={25}/>}</a>
        </div>
      </nav>

      {respond && <Respond/>}
      <Intro/>

    </div>
  );
}

export default Nav