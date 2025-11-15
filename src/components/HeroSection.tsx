import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/50 rounded-full blur-sm animate-particle-float"
          style={{ animationDelay: '-2s' }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-particle-float"
          style={{ animationDuration: '20s', animationDelay: '-5s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-primary/30 rounded-full blur animate-particle-float"
          style={{ animationDuration: '25s', animationDelay: '-1s' }}
        />
        <div 
          className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary/50 rounded-full blur-sm animate-particle-float"
          style={{ animationDelay: '-8s', animationDuration: '18s' }}
        />

        <svg 
          className="w-full h-full" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 1000 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            className="animated-background-line animate-stroke-draw"
            d="M-100 250 Q150 100 400 300 T800 200 L1100 250" 
            style={{ animationDelay: '-2.5s' }}
          />
          <path 
            className="animated-background-line animate-stroke-draw"
            d="M-100 450 Q200 600 500 400 T900 450 L1100 420" 
            style={{ animationDelay: '-5s' }}
          />
          <path 
            className="animated-background-line animate-stroke-draw"
            d="M-100 150 Q250 250 500 100 T1100 200" 
            style={{ animationDelay: '-7.5s' }}
          />
          <path 
            className="animated-background-line animate-stroke-draw"
            d="M-100 350 Q200 300 450 450 T950 300 L1100 320" 
            style={{ animationDelay: '-10s' }}
          />
        </svg>
      </div>

      <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-12 sm:py-16 lg:py-20 pb-8 sm:pb-10 lg:pb-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center hero-grid-container">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10 hero-text-content">
            <div className="flex flex-col gap-4 animate-fade-in-up-spring">
              <h1 className="text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl hero-title">
                <span className="block">Enterprise-Ready. Future-Proof.</span>
                <span className="block text-primary">Effortlessly Scalable</span>
              </h1>
              <p className="text-base md:text-lg hero-description">
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
          <div className="relative h-[450px] w-full lg:h-[500px] hero-graph-content">
            <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '2000px' }}>
              <div className="w-full h-full group" style={{ transformStyle: 'preserve-3d' }}>
                {/* Top Card: Revenue Growth */}
                <div 
                  className="absolute w-[90%] h-[58%] top-[5%] right-[2%] rounded-3xl hero-card shadow-2xl shadow-gray-400/30 border border-white/30 animate-fade-in-up card-enter"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(80px)' }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg hero-card-title">
                        Revenue Growth
                      </h3>
                      <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-green-500/10 text-green-600 animate-indicator-pulse">
                        <span className="material-symbols-outlined text-base">arrow_upward</span>
                        <span className="font-semibold text-sm">12.4%</span>
                      </div>
                    </div>
                    <div className="flex-1 mt-4 relative">
                      <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 200 100">
                        <path 
                          className="graph-grid-lines"
                          d="M0 100 L 200 100 M0 75 L 200 75 M0 50 L 200 50 M0 25 L 200 25 M0 0 L 200 0"
                          stroke="#E2E8F0"
                          strokeDasharray="2 4"
                          strokeWidth="0.75"
                        />
                        <path 
                          className="graph-line animate-line-draw"
                          d="M 0 85 C 30 95, 40 30, 80 50 S 140 0, 170 30 S 190 20, 200 25"
                          stroke="#005bff" 
                          strokeWidth="3"
                          vectorEffect="non-scaling-stroke"
                        />
                        <g className="graph-dots animate-fade-in-up initially-hidden" style={{ animationDelay: '1.5s' }}>
                          <circle 
                            className="stroke-2 stroke-white/80 dark:stroke-white/30" 
                            cx="0" 
                            cy="85" 
                            fill="#005bff" 
                            r="4" 
                          />
                          <circle 
                            className="stroke-2 stroke-white/80 dark:stroke-white/30" 
                            cx="80" 
                            cy="50" 
                            fill="#005bff" 
                            r="4" 
                          />
                          <circle 
                            className="stroke-2 stroke-white/80 dark:stroke-white/30" 
                            cx="170" 
                            cy="30" 
                            fill="#005bff" 
                            r="4" 
                          />
                        </g>
                        <g className="initially-hidden" style={{ animation: 'fade-in-up 0.8s ease-out 1.5s forwards' }}>
                          <circle 
                            className="blue-dot-enhanced stroke-2 stroke-white/80 dark:stroke-white/30" 
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
                  className="absolute w-[85%] h-[58%] bottom-[0%] left-0 rounded-3xl hero-card shadow-2xl shadow-gray-400/30 border border-white/30 animate-fade-in-up card-enter-delay"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(50px)' }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg hero-card-title">
                        Performance Metrics
                      </h3>
                    </div>
                    <div className="flex-1 mt-4 relative flex items-end justify-between px-2 gap-2.5">
                      <div className="bar bar-1 w-full h-[60%] bg-primary/40 rounded-t-md transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                      <div className="bar bar-2 w-full h-[85%] bg-primary/40 rounded-t-md transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                      <div className="bar bar-3 w-full h-full bg-primary rounded-t-md transition-all duration-300 hover:opacity-80 animate-grow-bar" />
                      <div className="bar bar-4 w-full h-[70%] bg-primary/40 rounded-t-md transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                      <div className="bar bar-5 w-full h-[55%] bg-primary/40 rounded-t-md transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                      <div className="bar bar-6 w-full h-[90%] bg-primary/40 rounded-t-md transition-all duration-300 hover:bg-primary/60 animate-grow-bar" />
                    </div>
                  </div>
                </div>

                {/* Top Small Card: Real-time Growth */}
                <div 
                  className="absolute w-auto h-auto -top-[5%] left-[3%] p-3 rounded-2xl hero-card-small shadow-2xl shadow-gray-400/30 border border-white/30 initially-hidden small-card-animated"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(120px) rotateZ(-3deg)', animationDelay: '1.8s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                      <div className="absolute size-3 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium hero-card-text">Real-time Growth</span>
                      <span className="text-lg font-bold hero-card-text-bold">+2.1%</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Small Card: Profit Margin */}
                <div 
                  className="absolute w-[220px] h-auto -bottom-[5%] left-[3%] p-3 pr-4 rounded-2xl hero-card-small shadow-2xl shadow-gray-400/30 border border-white/30 initially-hidden small-card-animated"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(10deg) rotateY(-15deg) translateZ(120px)', animationDelay: '2.0s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-green-100">
                      <span className="material-symbols-outlined text-3xl font-semibold text-green-600 animate-pulse" style={{ animationDuration: '1.5s' }}>
                        trending_up
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium hero-card-text">Profit Margin</span>
                      <span className="text-lg font-bold hero-card-text-bold">24.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;