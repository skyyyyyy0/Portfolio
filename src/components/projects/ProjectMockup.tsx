import React from 'react';
import styles from '../../styles/components/projects/ProjectMockup.module.css';

interface ProjectMockupProps {
  projectId: number;
  tagline: string;
  mockupImage: string;
  title: string;
  qrCodeUrl: string | null;
  onTryItClick: () => void;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({
  projectId,
  tagline,
  mockupImage,
  title,
  qrCodeUrl,
  onTryItClick
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.mockup} project-mockup-${projectId}`}>
        <div className={styles.header}>
          <p className={styles.tagline}>{tagline}</p>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            src={mockupImage} 
            alt={title}
            className={styles.backgroundImage}
            loading="lazy"
          />
        </div>
      </div>
      
      {qrCodeUrl && (
        <button 
          className={styles.tryItButton}
          onClick={onTryItClick}
          aria-label={`Try ${title}`}
        >
          Try It!
        </button>
      )}
    </div>
  );
};

export default ProjectMockup;