import  { useState, useEffect } from 'react';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#', label: 'Home', active: true },
    { href: '#services', label: 'Services' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#contact', label: 'Contact Us' }
  ];

  return (
    <>
     

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className="logo-area">
            <span className="logo-text">HBR Analytics</span>
          </a>
          
          <nav className="nav-menu">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className={`nav-link ${link.active ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="#cta" className="header-cta">Get Started</a>
            <button 
              className="mobile-toggle" 
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#" className="mobile-logo-area">HBR Analytics</a>
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className={`mobile-nav-link ${link.active ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mobile-cta-container">
            <a 
              href="#cta" 
              className="mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

     
    </>
  );
};

export default CustomNavbar;