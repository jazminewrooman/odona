import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const StakingInterface = ({ onStake }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [selectedProject, setSelectedProject] = useState(
    location.state?.selectedProject || 'Educación Digital Rural'
  );
  const [isStaking, setIsStaking] = useState(false);

  const projects = [
    'Educación Digital Rural',
    'Laboratorio STEM Móvil',
    'Becas Universitarias Tech'
  ];

  const handleStake = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;

    setIsStaking(true);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      onStake(parseFloat(amount), selectedProject);
      setIsStaking(false);
      setAmount('');
      
      // Show success message and redirect
      alert(`¡Staking exitoso! Has invertido $${amount} en ${selectedProject}`);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <section className="staking-section">
      <div className="container">
        <div className="staking-container">
          <h1 style={{ fontSize: '2.5rem', color: '#2d3748', marginBottom: '1rem' }}>
            Simulación de Staking
          </h1>
          <p style={{ color: '#4a5568', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Invierte en el futuro de las niñas a través de blockchain
          </p>

          <div className="staking-form">
            <form onSubmit={handleStake}>
              <div className="form-group">
                <label htmlFor="project">Seleccionar Proyecto</label>
                <select
                  id="project"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  required
                >
                  {projects.map(project => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Cantidad a Invertir (USD)</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Ej: 100"
                  min="1"
                  step="0.01"
                  required
                />
              </div>

              <div style={{
                background: '#f0fff4',
                border: '1px solid #9ae6b4',
                borderRadius: '10px',
                padding: '1rem',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>
                <h4 style={{ color: '#2f855a', marginBottom: '0.5rem' }}>
                  Impacto Estimado:
                </h4>
                <ul style={{ color: '#2f855a', margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Niñas beneficiadas: {amount ? Math.floor(parseFloat(amount) / 10) || 1 : 1}</li>
                  <li>Duración del apoyo: {amount ? Math.floor(parseFloat(amount) / 50) || 1 : 1} meses</li>
                  <li>ROI social estimado: 300%</li>
                </ul>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '1.1rem', padding: '15px' }}
                disabled={isStaking || !amount}
              >
                {isStaking ? (
                  <>
                    <span style={{ marginRight: '10px' }}>⏳</span>
                    Procesando en Blockchain...
                  </>
                ) : (
                  <>
                    <span style={{ marginRight: '10px' }}>🚀</span>
                    Iniciar Staking
                  </>
                )}
              </button>
            </form>

            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              background: 'rgba(128, 90, 213, 0.1)',
              borderRadius: '10px',
              textAlign: 'left'
            }}>
              <h4 style={{ color: '#805ad5', marginBottom: '0.5rem' }}>
                ¿Cómo funciona el Staking?
              </h4>
              <p style={{ color: '#4a5568', fontSize: '0.9rem', margin: 0 }}>
                Tu inversión se bloquea en un smart contract que financia directamente 
                el proyecto seleccionado. Recibes tokens de impacto que representan 
                tu contribución y puedes ver el progreso en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakingInterface;
