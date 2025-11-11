import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sustainability.css";

const Sustainability = () => {
  const navigate = useNavigate();
  const handleEnrollClick = () => {
    navigate("/enroll-today"); 
  };

  return (
    <section className="sustainability-hero">
      <video
        className="sustainability-video"
        src="/img/media.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="sustainability-overlay">
        <div className="sustainability-text">
          <h1>Start Creating Your Own Mehandi Art Design Today</h1>
          <p>
            Don’t let others master the art before you do. Join our Mehndi classes today and start creating designs that impress.
            <br />🎓 Expert-Led Live Training
            ⌨️ Interactive Online Classes
            <br />🏅 ISO Certified International
            💼 100% Job Placement
            <br />🎁 Mehndi Kit
          </p>

          <button
            className="sustainability-btn"
            onClick={handleEnrollClick}
          >
            Enroll today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
