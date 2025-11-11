import React from "react";
import "./Payment.css";

const PaymentPage = () => {
  return (
   <div className="payment-container">

  <div className="payment-info">
    <h2>Terms & Conditions</h2>
    <p>By proceeding with this payment, you agree to our terms of service and refund policy.</p>

    

    <h3>Contact Support</h3>
    <p>Email:  arunmehndiarts@gmail.com</p>
    <p>Phone: 9930315736</p>
  </div>

  <div className="payment-card">
    <h2 className="business-name">My Brand</h2>
    <h3 className="payment-title">Complete Your Payment</h3>

    <div className="amount-section">
  <p className="amount-label">Total Amount</p>
  <div className="amount-display">
    <span className="old-amount">₹25,000</span>
    <span className="new-amount">₹15,000</span>
  </div>
</div>


    <div className="input-section">
      <label>Name</label>
      <input type="text" placeholder="Enter your full name" />

      <label>Email</label>
      <input type="email" placeholder="Enter your email" />
    </div>

    <button className="pay-btn">Pay Now</button>

    <div className="imgLogo">
      <img src="/Payment_Img/pay_methods_brandings.png" alt="Payment Methods" />
    </div>

    <div className="footer">
      <p className="footer-note">
        Want to create page like this for your Business? Visit <a href="#">Razorpay Payment Pages</a>
      </p>
      <p className="report-link">   to get started!</p>
    </div>
  </div>
</div>

  );
};

export default PaymentPage;
