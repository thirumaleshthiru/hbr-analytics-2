import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen py-15">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="background.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20  pb-8 sm:pb-10 lg:pb-12 min-h-screen flex items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center hero-grid-container w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10 hero-text-content">
            <div className="flex flex-col gap-4 animate-fade-in-up-spring">
              <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl hero-title">
                <span className="block text-white">Enterprise-Ready. Future-Proof.</span>
                <span className="block text-primary">Effortlessly Scalable</span>
              </h1>
              <p className="text-white/70 md:text-lg hero-description">
                Our platform is built from the ground up to meet the demands of modern
                enterprise, ensuring you can start fast and scale without limits.
              </p>
            </div>
            <div 
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start animate-fade-in-up-spring"
              style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
            >
              <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/30 hover:opacity-90 transition-all">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>

          {/* Right Graphics */}
          <div className="relative h-[450px] w-full lg:h-[550px] hero-graph-content">
            <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1500px' }}>
              <div className="w-full h-full group" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Top Card: Revenue Growth */}
                <div 
                  className="absolute w-[85%] h-[55%] top-[5%] right-0 rounded-2xl bg-white backdrop-blur-xl shadow-2xl shadow-gray-900/40 border border-white/30"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(-20px)' }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-slate-800">
                        Revenue Growth
                      </h3>
                      <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-green-500/10 text-green-600 animate-indicator-pulse">
                        <span className="material-symbols-outlined text-base">arrow_upward</span>
                        <span className="font-semibold text-sm">12.4%</span>
                      </div>
                    </div>
                    <div className="flex-1 mt-4 relative">
                      <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 200 100">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" stopColor="#005bff" stopOpacity="0" />
                            <stop offset="100%" stopColor="#005bff" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M0 20 H200" 
                          stroke="#E2E8F0" 
                          strokeDasharray="2 2" 
                          strokeWidth="0.5" 
                        />
                        <path 
                          d="M0 40 H200" 
                          stroke="#E2E8F0" 
                          strokeDasharray="2 2" 
                          strokeWidth="0.5" 
                        />
                        <path 
                          d="M0 60 H200" 
                          stroke="#E2E8F0" 
                          strokeDasharray="2 2" 
                          strokeWidth="0.5" 
                        />
                        <path 
                          d="M0 80 H200" 
                          stroke="#E2E8F0" 
                          strokeDasharray="2 2" 
                          strokeWidth="0.5" 
                        />
                        <path 
                          className="animated-graph-line animate-line-draw"
                          d="M 0 85 C 30 95, 40 30, 80 50 S 140 0, 170 30 S 190 20, 200 25"
                          stroke="url(#lineGradient)" 
                          strokeWidth="2.5"
                          vectorEffect="non-scaling-stroke"
                        />
                        <circle 
                          className="opacity-0 animate-fade-in" 
                          cx="0" 
                          cy="85" 
                          fill="#005bff" 
                          r="2.5"
                          style={{ animation: 'fade-in 0.5s 0.2s forwards' }}
                        />
                        <circle 
                          className="opacity-0 animate-fade-in" 
                          cx="80" 
                          cy="50" 
                          fill="#005bff" 
                          r="2.5"
                          style={{ animation: 'fade-in 0.5s 0.8s forwards' }}
                        />
                        <circle 
                          className="opacity-0 animate-fade-in" 
                          cx="170" 
                          cy="30" 
                          fill="#005bff" 
                          r="2.5"
                          style={{ animation: 'fade-in 0.5s 1.6s forwards' }}
                        />
                        <g className="animate-ball-pulse">
                          <circle cx="200" cy="25" fill="#005bff" r="5" />
                          <circle cx="200" cy="25" fill="#005bff" fillOpacity="0.3" r="8" />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Real-time Growth Small Card - Inside Revenue Growth, Top Left */}
                  <div 
                    className="absolute w-auto h-auto -top-[20%] -left-[10%] p-3 rounded-2xl bg-white backdrop-blur-xl shadow-2xl shadow-gray-900/40 border border-white/30 initially-hidden small-card-animated hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d', transform: 'rotateZ(-3deg)', animationDelay: '1.8s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                        <div className="absolute size-3 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-500">Real-time Growth</span>
                        <span className="text-lg font-bold text-slate-800">+2.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
 

                {/* Bottom Card: Performance Bars */}
                <div 
                  className="absolute w-full h-[55%] bottom-0 left-0 rounded-2xl bg-white backdrop-blur-xl shadow-2xl shadow-gray-900/40 border border-white/30"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(50px)' }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-slate-800">
                        Performance
                      </h3>
                      <select className="bg-transparent text-sm text-slate-500 border-none focus:ring-0 p-0">
                        <option>This Quarter</option>
                        <option>Last Quarter</option>
                      </select>
                    </div>
                    <div className="flex-1 mt-4 relative flex items-end justify-between px-2 gap-2">
                      <div className="w-full h-[60%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-[85%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-full bg-primary rounded-t-md transition-all duration-300 hover:opacity-80" />
                      <div className="w-full h-[70%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-[55%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-[90%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-[75%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                      <div className="w-full h-[65%] bg-primary/20 rounded-t-md transition-all duration-300 hover:bg-primary/40" />
                    </div>
                  </div>

                  {/* Profit Margin Small Card - Inside Performance, Bottom Left */}
                  <div 
                    className="absolute w-auto h-auto -bottom-[15%] md:-left-[5%] -left-[1%] p-3 pr-4 rounded-2xl bg-white backdrop-blur-xl shadow-2xl shadow-gray-900/40 border border-white/30 initially-hidden small-card-animated transition-all duration-300"
                    style={{ transformStyle: 'preserve-3d', animationDelay: '2.0s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-green-100">
                        <span className="material-symbols-outlined text-2xl font-semibold text-green-600 animate-pulse" style={{ animationDuration: '1.5s' }}>trending_up</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-slate-500">Profit Margin</span>
                        <span className="text-lg font-bold text-slate-800">24.8%</span>
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

export default HeroSection;