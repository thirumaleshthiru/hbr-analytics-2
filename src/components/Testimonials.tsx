 

const Testimonials = () => {
  return (
    <section className="testimonials-section tech-bg-grid">
      <div className="common-container">
        <div className="tabs-header-section">
          <span className="tabs-section-badge"><i className="fas fa-comment-alt"></i> Testimonials</span>
          <br /> <br />
          <h2 className="tabs-section-title">Trusted by <span className="highlight-text">Industry Leaders</span></h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
            <p className="testimonial-text">"HBR Analytics transformed our data infrastructure. The real-time
              insights from SAP BW4HANA have improved our decision-making speed by 40%."</p>
            <div className="testimonial-user">
              <div className="user-avatar">JS</div>
              <div className="user-info">
                <h5>John Smith</h5><span>CTO, Retail Giant</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
            <p className="testimonial-text">"The team's expertise in Quantitative Risk modeling helped us navigate
              market volatility with confidence. Truly exceptional service."</p>
            <div className="testimonial-user">
              <div className="user-avatar">AL</div>
              <div className="user-info">
                <h5>Amanda Lee</h5><span>CFO, FinTech Corp</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
            <p className="testimonial-text">"Their staffing solutions provided us with highly skilled SAP
              consultants exactly when we needed them. Highly recommended."</p>
            <div className="testimonial-user">
              <div className="user-avatar">MR</div>
              <div className="user-info">
                <h5>Michael Ross</h5><span>Director, HealthCare Inc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
