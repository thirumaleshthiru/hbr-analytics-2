import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden" style={{ background: '#f8fafc' }}>
      <div className="layout-container flex h-full grow flex-col" style={{ background: '#f8fafc' }}>
        <main className="flex-1" style={{ paddingTop: '5px', background: '#f8fafc' }}>
          <div className="relative w-full overflow-hidden" style={{ background: '#f8fafc' }}>
            <HeroSection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;