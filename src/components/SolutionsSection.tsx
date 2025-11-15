import './SolutionsSection.css';

const SolutionsSection = () => {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Comprehensive Platform Solutions</h2>
          <p>
            From data integration to advanced analytics, our platform provides everything you need to
            transform your business operations and drive measurable results.
          </p>
        </div>
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Data Integration</h3>
            <p>
              Connect all your data sources seamlessly with our robust integration capabilities.
            </p>
            <ul className="solution-features">
              <li><i className="fas fa-check-circle"></i> Multi-source connectivity</li>
              <li><i className="fas fa-check-circle"></i> Real-time sync</li>
              <li><i className="fas fa-check-circle"></i> Data quality assurance</li>
            </ul>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Advanced Analytics</h3>
            <p>
              Unlock insights with powerful analytics and visualization tools.
            </p>
            <ul className="solution-features">
              <li><i className="fas fa-check-circle"></i> Predictive modeling</li>
              <li><i className="fas fa-check-circle"></i> Custom dashboards</li>
              <li><i className="fas fa-check-circle"></i> AI-powered insights</li>
            </ul>
          </div>

          <div className="solution-card">
            <div className="solution-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Enterprise Security</h3>
            <p>
              Bank-level security protocols protect your most valuable asset - your data.
            </p>
            <ul className="solution-features">
              <li><i className="fas fa-check-circle"></i> End-to-end encryption</li>
              <li><i className="fas fa-check-circle"></i> Compliance ready</li>
              <li><i className="fas fa-check-circle"></i> Access controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

