import React from "react";
import "./About.css";
import { FaCertificate, FaChalkboardTeacher, FaTasks, FaBoxOpen, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">Unlock Your Potential: Join the Professional Online Mehndi Design Course</h1>
        <p className="about-intro">
          <strong>Arun Mehndi Art & Classes</strong> is India's premier destination for mastering the art of henna, transforming your passion into a certified, profitable career. Our <strong>Online Professional Mehndi Design Course</strong> equips you with expert skills, business acumen, and international certification—all from your home.
        </p>

        <h2 className="about-subtitle">Why Choose Our Online Course?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaCertificate className="feature-icon" />
            <h3>ISO Certified Credential</h3>
            <p>Gain a globally recognized ISO certificate boosting your professional credibility.</p>
          </div>
          <div className="feature-card">
            <FaTasks className="feature-icon" />
            <h3>Job-Oriented Training</h3>
            <p>Learn real-world techniques with 100% job placement assistance.</p>
          </div>
          <div className="feature-card">
            <FaChalkboardTeacher className="feature-icon" />
            <h3>Expert-Led Live Classes</h3>
            <p>Engage in interactive live sessions with professional instructors and personalized feedback.</p>
          </div>
          <div className="feature-card">
            <FaBoxOpen className="feature-icon" />
            <h3>Free Professional Mehndi Kit</h3>
            <p>Receive a complete starter kit delivered to your doorstep with essential tools and powder.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Proven Alumni Network</h3>
            <p>Join 14,000+ trained students with 12,000+ job placements globally. Learn and grow together.</p>
          </div>
        </div>

        <h2 className="about-subtitle">Course Modules & Mastery</h2>
        <div className="about-modules">
          <div className="module-box">
            <h3>Introduction & Basics</h3>
            <ul>
              <li>Cone making </li>
              <li>paste mixing</li>
              <li>line control exercises</li>
            </ul>
            </div>
          <div className="module-box">
            <h3>Indian Traditional</h3>
           <ul>
            <li>Bridal full-hand</li>
            <li>Paisley</li>
            <li>Peacock</li>
            <li>Mandalas</li>
            </ul>
          </div>
          <div className="module-box">
            <h3>Arabic & Indo-Western</h3>
            <ul>
            <li>Bold layouts</li>
            <li>shading techniques</li>
            <li>minimalistic bridal mehndi</li>
            </ul>
          </div>
          <div className="module-box">
            <h3>Bridal Specialization</h3>
            <ul>
              <li>Fast bridal application</li>
              <li>deep stain methods</li>
              <li>full hand-to-elbow designs</li>
             </ul> 
          </div>
          <div className="module-box">
            <h3>Business & Marketing</h3>
            <ul>
              <li >pricing strategies</li>
              <li>Client interaction</li>
              <li>portfolio building</li>
              <li>and social media growth</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Scale Your Design Art?</h2>
          <p><strong>Enroll Today</strong> to secure your spot and start your journey as a certified, professional mehndi artist!</p>
          <a href="/enroll-today" className="enroll-btn">Enroll Now</a>
        </div>
      </div>
    </section>
  );
};

export default About;