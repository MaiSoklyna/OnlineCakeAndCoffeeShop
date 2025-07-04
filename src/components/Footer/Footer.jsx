import React from 'react';
 // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best cakes and coffee experience. Our handcrafted products are made with love and the finest ingredients.
          </p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            Email: info@cakeandcoffee.com<br />
            Phone: +123-456-7890<br />
            Address: 123 Cake Street, Coffee City, CC 12345
          </p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Cake and Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;