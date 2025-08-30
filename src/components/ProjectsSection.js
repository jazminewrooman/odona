import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "Educación Digital Rural",
      meta: "Meta: $50,000 • 200 niñas beneficiadas",
      description: "Programa de alfabetización digital para niñas en comunidades rurales, proporcionando tablets y conectividad.",
      raised: "$32,500",
      progress: 65
    },
    {
      id: 2,
      name: "Laboratorio STEM Móvil",
      meta: "Meta: $75,000 • 150 niñas beneficiadas",
      description: "Laboratorio móvil de ciencias que visita escuelas rurales para enseñar programación y robótica.",
      raised: "$45,000",
      progress: 60
    },
    {
      id: 3,
      name: "Becas Universitarias Tech",
      meta: "Meta: $100,000 • 50 becas completas",
      description: "Becas completas para estudios universitarios en carreras STEM para jóvenes destacadas.",
      raised: "$28,000",
      progress: 28
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Conoce los proyectos que están transformando vidas</p>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={`/prj${project.id}.jpg`} alt="Project" />
              </div>
              
              <div className="project-content">
                <h3>{project.name}</h3>
                <div className="project-meta">{project.meta}</div>
                <p className="project-description">{project.description}</p>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#4a5568'
                  }}>
                    <span>Recaudado: {project.raised}</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#e2e8f0',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${project.progress}%`,
                      height: '100%',
                      background: 'linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)',
                      transition: 'width 0.3s ease'
                    }}></div>
                  </div>
                </div>
                
                <Link 
                  to="/staking" 
                  state={{ selectedProject: project.name }}
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                >
                  Apoyar Proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
