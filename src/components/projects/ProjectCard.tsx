import React from 'react';
import styles from '../../styles/components/projects/ProjectCard.module.css';
import type { PortfolioProject } from '../../data/projects';
import ProjectMockup from './ProjectMockup';
import TechnologyTag from './TechnologyTag';
import '../../styles/components/projects/common.css';

interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTryItClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onTryItClick
}) => {
  return (
    <div
      className={`${styles.card} project-${project.id} ${index % 2 === 1 ? styles.cardReverse : ''} ${isHovered ? styles.cardHovered : ''} project-card ${isHovered ? 'project-card-hovered' : ''}`}
      data-accent-color={project.accentColor}
      data-gradient={project.gradient}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        '--accent-color': project.accentColor,
        '--gradient': project.gradient
      } as React.CSSProperties}
    >
      {/* Project Mockup Section */}
      <ProjectMockup
        projectId={project.id}
        tagline={project.tagline}
        mockupImage={project.mockupImage}
        title={project.title}
        qrCodeUrl={project.qrCodeUrl}
        onTryItClick={onTryItClick}
      />

      {/* Project Information Section */}
      <div className={styles.info}>
        <div className={styles.badge}>
          Project {project.id}
        </div>

        <h3 className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.description}>
          {project.description}
        </p>

        {/* Features List */}
        <div className={styles.features}>
          {project.features.map((feature, featureIndex) => (
            <div key={featureIndex} className={styles.featureItem}>
              <span className={styles.featureCheckmark}>✓</span>
              <span className={styles.featureText}>{feature}</span>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className={styles.technologies}>
          <h4 className={styles.technologiesTitle}>Technologies Used</h4>
          <div className={styles.technologiesGrid}>
            {project.technologies.map((tech, techIndex) => (
              <TechnologyTag
                key={techIndex}
                technology={tech}
                index={techIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;