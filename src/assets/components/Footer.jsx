import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>Copyright © 2025 Peterdraw</span>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-right">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-x-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </footer>
  );
}
