import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-section" id="why-choose">
      <div className="section-header">
        <div className="section-badge">
          <i className="fas fa-award"></i>
          <span>Why Choose Us</span>
        </div>
        <h2 className="section-title">Excellence in Every Solution</h2>
        <p className="section-description">
          Our commitment to innovation, quality, and client success sets us apart in the industry.
          Discover what makes us the preferred partner for digital transformation.
        </p>
      </div>

      <div className="why-choose-grid">
        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="why-title">Innovation First</h3>
          <p className="why-description">
            We leverage cutting-edge technologies and methodologies to deliver solutions that keep
            you ahead of the competition.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> Latest Tech Stack</li>
            <li><i className="fas fa-check-circle"></i> Agile Methodology</li>
            <li><i className="fas fa-check-circle"></i> Continuous Innovation</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="why-title">Expert Team</h3>
          <p className="why-description">
            Our certified professionals bring years of experience across multiple industries and
            technologies.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> SAP Certified Consultants</li>
            <li><i className="fas fa-check-circle"></i> Industry Veterans</li>
            <li><i className="fas fa-check-circle"></i> Dedicated Support</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-clock"></i>
          </div>
          <h3 className="why-title">Proven Track Record</h3>
          <p className="why-description">
            With 500+ successful implementations, we have the experience to handle projects of any
            scale and complexity.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> 500+ Projects Delivered</li>
            <li><i className="fas fa-check-circle"></i> 98% Client Satisfaction</li>
            <li><i className="fas fa-check-circle"></i> On-Time Delivery</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-headset"></i>
          </div>
          <h3 className="why-title">24/7 Support</h3>
          <p className="why-description">
            Round-the-clock support ensures your systems run smoothly and any issues are resolved
            promptly.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> 24/7 Availability</li>
            <li><i className="fas fa-check-circle"></i> Rapid Response Time</li>
            <li><i className="fas fa-check-circle"></i> Proactive Monitoring</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="why-title">Security & Compliance</h3>
          <p className="why-description">
            We prioritize data security and ensure compliance with industry standards and
            regulations.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> Enterprise-Grade Security</li>
            <li><i className="fas fa-check-circle"></i> Compliance Standards</li>
            <li><i className="fas fa-check-circle"></i> Data Protection</li>
          </ul>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="why-title">Scalable Solutions</h3>
          <p className="why-description">
            Our solutions grow with your business, ensuring long-term value and adaptability to
            changing needs.
          </p>
          <ul className="why-features">
            <li><i className="fas fa-check-circle"></i> Cloud-Native Architecture</li>
            <li><i className="fas fa-check-circle"></i> Flexible Scaling</li>
            <li><i className="fas fa-check-circle"></i> Future-Ready Technology</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

