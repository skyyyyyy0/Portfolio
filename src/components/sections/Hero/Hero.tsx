import React from 'react';
import styles from './Hero.module.css';
import { personalInfo } from '../../../data/personal';
import HeroAvatar from './HeroAvatar';
import HeroContent from './HeroContent';

const HeroSection: React.FC = () => {
  const titles = [
    'Data Scientist',
    'ML Engineer', 
    'Analytics Expert',
    'Data Explorer'
  ];

  const personalTraits = [
    { 
      name: "Reliable", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6065 2.34184C11.8322 2.14578 12.1678 2.14578 12.3935 2.34184L14.3418 4.03445C14.4646 4.14111 14.6254 4.19336 14.7874 4.17924L17.3586 3.9551C17.6564 3.92913 17.9279 4.1264 17.9953 4.41768L18.5766 6.93224C18.6133 7.09069 18.7126 7.22748 18.852 7.31129L21.0639 8.64123C21.3201 8.79529 21.4238 9.11447 21.307 9.3897L20.2994 11.7657C20.2359 11.9155 20.2359 12.0845 20.2994 12.2343L21.307 14.6103C21.4238 14.8855 21.3201 15.2047 21.0639 15.3588L18.852 16.6887C18.7126 16.7725 18.6133 16.9093 18.5766 17.0678L17.9953 19.5823C17.9279 19.8736 17.6564 20.0709 17.3586 20.0449L14.7874 19.8208C14.6254 19.8066 14.4646 19.8589 14.3418 19.9655L12.3935 21.6582C12.1678 21.8542 11.8322 21.8542 11.6065 21.6582L9.65816 19.9655C9.53539 19.8589 9.37458 19.8066 9.21256 19.8208L6.64142 20.0449C6.34359 20.0709 6.07208 19.8736 6.00474 19.5823L5.42338 17.0678C5.38675 16.9093 5.28736 16.7725 5.14798 16.6887L2.93615 15.3588C2.67993 15.2047 2.57622 14.8855 2.69295 14.6103L3.70065 12.2343C3.76414 12.0845 3.76414 11.9155 3.70065 11.7657L2.69295 9.3897C2.57622 9.11447 2.67993 8.79529 2.93615 8.64123L5.14798 7.31129C5.28736 7.22748 5.38675 7.09069 5.42338 6.93224L6.00474 4.41768C6.07208 4.1264 6.34359 3.92913 6.64142 3.9551L9.21256 4.17924C9.37458 4.19336 9.53539 4.14111 9.65816 4.03445L11.6065 2.34184Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 13L11 15L16 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#10b981" 
    },
    { 
      name: "Goal oriented", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 12H18M7 12L5 10H1L3 12L1 14H5L7 12ZM18 12L16 10M18 12L16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 22C20.5376 22 23 17.5228 23 12C23 6.47715 20.5376 2 17.5 2C14.4624 2 12 6.47715 12 12C12 17.5228 14.4624 22 17.5 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#ef4444" 
    },
    { 
      name: "Problem Solver", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 14V18.4C4 18.7314 4.26863 19 4.6 19H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 14V18.4C19 18.7314 18.7314 19 18.4 19H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5H18.4C18.7314 5 19 5.26863 19 5.6V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 10V5.6C4 5.26863 4.26863 5 4.6 5H10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 19V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 10H5C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 5V4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#8b5cf6" 
    },
    { 
      name: "Learning", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21V3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 7L17 7H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 15.5H17L19 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 18.5H17H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 7H7M9 7H7M7 7V5M7 7V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.58609 18.4142L7.0003 17M8.41452 15.5858L7.0003 17M7.0003 17L5.58609 15.5858M7.0003 17L8.41452 18.4142" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#06b6d4" 
    },
    { 
      name: "Collaborative", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6.27975C16 6.88118 15.7625 7.45883 15.3383 7.88611C14.3619 8.87007 13.415 9.89605 12.4021 10.8443C12.17 11.0585 11.8017 11.0507 11.5795 10.8268L8.6615 7.88611C7.7795 6.99725 7.7795 5.56225 8.6615 4.67339C9.55218 3.77579 11.0032 3.77579 11.8938 4.67339L11.9999 4.78027L12.1059 4.67345C12.533 4.24286 13.1146 4 13.7221 4C14.3297 4 14.9113 4.24284 15.3383 4.67339C15.7625 5.10073 16 5.67835 16 6.27975Z" stroke="currentColor" strokeLinejoin="round"/>
          <path d="M18 20L21.8243 16.1757C21.9368 16.0632 22 15.9106 22 15.7515V10.5C22 9.67157 21.3284 9 20.5 9V9C19.6716 9 19 9.67157 19 10.5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 16L18.8581 15.1419C18.949 15.051 19 14.9278 19 14.7994V14.7994C19 14.6159 18.8963 14.4482 18.7322 14.3661L18.2893 14.1447C17.5194 13.7597 16.5894 13.9106 15.9807 14.5193L15.0858 15.4142C14.7107 15.7893 14.5 16.298 14.5 16.8284V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20L2.17574 16.1757C2.06321 16.0632 2 15.9106 2 15.7515V10.5C2 9.67157 2.67157 9 3.5 9V9C4.32843 9 5 9.67157 5 10.5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 16L5.14187 15.1419C5.05103 15.051 5 14.9278 5 14.7994V14.7994C5 14.6159 5.10366 14.4482 5.26776 14.3661L5.71067 14.1447C6.48064 13.7597 7.41059 13.9106 8.01931 14.5193L8.91421 15.4142C9.28929 15.7893 9.5 16.298 9.5 16.8284V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#f59e0b" 
    },
    { 
      name: "Creative", 
      icon: (
        <svg fill="none" height="20" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 2L20 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 2L4 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 16L20 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16L4 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 21H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.9998 3C7.9997 3 5.95186 4.95029 5.99985 8C6.02324 9.48689 6.4997 10.5 7.49985 11.5C8.5 12.5 9 13 8.99985 15H14.9998C15 13.0001 15.5 12.5 16.4997 11.5001L16.4998 11.5C17.4997 10.5 17.9765 9.48689 17.9998 8C18.0478 4.95029 16 3 11.9998 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ), 
      color: "#ec4899" 
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeroAvatar 
          name={personalInfo.name}
          imageSrc="/assets/main_profile.png"
        />
        
        <HeroContent
          titles={titles}
          subtitle={personalInfo.subtitle}
          description={personalInfo.description}
          traits={personalTraits}
          resumeUrl={personalInfo.resume}
        />
      </div>
    </section>
  );
};

export default HeroSection;