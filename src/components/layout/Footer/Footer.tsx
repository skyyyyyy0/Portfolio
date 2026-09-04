import React from 'react';
import styles from './Footer.module.css';
import { personalInfo } from '../../../data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string): void => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.section}>
            <h3 className={styles.brandTitle}>
              {personalInfo.name}
            </h3>
            <p className={styles.brandDescription}>
              Data Analyst transforming complex, event-driven data into reliable KPIs, dashboards, and actionable business insights
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== 'Email' ? '_blank' : undefined}
                  rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={styles.socialLink}
                  aria-label={link.platform}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>
              Quick Navigation
            </h4>
            <ul className={styles.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                    <a  
                    href={item.href}
                    className={styles.link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h4 className={`${styles.sectionTitle} ${styles.contactTitle}`}>
              Get In Touch
            </h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                📧 {personalInfo.email}
              </p>
              <p className={styles.contactItem}>
                📍 {personalInfo.location}
              </p>
              <p className={styles.contactItem}>
                ⚡ Available for new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {personalInfo.name}. Built with React, TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;