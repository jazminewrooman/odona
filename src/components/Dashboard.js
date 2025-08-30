import React from 'react';

const Dashboard = ({ stakingData }) => {
  const { totalStaked, girlsSupported, projectsSupported } = stakingData;

  const metrics = [
    {
      value: `$${totalStaked.toFixed(2)}`,
      label: 'Total Invertido',
      icon: '💰',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      value: girlsSupported,
      label: 'Niñas Apoyadas',
      icon: '👧',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      value: projectsSupported,
      label: 'Proyectos Financiados',
      icon: '🎯',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      value: `${(totalStaked * 3).toFixed(0)}%`,
      label: 'Impacto Social ROI',
      icon: '📈',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  const recentActivity = [
    {
      action: 'Staking realizado',
      project: 'Educación Digital Rural',
      amount: '$50',
      date: 'Hace 2 horas',
      impact: '5 niñas beneficiadas'
    },
    {
      action: 'Milestone alcanzado',
      project: 'Laboratorio STEM Móvil',
      amount: '$75,000',
      date: 'Hace 1 día',
      impact: 'Laboratorio construido'
    }
  ];

  return (
    <section className="dashboard-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2d3748', marginBottom: '1rem' }}>
            Tu Dashboard de Impacto
          </h1>
          <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>
            Visualiza el impacto real de tus inversiones
          </p>
        </div>

        <div className="dashboard-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card" style={{ background: metric.color }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {metric.icon}
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        {totalStaked > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>
              Tu Impacto en Números
            </h2>
            
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', color: '#805ad5', fontWeight: '700' }}>
                    {Math.floor(totalStaked / 10)}
                  </div>
                  <div style={{ color: '#4a5568' }}>Meses de educación financiados</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', color: '#805ad5', fontWeight: '700' }}>
                    {Math.floor(totalStaked / 25)}
                  </div>
                  <div style={{ color: '#4a5568' }}>Tablets proporcionadas</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', color: '#805ad5', fontWeight: '700' }}>
                    {Math.floor(totalStaked / 50)}
                  </div>
                  <div style={{ color: '#4a5568' }}>Becas completas otorgadas</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#2d3748', marginBottom: '2rem', textAlign: 'center' }}>
            Actividad Reciente
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {totalStaked > 0 ? (
              <div className="card">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  borderBottom: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    🚀
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', color: '#2d3748' }}>
                      Staking exitoso realizado
                    </div>
                    <div style={{ color: '#4a5568', fontSize: '0.9rem' }}>
                      Has contribuido ${totalStaked.toFixed(2)} • {girlsSupported} niñas beneficiadas
                    </div>
                  </div>
                  <div style={{ color: '#718096', fontSize: '0.8rem' }}>
                    Ahora
                  </div>
                </div>
              </div>
            ) : (
              <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌟</div>
                <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
                  ¡Comienza tu viaje de impacto!
                </h3>
                <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
                  Realiza tu primer staking para ver tu impacto en tiempo real
                </p>
                <a href="/staking" className="btn btn-primary">
                  Hacer mi primer Staking
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
