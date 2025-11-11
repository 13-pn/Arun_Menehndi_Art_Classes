import React from "react";
import "./Worktech.css";

const artists = [
  {
    img: "/WP/WP1.png",
    name:"Personalized Arm Tattoo",
    desc: "Modern fusion design with a bold, thick line style. Features custom lettering and traditional decorative cones.",
  },
  {
    img: "/WP/WP6.png",
    name: "Dense Palm Filigree",
    desc: "Highly dense, fine linework on the palm and fingers. Focuses on deep stain and intricate floral fill patterns.",
  },
  {
    img: "/WP/WP3.png",
    name: "Intricate Jaali Backhand",
    desc: "Detailed net-work (jaali) covering the back of the hands. Uses radial motifs and elegant wrist bands.",
  },
  {
    img: "/WP/WP4.png",
    name: "Bridal Full Coverage",
    desc: "Traditional Indian style with heavy density and coverage. Features classic motifs like paisleys and flowing vines.",
  },
];

const Worktech = () => {
  return (
    <section className="worktech-section">
      <h2 className="worktech-heading">
        Proven Expertise <br />
        <span>India’s Top Mehndi Training Institute</span>
      </h2>

      <div className="worktech-gallery">
        {artists.map((artist, index) => (
          <div className="worktech-card" key={index}>
            <img src={artist.img} alt={artist.name} />
            <h3>{artist.name}</h3>
            <p>{artist.desc}</p>
          </div>
        ))}
      </div>
      </section>
  );
};

export default Worktech;
