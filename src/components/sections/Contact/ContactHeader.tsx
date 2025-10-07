import React from 'react';
import styles from './ContactHeader.module.css';

interface ContactHeaderProps {
  title: string;
  description: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>
        {title}
      </h2>
      
      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
};

export default ContactHeader;