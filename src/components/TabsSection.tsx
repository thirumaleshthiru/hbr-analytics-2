import { useState, useEffect, useRef } from 'react';
import './TabsSection.css';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveTab((prev) => {
        const next = prev === 4 ? 1 : prev + 1;
        return next;
      });
    }, 5000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    // Pause auto-rotation when user manually clicks
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    // Resume after 10 seconds of inactivity
    setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setActiveTab((prev) => {
          const next = prev === 4 ? 1 : prev + 1;
          return next;
        });
      }, 5000);
    }, 10000);
  };

  const tabs = [
    {
      id: 1,
      number: '01',
      title: 'Consulting & Support',
      subtitle: 'Management consulting',
      badge: { icon: 'fa-headset', text: 'Consulting Services' },
      heading: 'Consulting & Support',
      description: 'We focus on strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics, corporate finance, mergers & acquisitions and sustainability across all industries and geographies. Our deep, functional expertise and broad knowledge of the major trends and forces shaping the business world enable us to deliver holistic perspective and capture value across boundaries and between the silos of any organization.',
      stats: [
        { value: '500+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' }
      ],
      points: [
        'Strategy, marketing, organization, operations, technology',
        'Transformation, digital, advanced analytics',
        'Corporate finance, mergers & acquisitions and sustainability'
      ],
      exploreText: 'LEARN MORE',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      floatingCard: { icon: 'fa-headset', label: 'Support', value: '24/7 Available' }
    },
    {
      id: 2,
      number: '02',
      title: 'Staffing Services',
      subtitle: 'Talent solutions',
      badge: { icon: 'fa-users', text: 'Staffing Solutions' },
      heading: 'Staffing Services',
      description: 'We understand, define, and solve specific staffing needs, thus allowing small and large organisations the time and freedom to focus on their core business. With HBR as your consulting partner, you can easily meet your short-term and long-term business objectives. Once we thoroughly understand your staffing requirements, we will be able to provide you the right people with the right skill set, attitude, and commitment that will help propel your organisation toward success.',
      stats: [
        { value: '1000+', label: 'Placements' },
        { value: '95%', label: 'Retention Rate' }
      ],
      points: [
        'Understand, define, and solve specific staffing needs',
        'Right people with the right skill set and attitude',
        'Help propel your organisation toward success'
      ],
      exploreText: 'LEARN MORE',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      floatingCard: { icon: 'fa-users', label: 'Talent', value: 'Expert Team' }
    },
    {
      id: 3,
      number: '03',
      title: 'Corporate Trainings',
      subtitle: 'Learning & development',
      badge: { icon: 'fa-user-tie', text: 'Training Programs' },
      heading: 'Corporate Trainings',
      description: 'Training is the process of getting learners up to speed with new responsibilities and familiar with company culture. Like any learning experience, onboarding is journeys, not a one-time event. Onboarding prepares new employees to become productive quickly and reinforce the decision to join the organization. Dynamic learning experiences to connect early on with employees and build confidence to ensure a greater contribution.',
      stats: [
        { value: '5000+', label: 'Trained Employees' },
        { value: '90%', label: 'Success Rate' }
      ],
      points: [
        'Get learners up to speed with new responsibilities',
        'Prepare new employees to become productive quickly',
        'Dynamic learning experiences to build confidence'
      ],
      exploreText: 'LEARN MORE',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      floatingCard: { icon: 'fa-user-tie', label: 'Training', value: 'Expert Led' }
    },
    {
      id: 4,
      number: '04',
      title: 'Hire, Train & Deploy',
      subtitle: 'HTD concept',
      badge: { icon: 'fa-user-check', text: 'HTD Services' },
      heading: 'Hire, Train & Deploy',
      description: 'We introduce talent sourced at the national level to join your workforce trained and skill-ready. We nullify your effort and cut down costs for you by introducing our HTD concept that will replace your manpower for sourcing, training and hiring for your teams success in the future. Our process to select only the best candidates to suit your requirement is flawless and helps you get the top talent from across India.',
      stats: [
        { value: '2000+', label: 'Deployed Talent' },
        { value: '85%', label: 'Cost Reduction' }
      ],
      points: [
        'Talent sourced at the national level, trained and skill-ready',
        'Replace your manpower for sourcing, training and hiring',
        'Get the top talent from across India'
      ],
      exploreText: 'LEARN MORE',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800',
      floatingCard: { icon: 'fa-user-check', label: 'HTD', value: 'Ready Talent' }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="tabs" className="tabs section" style={{ background: 'var(--bg-color)' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div className="tabs-wrapper">
          <div className="services-content" style={{ marginBottom: '10px' }}>
            <div className="services-content-left">
              <span className="services-label">OUR SERVICES</span>
            </div>
            
          </div>
          <div className="tabs-header">
            <ul className="nav nav-tabs">
              {tabs.map((tab) => (
                <li key={tab.id} className="nav-item">
                  <a
                    className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(tab.id);
                      document.getElementById('tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="tab-content-preview">
                      <span className="tab-number">{tab.number}</span>
                      <div className="tab-text">
                        <h6>{tab.title}</h6>
                        <small>{tab.subtitle}</small>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content">
            <div key={activeTab} className="tab-pane fade active show">
              <div className="row align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <div className="col-lg-6" style={{ flex: '1', minWidth: '300px' }}>
                  <div className="content-area">
                    <div className="content-badge">
                      <i className={`fas ${activeTabData.badge.icon}`}></i>
                      <span>{activeTabData.badge.text}</span>
                    </div>
                    <h3>{activeTabData.heading}</h3>
                    <p>{activeTabData.description}</p>

                  
 
                    <a href="#" className="explore-link">
                      {activeTabData.exploreText} <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6" style={{ flex: '1', minWidth: '300px' }}>
                  <div className="visual-content">
                    <img src={activeTabData.image} alt={activeTabData.title} className="img-fluid" />
                    <div className="floating-element">
                      <div className="floating-card">
                        <i className={`fas ${activeTabData.floatingCard.icon}`}></i>
                        <div className="card-info">
                          <span>{activeTabData.floatingCard.label}</span>
                          <strong>{activeTabData.floatingCard.value}</strong>
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
    </section>
  );
};

export default TabsSection;

