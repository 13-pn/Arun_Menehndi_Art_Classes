import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero/hero_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Join <span className="text-green">Arun Mehndi Art</span> and{" "}
          <span className="text-yellow">Classes</span> <br />
          Online <span className="text-white">Professional Mehndi</span> Design Course Today!
        </h1>
        <p>
          Are you passionate about mehndi art and ready to transform your creativity into a successful profession?
          <br />
          At Arun Mehndi Studio & Classes, we offer a top-rated Online Professional Mehndi Design Course
          <br />
          that empowers you with the skills, certification, and confidence to become
          <br />
          a certified mehndi artist — from the comfort of your home.
        </p>
        <Link to ="payment"><button className="hero-btn">Enroll Now</button></Link>
      </div>
    </section>
  );
};

export default Hero;
