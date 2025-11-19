import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  return (
    <section className="features-intro-section tech-bg-grid">
      <div className="common-container">
        <div className="tabs-header-section">
          <span className="tabs-section-badge">
            <i className="fas fa-check-circle"></i>
            Why Choose Us?
          </span>
        </div>
        <div className="features-card-grid">
          {/* Card 1: Data-Driven Insights */}
          <div className="feature-intro-card">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Data-Driven Insights</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>Transform raw data into actionable
              intelligence with our advanced analytics platform.</p>
            <div className="mt-auto flex-grow">
              <div className="h-32 w-full">
                <svg className="h-full w-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 200">
                  <line stroke="#e5e7eb" strokeWidth="1" x1="30" x2="395" y1="180" y2="180"></line>
                  <line stroke="#e5e7eb" strokeWidth="1" x1="30" x2="395" y1="145" y2="145"></line>
                  <line stroke="#e5e7eb" strokeWidth="1" x1="30" x2="395" y1="110" y2="110"></line>
                  <path className="animated-line"
                    d="M40,160 C100,120 120,50 200,80 S280,150 320,100 S380,40 390,50" fill="none"
                    stroke="#005bff" strokeWidth="3"></path>
                  <circle className="animated-dot" cx="125" cy="65" fill="#005bff" r="5"></circle>
                  <circle className="animated-dot animated-dot-delay-1" cx="200" cy="80" fill="#005bff" r="5">
                  </circle>
                  <circle className="animated-dot animated-dot-delay-2" cx="320" cy="100" fill="#005bff"
                    r="5"></circle>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise Scale */}
          <div className="feature-intro-card">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Enterprise Scale</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>Built for growth with cloud-native
              architecture for seamless data handling.</p>
            <div className="mt-auto flex flex-grow items-end space-x-3 h-32">
              <div className="bar w-full bg-blue-100 rounded-t-md animate-grow-bar" style={{ height: '60%' }}></div>
              <div className="bar w-full bg-blue-200 rounded-t-md animate-grow-bar"
                style={{ height: '85%', animationDelay: '0.1s' }}></div>
              <div className="bar w-full bg-blue-500 rounded-t-md animate-grow-bar"
                style={{ height: '100%', animationDelay: '0.2s' }}></div>
              <div className="bar w-full bg-blue-200 rounded-t-md animate-grow-bar"
                style={{ height: '70%', animationDelay: '0.3s' }}></div>
              <div className="bar w-full bg-blue-100 rounded-t-md animate-grow-bar"
                style={{ height: '55%', animationDelay: '0.4s' }}></div>
            </div>
          </div>

          {/* Card 3: Real-Time Analytics */}
          <div className="feature-intro-card">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Real-Time Analytics</h3>
            <p className="mb-6 text-sm" style={{ color: 'var(--text-secondary)' }}>Monitor business metrics as they
              happen with live dashboards and instant alerts.</p>
            <div className="relative mt-4 h-32">
              <div className="absolute left-0 top-0 flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-md border border-slate-100 animate-fade-in-up"
                style={{ animationDelay: '0.5s' }}>
                <span className="material-symbols-outlined text-green-500 text-xl">trending_up</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">+24.8%</p>
                </div>
              </div>
              <div className="absolute right-0 bottom-2 flex items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-md border border-slate-100 animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}>
                <span className="material-symbols-outlined text-blue-500 text-xl">speed</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">98.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tags-grid-wrapper">
          <div className="feature-tag"><i className="fas fa-lightbulb"></i><span>Innovation First</span></div>
          <div className="feature-tag"><i className="fas fa-users"></i><span>Expert Team</span></div>
          <div className="feature-tag"><i className="fas fa-clock"></i><span>Proven Track Record</span></div>
          <div className="feature-tag"><i className="fas fa-headset"></i><span>24/7 Support</span></div>
          <div className="feature-tag"><i className="fas fa-shield-alt"></i><span>Security & Compliance</span></div>
          <div className="feature-tag"><i className="fas fa-chart-line"></i><span>Scalable Solutions</span></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
