 

const IndustriesSection = () => {
  return (
    <section className="industries-section tech-bg-dots" id="industries">
      <div className="common-container">
        <div className="industries-unified-card">
          <div className="industries-content">
            <div className="industries-badge">Industries</div>
            <h2 className="industries-heading">Industries We Serve</h2>
            <p className="industries-description">
              Delivering specialized analytics solutions across diverse sectors, empowering businesses with
              data-driven insights tailored to their unique industry challenges.
            </p>
            <a href="#" className="industries-cta"><span>Explore Solutions</span><i
              className="fas fa-arrow-right"></i></a>
          </div>
          <div className="industries-cards-section">
            <div className="scrolling-box-frame">
              <div className="scrolling-inner-mask">
                <div className="industries-cards-container">
                  <div className="industries-cards-wrapper">
                    <div className="industries-column industries-column-scroll">
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-shopping-cart scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Retail</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-heartbeat scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Healthcare</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-university scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Finance</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-industry scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Manufacturing</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-bolt scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Energy</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-pills scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Pharmaceuticals</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-car scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Automotive</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-building scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Real Estate</h3>
                      </div>
                      {/* Duplicates for Scroll Loop */}
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-shopping-cart scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Retail</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-heartbeat scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Healthcare</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-university scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Finance</h3>
                      </div>
                      <div className="scrolling-card">
                        <div className="scrolling-icon-wrapper"><i
                          className="fas fa-industry scrolling-icon"></i></div>
                        <h3 className="scrolling-name">Manufacturing</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
