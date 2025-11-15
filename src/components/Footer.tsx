import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="footer py-6 px-6 md:py-8 md:px-10 border-t border-gray-200 dark:border-gray-800"
      style={{ background: 'var(--bg-color)', borderColor: 'var(--card-border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="logo-text whitespace-nowrap" style={{ fontSize: '18px' }}>
          HBR Analytics
        </div>
        <div className="flex gap-4 md:gap-6 items-center flex-wrap flex-1 justify-center order-3 md:order-2">
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            Home
          </a>
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            Services
          </a>
          <a 
            href="#why-choose"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('why-choose');
            }}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            Why Choose Us
          </a>
          <a 
            href="#industries"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('industries');
            }}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            Industries
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors whitespace-nowrap"
            style={{ color: 'var(--text-secondary)' }}
          >
            Contact
          </a>
        </div>
        <p 
          className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap order-2 md:order-3 text-center md:text-left"
          style={{ color: 'var(--text-secondary)' }}
        >
          © {year} HBR Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

