import './IndustriesSection.css';

const IndustriesSection = () => {
  // First row industries
  const row1Industries = [
    { icon: 'fa-industry', name: 'Manufacturing' },
    { icon: 'fa-shopping-cart', name: 'Retail' },
    { icon: 'fa-heartbeat', name: 'Healthcare' },
    { icon: 'fa-university', name: 'Finance' },
    { icon: 'fa-truck', name: 'Logistics' },
    { icon: 'fa-graduation-cap', name: 'Education' },
    { icon: 'fa-bolt', name: 'Energy' },
    { icon: 'fa-home', name: 'Real Estate' },
    { icon: 'fa-utensils', name: 'Hospitality' },
    { icon: 'fa-film', name: 'Media' },
  ];

  // Second row industries
  const row2Industries = [
    { icon: 'fa-car', name: 'Automotive' },
    { icon: 'fa-wifi', name: 'Telecom' },
    { icon: 'fa-flask', name: 'Pharmaceuticals' },
    { icon: 'fa-cube', name: 'E-commerce' },
    { icon: 'fa-ship', name: 'Shipping' },
    { icon: 'fa-building', name: 'Construction' },
    { icon: 'fa-seedling', name: 'Agriculture' },
    { icon: 'fa-plane', name: 'Aviation' },
    { icon: 'fa-cogs', name: 'Technology' },
    { icon: 'fa-mobile-alt', name: 'Telecommunications' },
  ];

  return (
    <section className="industries-section" id="industries">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Industries We Serve
            </h2>
          </div>

          <div className="industries-scroll-wrapper">
            <div className="industries-row row-1">
              {/* Original items */}
              {row1Industries.map((industry, index) => (
                <div key={`row1-${index}`} className="industry-card">
                  <i className={`industry-icon fas ${industry.icon}`}></i>
                  <h3 className="industry-name">{industry.name}</h3>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {row1Industries.map((industry, index) => (
                <div key={`row1-dup-${index}`} className="industry-card">
                  <i className={`industry-icon fas ${industry.icon}`}></i>
                  <h3 className="industry-name">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="industries-scroll-wrapper">
            <div className="industries-row row-2">
              {/* Duplicate for seamless right scrolling (placed first) */}
              {row2Industries.map((industry, index) => (
                <div key={`row2-dup-${index}`} className="industry-card">
                  <i className={`industry-icon fas ${industry.icon}`}></i>
                  <h3 className="industry-name">{industry.name}</h3>
                </div>
              ))}
              {/* Original content */}
              {row2Industries.map((industry, index) => (
                <div key={`row2-${index}`} className="industry-card">
                  <i className={`industry-icon fas ${industry.icon}`}></i>
                  <h3 className="industry-name">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

