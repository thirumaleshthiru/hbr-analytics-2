import { useEffect } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  useEffect(() => {
    // Initialize bar heights for service cards
    const allBars = document.querySelectorAll('.service-card .data-bars .bar');
    allBars.forEach((bar) => {
      const baseHeight = 30 + Math.random() * 30;
      (bar as HTMLElement).style.setProperty('--base-height', baseHeight + 'px');
    });
  }, []);
  return (
    <section className="services-section" id="services">
      <div className="services-content">
        <div className="services-content-left">
          <span className="services-label">OUR SERVICES</span>
          <h2 className="services-title">What makes our solutions transform businesses</h2>
        </div>
        <div className="services-content-right">
          <p className="services-description">
            We combine cutting-edge technology with deep industry expertise to deliver measurable
            results that drive your business forward. Our comprehensive suite of services ensures
            you have everything needed to succeed in the digital age.
          </p>
        </div>
      </div>

      <div className="services-cards">
        {/* Card 1: Business Intelligence */}
        <div className="service-card">
          <div className="card-visual">
            <div className="animation-layer">
              <div className="animated-grid"></div>
              <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="gradient-orb" style={{ top: '30%', left: '30%' }}></div>
              <div className="data-bars">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="icon-container">
                <div className="central-icon">
                  <div className="icon-core">
                    <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 13h2v8H3v-8zm6-4h2v12H9V9zm6-6h2v18h-2V3zm6 8h2v10h-2V11z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="card-title">Business Intelligence</h3>
          <p className="card-description">
            Transform data into actionable insights with powerful analytics,
            interactive dashboards, and real-time reporting
          </p>
        </div>

        {/* Card 2: SAP & Cloud Solutions */}
        <div className="service-card">
          <div className="card-visual">
            <div className="animation-layer">
              <div className="animated-grid"></div>
              <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="gradient-orb" style={{ top: '50%', left: '50%' }}></div>
              <div className="icon-container">
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="central-icon">
                  <div className="icon-core">
                    <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="card-title">SAP & Cloud Solutions</h3>
          <p className="card-description">
            Seamlessly integrate SAP systems with cloud infrastructure for
            scalable, secure enterprise management
          </p>
        </div>

        {/* Card 3: AI & Machine Learning */}
        <div className="service-card">
          <div className="card-visual">
            <div className="animation-layer">
              <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="gradient-orb" style={{ top: '50%', left: '50%' }}></div>
              <div className="scan-line"></div>
              <div className="animated-grid" style={{ opacity: 0.3 }}></div>
              <div className="icon-container">
                <div className="central-icon">
                  <div className="icon-core">
                    <i className="fa-solid fa-brain"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="card-title">AI & Machine Learning</h3>
          <p className="card-description">
            Harness artificial intelligence and predictive analytics to
            automate processes and unlock new opportunities
          </p>
        </div>

        {/* Card 4: Quantitative Risk */}
        <div className="service-card">
          <div className="card-visual">
            <div className="animation-layer">
              <div className="animated-grid"></div>
              <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <div className="gradient-orb" style={{ top: '60%', left: '40%' }}></div>
              <div className="icon-container">
                <div className="orbit-trail"></div>
                <div className="central-icon">
                  <div className="icon-core">
                    <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                  </div>
                </div>
                <div className="orbit-icon orbit-3">
                  <div className="central-icon">
                    <div className="icon-core">
                      <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="card-title">Quantitative Risk</h3>
          <p className="card-description">
            Advanced quantitative models and risk frameworks to identify,
            measure, and mitigate financial risks
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

