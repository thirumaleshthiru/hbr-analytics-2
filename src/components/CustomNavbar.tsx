import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      />

      <header className="header" id="header" style={{
        boxShadow: isScrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: 'none'
      }}>
        <div className="header-container">
          <Link to="/" className="logo-text" style={{ textDecoration: 'none' }}>
            HBR Analytics
          </Link>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
            <Link to="/industries-we-serve" className="nav-link" onClick={closeMobileMenu}>
              Industries
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            About
            </Link>
            <Link to="/our-expertise" className="nav-link" onClick={closeMobileMenu}>
            Competency Centers & Consulting
            </Link>
            <Link to="/contact-us" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </nav>

          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            id="hamburger"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <style>{`
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .mobile-menu-overlay.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          background: rgba(0, 0, 0, 0.7);
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          padding: 16px 0;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(90deg, #005bff 0%, #005bff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          z-index: 1001;
          position: relative;
        }

        .hamburger span {
          width: 28px;
          height: 3px;
          background: #0f172a;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        .nav-menu {
          display: flex;
          gap: 36px;
          align-items: center;
        }

        .nav-link {
          color: #0f172a;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #005bff;
        }

        @media (max-width: 1024px) {
          .header-container {
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .logo-text {
            position: relative;
            z-index: 999;
            order: 1;
          }

          .hamburger {
            display: flex;
            order: 3;
            position: relative;
            z-index: 1002;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: #f8fafc;
            flex-direction: column;
            padding: 20px 30px 30px;
            gap: 0;
            transition: right 0.3s ease;
            box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
            align-items: flex-start;
            z-index: 1001;
            order: 2;
            overflow-y: auto;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-menu .nav-link {
            display: block;
            padding: 15px 0;
            
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 12px 16px;
          }

          .logo-text {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;