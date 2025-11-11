import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoBoxes.css";

const InfoBoxes = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate("/payment");
  };

  return (
    <section className="info-section">
      <div className="info-grid">

        <div className="info-box">
          <h3>Comprehensive Online Mehndi Course</h3>
          <p>
            Master cone making, paste mixing, color techniques, and fine detailing through our 51-day practical course. Get ISO certification and a free professional mehndi kit with all essentials delivered to your home. Learn expert tips, creative patterns, and application secrets to become a professional mehndi artist.
          </p>
        </div>

        <div className="info-box">
          <h3>Join Our Global Mehndi Course</h3>
          <p>
            Gain hands-on skills and an internationally recognized ISO certification through our job-oriented online course. We cover everything from cone making and paste prep to advanced techniques and business marketing. Enroll today to transform your creativity into a certified profession with career support.
          </p>
        </div>

        <div className="info-box">
          <h3>Follow Us</h3>
          <p>
            Follow us on social media for mehendi designs, artist features, and tutorials.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/arunmehndiartmumbai?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a
            href="https://www.instagram.com/arun_mehndi_art_and_classes?igsh=MXMyb3locGtucXpweg=="
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src="/img/Insta.png" alt="Instagram" />
            </a>
            <a
            href="https://youtube.com/@arunmehndistudio?si=lKydUw2WIVpjujCV"
              target="_blank"
            rel="noopener noreferrer">
            <img src="/img/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>

        <div className="info-box">
          <h3>Start Your Professional Mehndi Career Now</h3>
          <p>
            Don't miss out on mastering this beautiful art. Enroll in our ISO-certified online course to get expert-led live training, a free professional kit, and dedicated job placement support. Start creating stunning designs today!
          </p>
          <button className="info-btn" onClick={handleEnrollClick}>
            Enroll now
          </button>
        </div>

      </div>
    </section>
  );
};

export default InfoBoxes;
