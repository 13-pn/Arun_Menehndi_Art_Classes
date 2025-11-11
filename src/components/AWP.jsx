import React, { useRef } from "react";
import "./AWP.css";

const AWP = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const products = [
    {
      img: "/wcu/PS.png",
      title: "Thousand of successful alumni across India & abroad",
      desc: "Join a vibrant network of successful alumni who have completed our programs and gone on to build rewarding careers across India and internationally.",
    },
    {
      img: "/wcu/CID.png",
      title: "Learn from anywhere with full flexibility",
      desc: "Our fully online and flexible learning platform allows you to access your course materials anytime, from any location. Whether you're a working professional, a student, or someone looking to switch careers.",
    },
    {
      img: "/wcu/JOP.png",
      title: "Job-oriented practical course structure",
      desc: "Our courses are specifically designed with a hands-on, practical approach to ensure you're not just learning theory, but actually gaining the real-world skills and industry knowledge that employers are actively looking for.",
    },
    {
      img: "/wcu/Experts.png",
      title: "Expert mentorship and industry-driven guidance",
      desc: "Learn from experienced mentors and industry professionals who share real-world insights.Get personalized guidance, career advice, and hands-on mentorship. Stay aligned with the latest industry trends and expectations.",
    },
    {
      img: "/wcu/certificate.png",
      title: "Internationally recognized ISO certificate",
      desc: "Upon successful completion, you’ll receive an ISO-certified credential that is internationally recognized, helping you stand out in a competitive job market—whether you're applying locally or abroad.",
    },
    {
      img: "/wcu/FPS.png",
      title: "Career support and placement assistance",
      desc: "Our dedicated career services team provides end-to-end support—from resume building and interview preparation to job referrals and placement opportunities.",
    },
  ];

  return (
    <section className="awp-section">
      <h3 className="awp-heading">
        Launch Your <span>Global Career </span>with Practical,<br/> ISO-Certified Training
      </h3>

      <div className="awp-fullwidth-container">
        <button className="awp-scroll-btn left" onClick={() => scroll("left")}>
          &#8592;
        </button>

        <div className="awp-gallery" ref={scrollRef}>
          {products.map((item, idx) => (
            <div className="awp-card" key={idx}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="awp-scroll-btn right" onClick={() => scroll("right")}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default AWP;
