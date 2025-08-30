import React from 'react';

const ProjectExplanation = () => {
  return (
    <section className="explanation-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#805ad5', fontWeight: '600', marginBottom: '1rem' }}>
            Your staking lights their path
          </p>
        </div>
        
        <div className="explanation-content">
          <div className="explanation-text">
            <h2>Empowering Dreams Through Blockchain</h2>
            <p>
            Odona utiliza tecnología blockchain para crear un ecosistema transparente de financiamiento 
              que conecta inversores con proyectos educativos para niñas en comunidades vulnerables. 
              A través de nuestro sistema de staking, cada contribución se convierte en una inversión 
              directa en el futuro de estas jóvenes, proporcionando acceso a educación, tecnología y 
              oportunidades que transformarán sus vidas y comunidades.
            </p>
          </div>
          
          <div className="explanation-image">
            <div style={{
              width: '400px',
              height: '300px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              margin: '0 auto'
            }}>
              <img src="/odonalogotransp.png" alt="Odona Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExplanation;
