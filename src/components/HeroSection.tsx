import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden" id="home">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center" style={{ paddingTop: '60px' }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center hero-grid-container">
            {/* Left Content */}
            <div className="flex flex-col gap-6 z-10 hero-text-content">
              <div className="flex flex-col gap-4 animate-fade-in-up-spring">
                <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl text-white">
                  Unlock Real-Time Insights. Drive Smarter Decisions.
                </h1>
                <p className="text-base md:text-lg text-slate-200">
                  Harness the power of business intelligence, predictive analytics, and
                  enterprise planning in one unified solution.
                </p>
              </div>
              <div
                className="flex flex-col items-center gap-4 sm:flex-row animate-fade-in-up-spring"
                style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
              >
                <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 hover:opacity-90 transition-all">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>

            {/* Right Graphics */}
            <div className="relative h-[450px] w-full lg:h-[550px] hero-graph-content">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full group">
                  {/* Top Card: Revenue Growth */}
                  <div
                    className="absolute w-[85%] h-[55%] top-[5%] right-0 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/60 border border-white/20 animate-fade-in-up card-enter"
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-white">
                          Revenue Growth
                        </h3>
                        <div className="flex items-center gap-1 text-green-400">
                          <span className="material-symbols-outlined text-xl">arrow_upward</span>
                          <span className="font-semibold">12.4%</span>
                        </div>
                      </div>
                      <div className="flex-1 mt-4 relative">
                        <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 200 100">
                          <path
                            className="graph-grid-lines"
                            d="M0 100 L 200 100 M0 75 L 200 75 M0 50 L 200 50 M0 25 L 200 25 M0 0 L 200 0"
                            stroke="#005bff"
                            strokeOpacity="0.3"
                            strokeDasharray="2 4"
                            strokeWidth="0.75"
                          />
                          <path
                            className="graph-line animate-line-draw"
                            d="M 0 85 C 30 95, 40 30, 80 50 S 140 0, 170 30 S 190 20, 200 25"
                            stroke="#005bff"
                            strokeWidth="2.5"
                            vectorEffect="non-scaling-stroke"
                          />
                          <g className="graph-dots animate-fade-in-up initially-hidden" style={{ animationDelay: '1.5s' }}>
                            <circle className="stroke-2 stroke-white/30" cx="0" cy="85" fill="#005bff" r="4" />
                            <circle className="stroke-2 stroke-white/30" cx="80" cy="50" fill="#005bff" r="4" />
                            <circle className="stroke-2 stroke-white/30" cx="170" cy="30" fill="#005bff" r="4" />
                          </g>
                          <g className="initially-hidden" style={{ animation: 'fade-in-up 0.8s ease-out 1.5s forwards' }}>
                            <circle
                              className="blue-dot-enhanced stroke-2 stroke-white/30"
                              cx="200"
                              cy="25"
                              fill="#005bff"
                              r="4"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card: Performance Bars */}
                  <div
                    className="absolute w-full h-[55%] bottom-0 left-0 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/20 animate-fade-in-up card-enter-delay"
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg text-white">
                          Performance
                        </h3>
                      </div>
                      <div className="flex-1 mt-4 relative flex items-end justify-between px-2 gap-2">
                        <div className="bar bar-1 w-full h-[60%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-2 w-full h-[85%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-3 w-full h-full bg-primary rounded-t-lg transition-all duration-300 hover:opacity-80 animate-grow-bar" />
                        <div className="bar bar-4 w-full h-[70%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-5 w-full h-[55%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-6 w-full h-[90%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-7 w-full h-[75%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                        <div className="bar bar-8 w-full h-[65%] bg-primary/40 rounded-t-lg transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                      </div>
                    </div>
                  </div>

                  {/* Top Small Card: Real-time Growth */}
                  <div
                    className="absolute w-auto h-auto -top-[2%] left-[5%] p-3 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-200">Real-time Growth</span>
                        <span className="font-bold text-sm text-white">+12.5%</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Small Card: Profit Margin */}
                  <div
                    className="absolute w-[220px] h-[70px] -bottom-[5%] left-[5%] rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 border border-white/20"
                  >
                    <div className="p-4 h-full flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-200">Profit Margin</span>
                        <span className="font-bold text-lg text-white">25.8%</span>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"
                        style={{ animation: 'pulse-indicator 2s cubic-bezier(0.4, 0, 0.6, 1) 3s infinite' }}
                      >
                        <span className="material-symbols-outlined text-xl">trending_up</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
