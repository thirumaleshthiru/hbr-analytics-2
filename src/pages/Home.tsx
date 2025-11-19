import HeroSection from '../components/HeroSection';
import TabsSection from '../components/TabsSection';
 
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import SolutionsSection from '../components/SolutionsSection';
import Testimonials from '../components/Testimonials';
import IndustriesSection from '../components/IndustriesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden" style={{ background: 'var(--bg-color)' }}>
      <div className="layout-container flex h-full grow flex-col" style={{ background: 'var(--bg-color)' }}>
        <main className="flex-1" style={{ background: 'var(--bg-color)' }}>
          <div className="relative w-full overflow-hidden" style={{ background: 'var(--bg-color)' }}>
            <HeroSection />
          </div>
          <WhyChooseUsSection />
          <ServicesSection />
          <TabsSection />
          <SolutionsSection />
          <Testimonials />
          <IndustriesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;