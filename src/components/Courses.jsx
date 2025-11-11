import React from 'react';
import './Courses.css';

const COURSE_DATA = {
  overview:
    'Our intensive, hands-on mehndi training covers classic and contemporary techniques including Bridal, Arabic, Indo-Western, and Festive styles. Perfect for beginners and career-minded artists alike.',

  detailedSyllabus: [
    'Arabic',
    'Traditional',
    'Floral Cutwork',
    'Indo Western',
    'Designer',
    'Engagement',
    'Traditional Bridal',
    'Indian',
    'Gulf',
    'Bridal',
    'Traditional',
    'Floral Bridal',
    'Cone Making',
    'Baby Shower',
    'Natural Henna',
    'Past Mixing',
    'Birthday Party',
    'Colour Solution',
  ],

  modules: [
    {
      module: 'Module 1',
      title: 'Introduction & Basics',
      topics: [
        'Cone making techniques',
        'Natural paste mixing',
        'Line control & basic strokes',
      ],
    },
    {
      module: 'Module 2',
      title: 'Indian Traditional Designs',
      topics: [
        'Bridal full-hand & foot patterns',
        'Paisley, peacock, mandalas',
        'Fills, curves, motifs',
      ],
    },
    {
      module: 'Module 3',
      title: 'Arabic Mehndi',
      topics: [
        'Bold layouts & spacing',
        'Shading & leafy trails',
        'Elegant finger patterns',
      ],
    },
    {
      module: 'Module 4',
      title: 'Indo-Western Fusion',
      topics: [
        'Jewelry & modern elements',
        'Minimalistic bridal mehndi',
        'Indian + Arabic style blending',
      ],
    },
    {
      module: 'Module 5',
      title: 'Festival Mehndi',
      topics: [
        'Karwa Chauth, Eid, Teej, Diwali themes',
        'Quick application designs',
      ],
    },
    {
      module: 'Module 6',
      title: 'Bridal Specialization',
      topics: [
        'Hand to elbow, foot designs',
        'Fast & effective bridal techniques',
        'Deep stain methods',
      ],
    },
    {
      module: 'Module 7',
      title: 'Business & Marketing',
      topics: [
        'Client interaction & pricing tips',
        'Portfolio building & design photography',
        'Social media growth & brand building',
      ],
    },
  ],

  placementStats: [
    { number: '14K+', label: 'Students Trained' },
    { number: '12K+', label: 'Job Placements' },
    { number: '100%', label: 'Placement Support' },
  ],

  placementDetails: [
    'Dedicated assistance for resume creation and portfolio building.',
    'Mock interview training focused on client interaction and speed.',
    'Direct job referrals to top salons and freelance networks.',
    'Guidance on setting up your own professional Mehndi business.',
  ],
};

const Courses = () => {
  return (
    <div className="courses-page-container focused-content">

      <section className="section course-overview-section" id="overview">
        <div className="container">
          <h2 className="section-heading">Course Overview</h2>
          <p className="overview-text">{COURSE_DATA.overview}</p>
          <h3 className="sub-heading">Detailed Syllabus – From Scratch to Mastery</h3>
          <div className="syllabus-grid">
            {COURSE_DATA.detailedSyllabus.map((item, index) => (
              <div key={index} className="syllabus-box">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section syllabus-section" id="syllabus">
        <div className="container">
          <h2 className="section-heading">In-Depth Course Curriculum</h2>
          <div className="modules-grid-condensed">
            {COURSE_DATA.modules.map((mod, index) => (
              <div key={index} className="module-item">
                <p className="module-number">{mod.module}</p>
                <h3 className="module-title">{mod.title}</h3>
                <ul className="module-topics-list">
                  {mod.topics.map((topic, tIndex) => (
                    <li key={tIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section placement-section" id="placement">
        <div className="container">
          <h2 className="section-heading">Career Success & Placement Support</h2>
          <div className="stats-grid">
            {COURSE_DATA.placementStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="stat-number">{stat.number}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="placement-details-box">
            <h3 className="details-header">Your Path to a Professional Career</h3>
            <ul className="placement-details-list">
              {COURSE_DATA.placementDetails.map((detail, index) => (
                <li key={index}>
                  <span className="list-icon">✅</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section course-details-section" id="details">
        <div className="container">
          <h2 className="section-heading">Course Duration & Schedule</h2>

          <div className="course-details-grid">
            <div className="detail-box">
              <h3 className="sub-heading">Duration & Schedule</h3>
              <ul className="course-details-list">
                <li><strong>Duration:</strong> 51 Days</li>
                <li><strong>Daily Time:</strong> 1–2 hours (Monday to Saturday)</li>
                <li><strong>Batch Type:</strong> For Working Students</li>
                <li><strong>Mode:</strong> Offline (In-Studio Only)</li>
                <li><strong>Class Timing:</strong> 8:00 AM to 9:00 PM IST (Sunday: 11 AM to 1 PM)</li>
                <li><strong>Location:</strong> Swastik House, 1st Floor, Swami Vivekananda Road, Near Bank of Baroda, Kandivali West, Mumbai – 400067</li>
              </ul>
            </div>

            
            <div className="detail-box">
              <h3 className="sub-heading">Additional Skills Covered</h3>
              <ul className="extra-skills-list">
                <li>Designer Mehndi Techniques</li>
                <li>Engagement & Floral Bridal Patterns</li>
                <li>Occasion-Based Applications</li>
                <li>Cone Crafting & Paste Mixing</li>
                <li>Color Solutions & Natural Enhancers</li>
              </ul>
            </div>

            <div className="detail-box">
              <h3 className="sub-heading">Exam & Certification</h3>
              <ul className="exam-cert-list">
                <li>Only Practical Exam at Course End</li>
                <li>Instant Results & Expert Feedback</li>
                <li>Receive ISO Certified Certificate at No Extra Cost</li>
              </ul>
            </div>

            <div className="detail-box">
              <h3 className="sub-heading">Course Fee</h3>
              <div className="fee-details">
                <p><strong>Regular Fee:</strong> ₹25,000/-</p>
                <p><strong>Now at 40% Discount:</strong> ₹15,000/-</p>
                <p><strong>Includes:</strong></p>
                <ul>
                  <li>Free Professional Mehndi Kit</li>
                  <li>ISO Certified Certificate</li>
                  <li>Exam & Certification Fees</li>
                  <li>Job Placement Support</li>
                </ul>
                <p><strong>No Hidden Charges – One-time Investment for Lifetime Skill!</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;