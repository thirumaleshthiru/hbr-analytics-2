import { useState, useEffect } from 'react';
 

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      number: '01',
      title: 'Business Intelligence',
      subtitle: 'Data Insights',
      cardTitle: 'Business Intelligence',
      cardDescription: 'Transform data into actionable insights with powerful analytics, interactive dashboards, and real-time reporting',
      services: [
        {
          title: 'Interactive Dashboards',
          description: 'Transform data into actionable insights with powerful analytics, interactive dashboards, and real-time reporting'
        },
        {
          title: 'Data Visualization',
          description: 'Turn complex datasets into clear, interactive visual stories that drive decision-making.'
        },
        {
          title: 'Predictive Analytics',
          description: 'Forecast future trends using historical data patterns to stay ahead of market shifts.'
        }
      ],
      learnMoreText: 'Explore BI Solutions',
      animationType: 'bi'
    },
    {
      id: 'tab2',
      number: '02',
      title: 'SAP & Cloud',
      subtitle: 'Infrastructure',
      cardTitle: 'SAP & Cloud Solutions',
      cardDescription: 'Seamlessly integrate SAP systems with cloud infrastructure for scalable, secure enterprise management',
      services: [
        {
          title: 'Enterprise Resource Planning',
          description: 'Seamlessly integrate SAP systems with cloud infrastructure for scalable, secure enterprise management'
        },
        {
          title: 'SAP Implementation',
          description: 'End-to-end deployment of SAP ERP tailored to your specific business requirements.'
        },
        {
          title: 'Cloud Migration',
          description: 'Secure and efficient transition of legacy systems to modern, scalable cloud platforms.'
        }
      ],
      learnMoreText: 'Explore SAP Services',
      animationType: 'sap'
    },
    {
      id: 'tab3',
      number: '03',
      title: 'AI & Machine Learning',
      subtitle: 'Automation',
      cardTitle: 'AI & Machine Learning',
      cardDescription: 'Harness artificial intelligence and predictive analytics to automate processes and unlock new opportunities',
      services: [
        {
          title: 'Intelligent Automation',
          description: 'Harness artificial intelligence and predictive analytics to automate processes and unlock new opportunities'
        },
        {
          title: 'Natural Language Processing',
          description: 'Advanced text and speech analysis to automate customer support and derive insights.'
        },
        {
          title: 'Computer Vision',
          description: 'Image recognition solutions for automated quality control, security, and monitoring.'
        }
      ],
      learnMoreText: 'Explore AI Solutions',
      animationType: 'ai'
    },
    {
      id: 'tab4',
      number: '04',
      title: 'Quantitative Risk',
      subtitle: 'Financial Safety',
      cardTitle: 'Quantitative Risk',
      cardDescription: 'Advanced quantitative models and risk frameworks to identify, measure, and mitigate financial risks',
      services: [
        {
          title: 'Financial Modeling',
          description: 'Advanced quantitative models and risk frameworks to identify, measure, and mitigate financial risks'
        },
        {
          title: 'Credit Risk Modeling',
          description: 'Robust statistical models to assess and manage borrower default probabilities effectively.'
        },
        {
          title: 'Market Risk Analysis',
          description: 'Sophisticated tools to evaluate potential losses due to market factor movements.'
        }
      ],
      learnMoreText: 'Explore Risk Solutions',
      animationType: 'risk'
    }
  ];

  const [activeServiceCard, setActiveServiceCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setActiveServiceCard(0);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused || isTransitioning) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setActiveTab((currentTab) => {
          const currentIndex = tabs.findIndex(tab => tab.id === currentTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex].id;
        });
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab) return;
    
    setIsTransitioning(true);
    setIsPaused(true);
    
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);

    setTimeout(() => {
      setIsPaused(false);
    }, 10000);

    setTimeout(() => {
      const tabsNavigation = document.querySelector('.tabs-navigation');
      if (tabsNavigation) {
        const headerOffset = 100;
        const elementPosition = tabsNavigation.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleServiceCardClick = (index: number) => {
    setActiveServiceCard(index);
  };

  const renderAnimation = (type: string) => {
    switch (type) {
      case 'bi':
        return (
          <>
            <div className="animated-grid"></div>
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="gradient-orb" style={{ top: '30%', left: '30%' }}></div>
            <div className="data-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="icon-container">
              <div className="central-icon">
                <div className="icon-core">
                  <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13h2v8H3v-8zm6-4h2v12H9V9zm6-6h2v18h-2V3zm6 8h2v10h-2V11z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        );
      case 'sap':
        return (
          <>
            <div className="animated-grid"></div>
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="gradient-orb" style={{ top: '50%', left: '50%' }}></div>
            <div className="icon-container">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="central-icon">
                <div className="icon-core">
                  <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </div>
              </div>
            </div>
          </>
        );
      case 'ai':
        return (
          <>
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="gradient-orb" style={{ top: '50%', left: '50%' }}></div>
            <div className="scan-line"></div>
            <div className="animated-grid" style={{ opacity: 0.3 }}></div>
            <div className="icon-container">
              <div className="central-icon">
                <div className="icon-core">
                  <i className="fas fa-brain" style={{ fontSize: '2rem', color: '#2563eb' }}></i>
                </div>
              </div>
            </div>
          </>
        );
      case 'risk':
        return (
          <>
            <div className="animated-grid"></div>
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
            <div className="gradient-orb" style={{ top: '60%', left: '40%' }}></div>
            <div className="icon-container">
              <div className="orbit-trail"></div>
              <div className="central-icon">
                <div className="icon-core">
                  <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
              </div>
              <div className="orbit-icon orbit-3">
                <div className="central-icon">
                  <div className="icon-core">
                    <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="tabs-section tech-bg-grid" id="solutions">
      <div className="common-container">
        <div className="tabs-header-section">
          <span className="tabs-section-badge">
            <i className="fas fa-microchip"></i>
            Our Solutions
          </span>
          <br /> <br />
          <h2 className="tabs-section-title">
            Advanced <span className="highlight-text">Tech Solutions</span>
          </h2>
          <p className="tabs-section-description">
            Explore our specialized service areas designed to drive growth, optimize operations, and build
            sustainable success.
          </p>
        </div>

        <div 
          className="tabs-navigation"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="tab-nav-content">
                <div className="tab-number">{tab.number}</div>
                <div className="tab-text-content">
                  <h6>{tab.title}</h6>
                  <small>{tab.subtitle}</small>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="tabs-content-area">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane-custom ${activeTab === tab.id ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
              id={tab.id}
            >
              <div className="content-wrapper">
                <div className="col-image">
                  <div className="feature-display-card">
                    <div className="card-visual">
                      <div className="animation-layer">
                        {renderAnimation(tab.animationType)}
                      </div>
                    </div>
                    <h3 className="card-title">{tab.cardTitle}</h3>
                    <p className="card-description">{tab.cardDescription}</p>
                  </div>
                </div>
                <div className="col-services">
                  <div className="services-list-wrapper">
                    {tab.services.map((service, index) => (
                      <div
                        key={index}
                        className={`service-card ${activeServiceCard === index && activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleServiceCardClick(index)}
                      >
                        <div className="service-text">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">{service.description}</p>
                        </div>
                      </div>
                    ))}
                    <div className="learn-more-wrapper">
                      <button className="learn-more-btn">
                        {tab.learnMoreText} <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
