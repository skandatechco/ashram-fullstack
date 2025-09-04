import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Skandasramam</h3>
            <p>A place of worship and spiritual growth. We welcome all to experience peace and divine presence.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/donations">Donations</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Temple Road, City, Country</p>
            <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
            <p><i className="fas fa-envelope"></i> info@skandasramam.com</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="#"><i className="fab fa-facebook-f" aria-label="Facebook"></i></a>
            <a href="#"><i className="fab fa-twitter" aria-label="Twitter"></i></a>
            <a href="#"><i className="fab fa-instagram" aria-label="Instagram"></i></a>
            <a href="#"><i className="fab fa-youtube" aria-label="YouTube"></i></a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Skandasramam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
