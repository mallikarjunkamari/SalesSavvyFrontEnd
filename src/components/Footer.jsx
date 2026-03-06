import React from "react";
import "../css/styles.css";

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-left">
          <h3>SalesSavvy</h3>
          <p>Your one-stop shop for all your needs</p>
        </div>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2023 SalesSavvy. All rights reserved.</p>
      </div>

    </footer>
  );
}