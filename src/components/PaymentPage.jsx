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

    <button className="pay-btn"><a href="https://razorpay.com/payment-link/plink_RxjqiYI5UySTlV">Book Now</a></button>

    <div className="imgLogo">
      <img src="/Payment_Img/pay_methods_brandings.png" alt="Payment Methods" />
    </div>

    <div className="footer">
      <p className="footer-note">
        Want to create page like this for your Business? Visit <a href="/https://razorpay.com/?utm_source=google&utm_medium=cpc&utm_campaign=RPSME-RPPerf-GSearchBrand-Prospect-Dweb-Core&utm_adgroup=brandsearch_core_exact&utm_content=&utm_term=razorpay&utm_gclid=CjwKCAiAmePKBhAfEiwAU3Ko3P8AtBaIYOhoFItRLtPW-odjmipQr-LZI7MbODJI40aend2YQg8vqBoC8qsQAvD_BwE&utm_campaignID=400139470&utm_adgroupID=27293859910&utm_adID=749949473748&utm_network=g&utm_device=c&utm_matchtype=e&utm_devicemodel=&utm_adposition=&utm_location=9061779&gad_source=1&gad_campaignid=400139470&gbraid=0AAAAADdXWPqwnx0bU_2YH377Y-5DPNJhq&gclid=CjwKCAiAmePKBhAfEiwAU3Ko3P8AtBaIYOhoFItRLtPW-odjmipQr-LZI7MbODJI40aend2YQg8vqBoC8qsQAvD_BwE">Razorpay Payment Pages</a> to get started!
      </p>
    </div>
  </div>
</div>

  );
};

export default PaymentPage;
