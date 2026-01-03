import React, { useState } from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaPhone } from "react-icons/fa";

const Testimonials = () => {
  const studentReviews = [
    {
      name: "SHUKRIYA",
      content:
        "Learning mehndi was my mother’s passion, but due to family responsibilities, she never got the chance to follow her dreams. Through a friend’s reference, I got her enrolled at Arun Mehndi Arts, and she completed the course very well. The instruction was patient, even when she needed concepts taught over and over again.",
    },
    {
      name: "Vedika Sanghavi",
      content:
        "My experience has been very good. I’m still learning, and the teachers are also very nice—they are kind and humble. Everyone is very sweet, and they teach using unique and easy techniques. They motivate us to work hard. Overall, it’s been the best experience to learn mehndi from them.",
    },
    {
      name: "Priyanshi Dubey",
      content:
        "The Arun Mehndi art and studio class was a wonderful experience! The instructor explained every step clearly, making it easy to learn beautiful designs. I gained confidence in creating neat and creative patterns. Highly recommended for anyone interested in learning Mehndi art.",
    },
    {
      name: "Priyanka Amale",
      content:
        "I thank Arun Sir and all the staff for teaching mehndi online and offline. They teach every concept of design in a very nice and easy way. I thought online classes weren't proper, but I was wrong. This mehndi class is perfect for all!",
    },
  ];

  const clientReviews = [
    {
      name: "Priya Sharma",
      content:
        "Nothing makes a Bride feel more at ease when they have the BEST VENDORS to work with. Arun has limitless vision to have understood all the details I dreamed of for my bridal mehndi. The intricate patterns were beautifully executed.",
    },
    {
      name: "Advita",
      content:
        "I was absolutely blown away by the intricate and beautiful mehendi artistry I received from Arun. He is incredibly talented and created a stunning design that lasted for weeks.",
    },
    {
      name: "Roji",
      content:
        "The color was Almost Black on my palms and fingers, medium to deep Brown on the backs of my hands and my feet. The Designs looked Great even five days after Application. The team was professional and very polite.",
    },
    {
      name: "Anshika Khanna",
      content:
        "Till date everyone talks about my wedding mehendi and it's all because of ARUN team. The whole Bharat they designed on my hands was nothing less than a priceless feeling. The hands and feet looked beautiful.",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderReviews = (reviews, prefix) =>
    reviews.map((review, index) => {
      const isExpanded = expanded[`${prefix}-${index}`];
      const preview = review.content.slice(0, 160);
      const shouldTruncate = review.content.length > 160;

      return (
        <div className="testimonial-card" key={`${prefix}-${index}`}>
          <div className="avatar">{review.name.charAt(0)}</div>
          <h3 className="reviewer-name">{review.name}</h3>
          <p
            className={`review-text ${isExpanded ? "expanded" : ""}`}
          >
            {isExpanded || !shouldTruncate
              ? review.content
              : `${preview}...`}
          </p>
          {shouldTruncate && (
            <button
              className="read-more-btn"
              onClick={() => toggleReadMore(`${prefix}-${index}`)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      );
    });

  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h1 className="testimonials-title">Testimonials</h1>
          <p className="testimonials-intro">
            See what our students and clients say about their experience with
            Arun Mehndi Art & Classes.
          </p>

          <h2 className="section-subtitle">
            Student Success Stories (Online Course)
          </h2>
          <div className="testimonial-grid">
            {renderReviews(studentReviews, "student")}
          </div>

          <h2 className="section-subtitle">
            Client & Bridal Reviews (Professional Services)
          </h2>
          <div className="testimonial-grid">
            {renderReviews(clientReviews, "client")}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="social">
          <p>Stay Connected:</p>
          <div className="social-mob">
          <div className="social-icons">
            <a href="https://www.instagram.com/arun_mehndi_art_and_classes?igsh=MXMyb3locGtucXpweg==" target="_blank" rel="noreferrer" className="insta"><FaInstagram /></a>
            <a href="https://www.facebook.com/arunmehndiartmumbai?ref=embed_page" target="_blank" rel="noreferrer" className="fb"><FaFacebook /></a>
            <a href="https://youtube.com/@arunmehndistudio?si=lKydUw2WIVpjujCV" target="_blank" rel="noreferrer" className="yt"><FaYoutube /></a>
            <a href="https://api.whatsapp.com/send?phone=919930000676&text=Hi" target="_blank" rel="noreferrer" className="wt"><FaWhatsapp /></a>
            <a href="tel:09930315736" target="_blank" rel="noreferrer"><FaPhone /></a>
          </div>
          <div className="reg-copy">
            <p>Book Your slot</p>
            

          </div></div>
        </div>
        <div className="mobile-social">
          <div className="peras">
            <p>Stay Connected:</p>
            <p>Book Your Slot</p>
          </div>
          <div className="m-s-items">
            <div className="left-item">
            <a href="https://api.whatsapp.com/send?phone=919930000676&text=Hi" target="_blank" rel="noreferrer" className="wt"><FaWhatsapp /></a>
            <a href="tel:09930315736" target="_blank" rel="noreferrer"><FaPhone /></a>
            </div>
            <div className="right-item">
              <a href="/enroll-today" className="enroll-btn">Book Now</a>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/T-A-C">Terms and Conditions</Link>
          </div>
          <p className="footer-text">
            © 2025 Arun Mehndi Art & Classes. All Rights Reserved.
          </p>
        </div>
        <div className="reg">
          <p>Book Your slot</p>
          <a href="/enroll-today" className="enroll-btn">Book Now</a>

        </div>
      </footer>
    </>
  );
};

export default Testimonials;
