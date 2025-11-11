import React from "react";
import "./Module.css";

const modules = [
  {
    title: "Module 1: Introduction & Basics",
    content: [
      "Cone making techniques",
      "Natural paste mixing",
      "Line control & basic strokes"
    ]
  },
  {
    title: "Module 2: Indian Traditional Designs",
    content: [
      "Bridal full-hand & foot patterns",
      "Paisley, peacock, mandalas",
      "Fills, curves, motifs"
    ]
  },
  {
    title: "Module 3: Arabic Mehndi",
    content: [
      "Bold layouts & spacing",
      "Shading & leafy trails",
      "Elegant finger patterns"
    ]
  },
  {
    title: "Module 4: Indo-Western Fusion",
    content: [
      "Jewelry & modern elements",
      "Minimalistic bridal mehndi",
      "Indian + Arabic style blending"
    ]
  },
  {
    title: "Module 5: Festival Mehndi",
    content: [
      "Karwa Chauth, Eid, Teej, Diwali themes",
      "Quick application designs"
    ]
  },
  {
    title: "Module 6: Bridal Specialization",
    content: [
      "Hand to elbow, foot designs",
      "Fast & effective bridal techniques",
      "Deep stain methods"
    ]
  },
  {
    title: "Module 7: Business & Marketing",
    content: [
      "Client interaction & pricing tips",
      "Portfolio building & design photography",
      "Social media growth & brand building"
    ]
  }
];

const Module = () => {
  return (
    <section className="module-section">
      <h1 className="module-title">In-Depth Module Structure</h1>
      <div className="module-grid">
        {modules.map((mod, idx) => (
          <div key={idx} className="module-box">
            <h3>{mod.title}</h3>
            <ul>
              {mod.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Module;
