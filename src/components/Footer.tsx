 

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="logo-area" style={{ color: 'white' }}>
            <span className="logo-text" style={{ color: 'white' }}>HBR Analytics</span>
          </a>
          <p>Empowering enterprises with cutting-edge analytics, AI-driven insights, and robust risk management
            solutions.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#solutions">Solutions</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item"><i className="fas fa-map-marker-alt"></i><span>123 Analytics Blvd,
              NY</span></div>
          <div className="footer-contact-item"><i className="fas fa-envelope"></i><span>contact@hbranalytics.com</span>
          </div>
          <div className="footer-contact-item"><i className="fas fa-phone"></i><span>+1 (555) 123-4567</span></div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-btn"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-btn"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <div className="copyright-content">
          <span style={{ color: 'rgba(255,255,255,0.6)' }}>© {year} HBR Analytics. All rights reserved.</span>
          <span className="credit-text">Designed & Developed by <a href="#" target="_blank" rel="noopener noreferrer">supernexsys</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
