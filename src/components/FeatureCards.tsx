import '../components/HeroSection.css';

const FeatureCards = () => {
  return (
    <section className="pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24" style={{ background: 'var(--bg-color)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Data-Driven Insights with animated dots */}
          <div 
            className="group relative flex flex-col rounded-2xl bg-white/60 dark:bg-slate-800/50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Data-Driven Insights
            </h3>
            <p className="mb-6 text-base" style={{ color: 'var(--text-secondary)' }}>
              Transform raw data into actionable intelligence with our advanced analytics platform powered by AI and machine learning.
            </p>
            <div className="mt-auto flex-grow">
              <div className="h-48 w-full">
                <svg 
                  aria-labelledby="revenue-title" 
                  className="h-full w-full"
                  preserveAspectRatio="xMidYMid meet" 
                  viewBox="0 0 400 200"
                >
                  <title id="revenue-title">Animated Revenue Growth Graph</title>
                  <text fill="currentColor" fontSize="12" x="5" y="180" style={{ fill: 'var(--text-desc)' }}>
                    Q1
                  </text>
                  <text fill="currentColor" fontSize="12" x="5" y="145" style={{ fill: 'var(--text-desc)' }}>
                    Q2
                  </text>
                  <text fill="currentColor" fontSize="12" x="5" y="110" style={{ fill: 'var(--text-desc)' }}>
                    Q3
                  </text>
                  <text fill="currentColor" fontSize="12" x="5" y="75" style={{ fill: 'var(--text-desc)' }}>
                    Q4
                  </text>
                  <line 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    x1="30" 
                    x2="395" 
                    y1="180" 
                    y2="180" 
                    style={{ stroke: 'var(--card-border)' }}
                  />
                  <line 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    x1="30" 
                    x2="395" 
                    y1="145" 
                    y2="145" 
                    style={{ stroke: 'var(--card-border)' }}
                  />
                  <line 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    x1="30" 
                    x2="395" 
                    y1="110" 
                    y2="110" 
                    style={{ stroke: 'var(--card-border)' }}
                  />
                  <line 
                    stroke="currentColor" 
                    strokeWidth="0.5" 
                    x1="30" 
                    x2="395" 
                    y1="75" 
                    y2="75" 
                    style={{ stroke: 'var(--card-border)' }}
                  />
                  <path 
                    className="animated-line"
                    d="M40,160 C100,120 120,50 200,80 S280,150 320,100 S380,40 390,50"
                    fill="none" 
                    stroke="#005bff" 
                    strokeWidth="2.5"
                  />
                  <circle className="animated-dot" cx="125" cy="65" fill="#005bff" r="4" />
                  <circle className="animated-dot animated-dot-delay-1" cx="200" cy="80" fill="#005bff" r="4" />
                  <circle className="animated-dot animated-dot-delay-2" cx="320" cy="100" fill="#005bff" r="4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise Scale */}
          <div 
            className="group relative flex flex-col rounded-2xl p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{ background: 'linear-gradient(to bottom right, #2563EB, #1E40AF)' }}
          >
            <h3 className="text-2xl font-bold mb-4">Enterprise Scale</h3>
            <p className="mb-6 text-white/90 text-base">
              Built for growth with cloud-native architecture that seamlessly handles petabytes of data and millions of users.
            </p>
            <div className="mt-auto flex flex-grow items-end space-x-3">
              <div 
                className="h-16 w-full rounded-t-lg bg-white/30 transition-all duration-300 hover:bg-white/50 animate-grow-bar"
                style={{ animationDelay: '0.1s' }}
              />
              <div 
                className="h-24 w-full rounded-t-lg bg-white/30 transition-all duration-300 hover:bg-white/50 animate-grow-bar"
                style={{ animationDelay: '0.2s' }}
              />
              <div 
                className="h-40 w-full rounded-t-lg bg-white/40 transition-all duration-300 hover:bg-white/60 animate-grow-bar"
                style={{ animationDelay: '0.3s' }}
              />
              <div 
                className="h-32 w-full rounded-t-lg bg-white/30 transition-all duration-300 hover:bg-white/50 animate-grow-bar"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>

          {/* Card 3: Real-Time Analytics */}
          <div 
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/60 dark:bg-slate-800/50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50"
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Real-Time Analytics
              </h3>
              <p className="mb-6 text-base" style={{ color: 'var(--text-secondary)' }}>
                Monitor business metrics as they happen with live dashboards and instant alerts for critical changes.
              </p>
              <div className="relative mt-8 h-48">
                <div 
                  className="absolute left-4 top-2 flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900 px-4 py-3 shadow-lg transition-transform duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 animate-fade-in-up"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="material-symbols-outlined text-blue-600 text-2xl">trending_up</span>
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-desc)' }}>
                      Revenue Growth
                    </p>
                    <p className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                      +24.8%
                    </p>
                  </div>
                </div>
                <div 
                  className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900 px-4 py-3 shadow-lg transition-transform duration-300 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 animate-fade-in-up"
                  style={{ animationDelay: '0.7s' }}
                >
                  <span className="material-symbols-outlined text-blue-600 text-2xl">speed</span>
                  <div>
                    <p className="text-xs font-medium" style={{ color: 'var(--text-desc)' }}>
                      Performance
                    </p>
                    <p className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                      98.2%
                    </p>
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

export default FeatureCards;

