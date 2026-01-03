import React, { useRef, useState } from "react";
import "./Review.css";

const reviews = [
  {
    name: "Dhanshree Kamble",
    date: "2025-09-26",
    source: "Google",
    rating: 5,
    text: `Mi sadhych Arun Mehndi Art and classes join kela. Ani maza experience khupch chaan hota. Mananiya ARUN SIR, Deepanjali Mam and Forum Mam khup supportive and chaan shikvtat. Class mdhe vegveglya types ch mehndi designs shivkle jatat. Teachers khup samjun sangtat ani pratek students la vel detat. Mehndi kadnyasobt mehndi kshi tayar krychi, mehndi cones kase banvyche he dekhil nit shikvl jaat. Survatila mla kathin vatych, pn practice n margdarshan mule maza confidence vadhla. Ani ata mi konti designs sahaj kdu shkte. N jari konla Mehndi shivychi asel tr mi nakkich Ya class lach suggest karel. Thank you ❤️`
  },
  {
    name: "Priyanka Amale",
    date: "2025-09-24",
    source: "Google",
    rating: 5,
    text: `Hello Arun Mehndi Art & Classes | Best Mehndi Artist in Mumbai i thank to Arun sir and all there staff of teaching mehendi online and offline classes there are teach very nice and esay way to teach of every concept of design and related topic of mehendi design i was thinking that online mehendi classes is not teaches properly but i was Wrong this mehendi classes is perfect for all i am very thankful to join this classes thank you respected sir and all team member's for teaching me mehendi Very Thanks A lot🙏`
  },
  {
    name: "Priyanshi Dubey",
    date: "2025-09-24",
    source: "Google",
    rating: 5,
    text: `The Arun Mehndi art and studio class was a wonderful experience! The instructor explained every step clearly, making it easy to learn beautiful designs. I gained confidence in creating neat and creative patterns. Highly recommended for anyone interested in learning Mehndi art.`
  },
  {
    name: "Mansi Mohite",
    date: "2025-09-23",
    source: "Google",
    rating: 4,
    text: `Mehandi class ekdam chan aahe. Arun sir khup supportive aahet, pratyek step samjun sodat ani motivation detat. Sagle teachers pan friendly aahet, changlya paddhatine sikhavtat. Atmosphere comfortable aahe mule practice karayla confidence yeto. Mehandi shiknyasathi ha class best aahe.`
  },
  {
    name: "Pinky Salecha",
    date: "2025-09-23",
    source: "Google",
    rating: 5,
    text: `Bestest mahendi classes in Mumbai.. Deepanjali mam and Foram mam both are very talented, kind and friendly,.. good experience at this place thank you...`
  },
  {
    name: "Kanan Shah",
    date: "2025-09-23",
    source: "Google",
    rating: 5,
    text: `It's excellent mehandi coaching class I never ever seen💕 ...no time limit for practice mehadi design✍️ ...in our mehandi class our mam teaching us excellent way✍️✍️.... all small points they teach us for how to apply mehandi ...both mam Forum mam and Deepanjali mam r very friendly nature 💥💥very polite to us and they teach us as many time u ask they teach u same concept until ur concept is not clearer and that's the best part of this class🎉🎉🎉.... thank you so much to make our work clear... neat and beautiful ❤️ 🙏🙏and main thanks to Arun sir also he support us in all other way 🙏🙏🙏`
  }
];

const Review = () => {
  const [expanded, setExpanded] = useState(Array(reviews.length).fill(false));
  const carouselRef = useRef(null);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = "";
    for (let i = 1; i <= totalStars; i++) {
      stars += i <= rating ? "★" : "☆";
    }
    return stars;
  };

  const scroll = (direction) => {
    const cardWidth = 320; // card width + margin
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="review-section">
      <h1 className="review-title">Students Reviews</h1>

      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll(-1)}>‹</button>

        <div className="carousel" ref={carouselRef}>
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="review-header">
                <div className="avatar">{review.name.charAt(0)}</div>
                <div className="review-info">
                  <h3>{review.name}</h3>
                  <p className="review-date">{review.date} - {review.source}</p>
                  <p className="review-stars">{renderStars(review.rating)}</p>
                </div>
              </div>
              <p className={`review-text ${expanded[idx] ? "expanded" : ""}`}>
                {review.text}
              </p>
              {review.text.length > 200 && (
                <button className="read-btn" onClick={() => toggleExpand(idx)}>
                  {expanded[idx] ? "Hide" : "Read more"}
                </button>
              )}
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll(1)}>›</button>
      </div>
    </section>
  );
};

export default Review;
