import React from 'react';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { ImLinkedin } from "react-icons/im";
import '../STYLING/Contact.css';
import  { useRef } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_biyc5hm",
          "template_sg2dxkg",
          form.current,
          "2rt-K0PTUsSH1es6p"
        
        ) 
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
    };


  return (
    <div className="contact-me" id="contact">
      <h5 className="contact-header">Get In Touch</h5>
      <h2 className="contact-header" id="contact-primary">
        Contact Me
      </h2>

      <div className=" contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMailOutline className="contact-icons" />
            <h4>Email</h4>
            <h5>Omezigeraldine@gmail.com</h5>
            <a href="mailto:omezigeraldine@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <ImLinkedin className="contact-icons" />
            <h4>LinkedIn</h4>
            <h5>Geraldine Omezi</h5>
            <a
              href="https://www.linkedin.com/in/geraldine-omezi-902a32163/"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-icons" />
            <h4>WhatsApp</h4>
            <h5>+2348070000000</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2348073987093"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="FullName" required />
          <input type="email" name="email" placeholder="Email" required id="" />
          <textarea
            name="message"
            rows="7"
            placeholder="Send A Message"
            required
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact