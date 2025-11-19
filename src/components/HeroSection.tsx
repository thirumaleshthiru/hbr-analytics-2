 
import backgroundVideo from '/public/background.mp4';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hero-video"
            preload="auto"
            onError={(e) => {
              console.error('Video loading error:', e);
              const video = e.target as HTMLVideoElement;
              console.error('Video src attempted:', video.currentSrc || video.src);
            }}
            onLoadedData={() => {
              console.log('Video loaded successfully');
            }}
        >
            <source src={backgroundVideo} type="video/mp4" />
            <source src="/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1 className="hero-title">Data-Driven Decisions for a Digital Future</h1>
            <p className="hero-subtitle">
                Empower your enterprise with advanced analytics, AI, and strategic insights
                tailored for growth.
            </p>
            <a href="#cta" className="hero-btn">
                Start Your Journey <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>
  );
};

export default HeroSection;