

const CTASection = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h1 className="cta-title">Ready to Transform Your Business Insights?</h1>
          <p className="cta-description">Unlock powerful analytics and data-driven decisions with our all-in-one
            platform.</p>
        </div>
        <div className="flex flex-1 justify-center">
          <button className="cta-button">
            <span className="truncate">Get Started Now</span>
            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
