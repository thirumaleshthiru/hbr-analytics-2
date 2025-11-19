 

const ServicesSection = () => {
  return (
    <section className="featured-cards-section tech-bg-dots" id="services">
      <div className="common-container">
        <div className="tabs-header-section">
          <span className="tabs-section-badge">
            <i className="fas fa-layer-group"></i> Our Services
          </span>
          <br /> <br />
          <h2 className="tabs-section-title">
            Strategic Business Services<br />
            <span className="highlight-text">to deliver the results you need.</span>
          </h2>
          <p className="tabs-section-description" style={{ marginTop: '16px' }}>
            We provide end-to-end consulting and technology solutions designed to address your most critical
            business challenges with precision.
          </p>
        </div>

        <div className="cards-grid">
          <div className="service-display-card">
            <span className="card-number-badge">01</span>
            <div className="card-visual-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Consulting" />
            </div>
            <h3 className="card-title">Consulting & Support</h3>
            <p className="card-description">Our management consulting services focus on critical issues: strategy,
              marketing, organization, operations, and technology transformation across industries.</p>
          </div>
          <div className="service-display-card">
            <span className="card-number-badge">02</span>
            <div className="card-visual-image">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Staffing Services" />
            </div>
            <h3 className="card-title">Staffing Services</h3>
            <p className="card-description">We define and solve specific staffing needs, allowing organizations the
              freedom to focus on their core business while meeting short and long-term objectives.</p>
          </div>
          <div className="service-display-card">
            <span className="card-number-badge">03</span>
            <div className="card-visual-image">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Corporate Trainings" />
            </div>
            <h3 className="card-title">Corporate Trainings</h3>
            <p className="card-description">Effective onboarding and continuous training processes to get learners
              up to speed with new responsibilities and familiar with company culture.</p>
          </div>
          <div className="service-display-card">
            <span className="card-number-badge">04</span>
            <div className="card-visual-image">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                alt="Hire Train Deploy" />
            </div>
            <h3 className="card-title">Hire, Train & Deploy</h3>
            <p className="card-description">We source national talent, train them to be skill-ready, and deploy them
              to your workforce, cutting costs and nullifying sourcing efforts.</p>
          </div>
        </div>

        <div className="services-cta-container">
          <a href="#" className="industries-cta">
            <span>Explore Our Services</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
