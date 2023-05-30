import React from 'react';
import '../STYLING/Skill.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';


const Skill = () => {
  return (
    <div className="skills" id='Skill'>
      <h2>MY SKILL SET</h2>
      <h3>Frontend Development</h3>
      <div className="skill-container">
        <div className="skill-card">
          <article>
            <BsFillPatchCheckFill className="skill-icons"  />
            <div className="framework">
              <h4>HTML</h4>
              <small>Experienced</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>CSS</h4>
              <small>Experienced</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>BOOTSTRAPS</h4>
              <small>Experienced</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>TAILWINDS</h4>
              <small>Intermediate</small>
            </div>
          </article>
       

        
          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>SASS</h4>
              <small>Intermediate</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>JAVASCRIPT</h4>
              <small>Intermediate</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>REACT.JS</h4>
              <small>Intermediate</small>
            </div>
          </article>

          <article>
            <BsFillPatchCheckFill className="skill-icons" />
            <div className="framework">
              <h4>VUE.JS</h4>
              <small>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Skill