 

const SolutionsSection = () => {
  return (
    <>
      {/* OUR SOLUTIONS (FORMERLY TECHNICAL SOLUTIONS) - CHANGED TO GRID BG */}
      <section className="technical-solutions-section tech-bg-grid" id="expertise">
        {/* Grid Background Overlay */}
        <div className="solutions-bg-grid"></div>
        <div className="common-container">
          <div className="tabs-header-section">
            {/* Swapped Header Tags */}
            <span className="tabs-section-badge"><i className="fas fa-briefcase"></i> Our Expertise</span>
            <br /> <br />
            <h2 className="tabs-section-title">Strategic <span className="highlight-text">Business Expertise</span></h2>
            <p className="tabs-section-description">
              Comprehensive suite of specialized solutions leveraging SAP technologies and advanced analytics to
              accelerate your digital transformation.
            </p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-number">01</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">SAP BW</h3>
                </div>
                <p className="solution-description">Empower data warehousing and reporting with SAP BW solutions
                  designed for efficient data collection.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">02</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">SAP BW4HANA</h3>
                </div>
                <p className="solution-description">Accelerate data processing with next-generation SAP BW4HANA
                  offering real-time analytics.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">03</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">SAP Analytics Cloud</h3>
                </div>
                <p className="solution-description">Enable intelligent decision-making with SAC's unified platform
                  combining BI and planning.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">04</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">Analysis for Office</h3>
                </div>
                <p className="solution-description">Enhance reporting with SAP AO Excel add-in for dynamic reports
                  and real-time data access.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">05</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">SAP BPC</h3>
                </div>
                <p className="solution-description">Optimize financial planning and consolidation processes with
                  comprehensive SAP BPC.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">06</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">Group Reporting</h3>
                </div>
                <p className="solution-description">Streamline financial consolidation and reporting with automated
                  solutions ensuring compliance.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">07</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">Embedded Analytics</h3>
                </div>
                <p className="solution-description">Unlock real-time business intelligence with embedded analytics
                  in SAP S4HANA.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="solution-card">
              <div className="solution-number">08</div>
              <div className="card-content-spacer">
                <div className="title-wrapper">
                  <div className="card-accent-line"></div>
                  <h3 className="solution-title">SAP IBP</h3>
                </div>
                <p className="solution-description">Optimize supply chain planning with SAP IBP for improved demand
                  forecasting.</p>
                <a href="#" className="solution-link">Explore Solution <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          {/* ADDED BUTTON HERE */}
          <div className="services-cta-container">
            <a href="#" className="industries-cta"><span>Explore All Solutions</span><i
              className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSection;
