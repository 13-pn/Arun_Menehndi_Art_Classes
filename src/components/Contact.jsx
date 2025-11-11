import React from "react";
import "./Contact.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch with Us</h1>
        <p className="contact-intro">
          Turn Your Passion into a Profession – Start Today! With ISO-certified credentials, expert training, and job support,
Arun Mehndi Art & Classes prepares you for a successful mehndi career Learn. Grow. Succeed. Only at Mumbai’s Top Mehndi Training Institute!
          </p>

        <div className="contact-main">
          <div className="contact-left">
            <div className="contact-card full-card">
              
              <h3>Phone</h3>
              <p>+91 9930000676</p>

              <h3>Email Address</h3>
              <p>Arunmehndiarts@gmail.com</p>

              <h3>Head Office</h3>
              <p>
                Arun Mehendi and Art Classes,<br/>
                Kandivali West, Mumbai 400067
              </p>
              <h3>Official website</h3>
              <p>www.arunmehndiclasses.com</p>
            </div>
            <div className="contact-social">
              <p>Stay Connected:</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/arun_mehndi_art_and_classes?igsh=MXMyb3locGtucXpweg==" target="_blank" rel="noreferrer"><FaInstagram /></a>
                <a href="https://www.facebook.com/arunmehndiartmumbai?ref=embed_page" target="_blank" rel="noreferrer"><FaFacebook /></a>
                <a href="https://youtube.com/@arunmehndistudio?si=lKydUw2WIVpjujCV" target="_blank" rel="noreferrer"><FaYoutube /></a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone Number" />
              <textarea placeholder="Your Message" rows="5" required></textarea>

              <div className="form-buttons">
                <button type="submit" className="send-btn">Send Message</button>
                <a href="/enroll-today" className="enroll-btn">Enroll Now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
