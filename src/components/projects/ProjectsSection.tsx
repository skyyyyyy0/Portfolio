import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/projects/ProjectsSection.module.css';
import { portfolioProjects } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import QRModal from '../projects/QRModal';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<number | null>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll(`.${styles.title}, .${styles.description}, .project-card`);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  // Add keyframes for title glow animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes title-glow {
        0%, 100% { 
          opacity: 1; 
          filter: brightness(1) saturate(1); 
        }
        50% { 
          opacity: 0.7; 
          filter: brightness(1.6) saturate(1.4); 
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Get current modal project
  const currentModalProject = portfolioProjects.find(p => p.id === openModal);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Featured Projects
        </h2>
        
        <p className={styles.description}>
          Transforming complex data into reliable insights through analytics, visualization, and predictive modeling.
        </p>

        <div className={styles.grid}>
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onTryItClick={() => setOpenModal(project.id)}
            />
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      <QRModal
        isOpen={openModal !== null}
        onClose={() => setOpenModal(null)}
        qrCodeUrl={currentModalProject?.qrCodeUrl || ''}
        projectTitle={currentModalProject?.title || ''}
      />
    </section>
  );
};

export default Projects;