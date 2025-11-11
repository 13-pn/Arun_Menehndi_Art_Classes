import React from "react";
import "./ProfessionalWork.css";

const videoHeading = "See our professional work";
const videoSubheading = "Quality and results delivered by our experts";

const videos = [
  { id: "1NBdT4teDBs79KwjaXcT7bLIY7s6Fwn1x" },
  { id: "1_g7mtlcuXDg-36DITtr2KSACHFFYrsuF" },
  { id: "19Ghld39oKnQTHn8Vosv8cxY6h8xW0qCk" },
  { id: "1WQ2Erc1TTFYzj24WKacmmSEQyhYUGEwT" },
  { id: "1fFKF_jOGJ0w4UGtPoRoo91Qv-PHvap_r" },
  { id: "1gdlC7B9tEUhTTt2ndDcxAQHoyOLPUXR_" },
  // https://drive.google.com/file/d/1gdlC7B9tEUhTTt2ndDcxAQHoyOLPUXR_/view?usp=drive_link
];

const ProfessionalWork = () => {
  return (
    <section className="professional-work-section">
      <h2 className="work-heading">{videoHeading}</h2>
      <p className="work-subheading">{videoSubheading}</p>

      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-item" key={video.id}>
            <iframe
              className="video-embed"
              src={`https://drive.google.com/file/d/${video.id}/preview`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`video-${video.id}`}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalWork;