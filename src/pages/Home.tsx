
import HeroSection from '../components/HeroSection';
function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden" style={{ background: 'var(--bg-color)' }}>
      <div className="layout-container flex h-full grow flex-col" style={{ background: 'var(--bg-color)' }}>
        <main className="flex-1" style={{ background: 'var(--bg-color)' }}>
          <div className="relative w-full overflow-hidden" style={{ background: 'var(--bg-color)' }}>
            <HeroSection />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;