import React, { useState } from 'react';
import styles from './Contact.module.css';
import ContactHeader from './ContactHeader';
import ContactLink from './ContactLink';

const Contact: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const contactLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/skyyyyyy0',
      color: '#6e5494'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/haneul-jang-data-analyst',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:haneul110721@gmail.com',
      color: '#eab308'
    },
    // {
    //   name: 'Instagram',
    //   icon: '📷',
    //   url: 'https://instagram.com/every_aidu',
    //   color: '#e4405f'
    // }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <ContactHeader
          title="Let's Connect"
          description="Coffee chats welcome! ☕ Open to Data Analyst opportunities and conversations about data, analytics, and business impact."
        />

        {/* Contact Links Grid */}
        <div className={styles.linksGrid}>
          {contactLinks.map((link) => (
            <ContactLink
              key={link.name}
              name={link.name}
              icon={link.icon}
              url={link.url}
              color={link.color}
              isHovered={hoveredLink === link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;