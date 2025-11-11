import React from "react";
import "./TAC.css";
import { Link } from "react-router-dom";

const TAC = () => {
  return (
    <section className="tac-section">
      <div className="tac-container">
        <h1 className="tac-title">Terms and Conditions</h1>

        <h2>Introduction</h2>
        <p>
          Welcome to <strong>Arun Mehndi Art and Classes.</strong> By accessing
          our website or becoming a part of any of our online courses or
          services, you agree to abide by the following Terms and Conditions.
          Read these terms carefully. If you do not agree with these terms, you
          are strictly prohibited from using our services.
        </p>

        <h2>General Terms</h2>
        <ul>
          <li>
            <strong>Eligibility:</strong> One must be more than 18 years of age
            to join any of the courses offered at Arun Mehndi Art and Classes.
            If under 18, parental consent is required.
          </li>
          <li>
            Upon confirmation of successful payment, enrollment for the course
            will be confirmed, and within 24 hours, access to the course
            materials will be made available.
          </li>
          <li>
            <strong>Account Registration:</strong> You agree to provide accurate
            and current information when registering for our services. You are
            responsible for maintaining the confidentiality of your account and
            password.
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All course contents, whether video tutorials or pictures/designs, are
          owned by Arun Mehndi Art and Classes. This content is covered under
          the Copyright Act and should not be reproduced, shared, or forwarded
          to anyone without specific permission.
        </p>

        <h2>User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Engage in any activity that could cause harm or disrupt the
            functionality of our website or courses.
          </li>
          <li>Post any defamatory, abusive, or illegal content.</li>
          <li>
            Try to gain unauthorized access to any part of the website or user
            accounts.
          </li>
        </ul>

        <h2>Payment Terms</h2>
        <ul>
          <li>
            <strong>Pricing:</strong> All course prices are in the currency
            indicated on the website and are subject to change without notice.
          </li>
          <li>
            <strong>Payment Options:</strong> Course payments can be made with
            credit/debit cards, bank transfers, and other online payment
            platforms available on the website.
          </li>
          <li>
            <strong>Taxes:</strong> You are liable for any applicable taxes,
            fees, or charges based on your location.
          </li>
        </ul>

        <h2>Course Access and Delivery</h2>
        <ul>
          <li>
            The course will be accessible through a user account created on our
            website after successful payment.
          </li>
          <li>
            All course materials will be available for a specified duration, and
            access may be revoked after this period unless otherwise stated.
          </li>
        </ul>

        <h2>Privacy Policy</h2>
        <p>
          We respect your privacy. All information about you collected for this
          purpose or in the future will be protected according to our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>. Use of our services
          implies your acceptance of our privacy policy concerning data
          collection and usage.
        </p>

        <h2>Disclaimers and Limitations of Liability</h2>
        <ul>
          <li>
            <strong>Course Quality:</strong> We provide high-quality education,
            but we do not guarantee specific outcomes or results from taking our
            courses.
          </li>
          <li>
            <strong>Liability:</strong> We are not responsible for indirect,
            incidental, or consequential damages resulting from the use of our
            services.
          </li>
        </ul>

        <h2>Amendments</h2>
        <p>
          Arun Mehndi Art and Classes reserves the right to modify or update
          these Terms and Conditions at any time. The changes will be posted on
          the website, and users are advised to review them periodically.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions are subject to the jurisdiction where Arun Mehndi Art and Classes conducts its business, and any other dispute will be settled in appropriate courts.
        </p>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/tac">Terms and Conditions</Link>
        </div>
        <p className="footer-text">
          © 2025 Arun Mehndi Art & Classes. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default TAC;
