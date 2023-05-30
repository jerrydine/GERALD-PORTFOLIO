import React from 'react';
import '../STYLING/Intro.css';
import myimage from '../Images/Untitled design.png';

const Intro = () => {
  return (
    <div className="meet-me">
      {/* <div className=" animate__animated animate__slideInDown   animate__delay-0.3 myimage">
        <img src={myimage} alt="Geraldine's image" className="my-img" />
      </div> */}

      <div className=" animate__animated animate__slideInLeft animate__delay-0.3s	  me">
        <h3>
          Hello, I'M <span>GERALDINE</span>
        </h3>
        <h1> Frontend End Developer</h1>
        <p>Knack of building applications using frontend operations</p>
        <a href="#contact" className="hireme">
          HIRE ME
        </a>
      </div>
    </div>
  );
}

export default Intro