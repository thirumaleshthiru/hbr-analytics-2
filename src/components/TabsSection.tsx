import { useState } from 'react';
import './TabsSection.css';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      number: '01',
      title: 'Innovation',
      subtitle: 'Creative solutions',
      badge: { icon: 'fa-lightbulb', text: 'Innovation Hub' },
      heading: 'Revolutionary Design Thinking',
      description: 'Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      stats: [
        { value: '145%', label: 'Innovation Rate' },
        { value: '28K', label: 'Ideas Generated' }
      ],
      points: [
        'Nemo enim ipsam voluptatem quia voluptas sit',
        'Aspernatur aut odit fugit sed quia consequuntur',
        'Magni dolores eos qui ratione voluptatem'
      ],
      exploreText: 'Explore Innovation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      floatingCard: { icon: 'fa-bolt', label: 'Speed', value: '3x Faster' }
    },
    {
      id: 2,
      number: '02',
      title: 'Strategy',
      subtitle: 'Business growth',
      badge: { icon: 'fa-compass', text: 'Strategic Planning' },
      heading: 'Data-Driven Business Strategy',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      stats: [
        { value: '234%', label: 'Growth Rate' },
        { value: '156', label: 'Strategies' }
      ],
      points: [
        'Similique sunt in culpa qui officia deserunt',
        'Mollitia animi id est laborum et dolorum fuga',
        'Et harum quidem rerum facilis est expedita'
      ],
      exploreText: 'View Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      floatingCard: { icon: 'fa-chart-line', label: 'Growth', value: '+189% ROI' }
    },
    {
      id: 3,
      number: '03',
      title: 'Performance',
      subtitle: 'Optimal results',
      badge: { icon: 'fa-tachometer-alt', text: 'High Performance' },
      heading: 'Optimized System Performance',
      description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur sapiente delectus.',
      stats: [
        { value: '99.8%', label: 'System Uptime' },
        { value: '2.4s', label: 'Load Time' }
      ],
      points: [
        'Ut aut reiciendis voluptatibus maiores alias',
        'Consequatur aut perferendis doloribus asperiores',
        'Repellat nam libero tempore cum soluta nobis'
      ],
      exploreText: 'Check Performance',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      floatingCard: { icon: 'fa-microchip', label: 'Power', value: '128 Cores' }
    },
    {
      id: 4,
      number: '04',
      title: 'Integration',
      subtitle: 'Seamless workflow',
      badge: { icon: 'fa-puzzle-piece', text: 'Smart Integration' },
      heading: 'Seamless Workflow Integration',
      description: 'Eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis.',
      stats: [
        { value: '450+', label: 'Integrations' },
        { value: '85%', label: 'Automation' }
      ],
      points: [
        'Rerum necessitatibus saepe eveniet voluptates',
        'Repudiandae sint et molestiae non recusandae',
        'Itaque earum rerum hic tenetur sapiente'
      ],
      exploreText: 'Start Integration',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      floatingCard: { icon: 'fa-link', label: 'Connected', value: '24/7 Sync' }
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="tabs" className="tabs section" style={{ background: 'var(--bg-color)', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div className="tabs-wrapper">
          <div className="tabs-header">
            <ul className="nav nav-tabs">
              {tabs.map((tab) => (
                <li key={tab.id} className="nav-item">
                  <a
                    className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(tab.id);
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
            <div className={`tab-pane fade ${activeTab === activeTabData.id ? 'active show' : ''}`}>
              <div className="row align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <div className="col-lg-6" style={{ flex: '1', minWidth: '300px' }}>
                  <div className="content-area">
                    <div className="content-badge">
                      <i className={`fas ${activeTabData.badge.icon}`}></i>
                      <span>{activeTabData.badge.text}</span>
                    </div>
                    <h3>{activeTabData.heading}</h3>
                    <p>{activeTabData.description}</p>

                    <div className="highlight-stats">
                      {activeTabData.stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="feature-points">
                      {activeTabData.points.map((point, index) => (
                        <div key={index} className="point-item">
                          <i className="fas fa-arrow-right"></i>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

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

