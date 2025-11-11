import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AWP from "./components/AWP";
import Worktech from "./components/Worktech";
import Sustainability from "./components/Sustainability";
import ProfessionalWork from "./components/ProfessionalWork";
import InfoBoxes from "./components/InfoBoxes";
import PaymentPage from "./components/PaymentPage";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Module from "./components/Module";
import Review from "./components/Review";
import Testimonials from "./components/Testimonials"
import PrivacyPolicy from "./components/PrivacyPolicy";
import TAC from "./components/TAC";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
              <>
                <Hero />
                <AWP />
                <Worktech />
                <Module />
                <ProfessionalWork />
                <Sustainability />
                <InfoBoxes />
                <Review  />
                <Testimonials />
              </>
            }
          />

          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/enroll-today" element={<PaymentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/T-A-C" element={<TAC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
