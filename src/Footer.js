import React from 'react';
import './Footer.css';



const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Little Lemon</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-envelope"></i> littlelemon@gmail.com</li>
            <li><i className="fas fa-phone"></i> +1-123-456-7890</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Main Street, Anytown USA</li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2023 Little Lemon | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;