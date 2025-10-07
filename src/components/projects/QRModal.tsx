import React from 'react';
import styles from '../../styles/components/projects/QRModal.module.css';


interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeUrl: string;
  projectTitle: string;
}

const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose, qrCodeUrl, projectTitle }) => {
  if (!isOpen) return null;

  return (
    <div 
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        
        <div className={styles.modalBody}>
          <h3 id="modal-title" className={styles.modalTitle}>
            Scan to Try the App
          </h3>
          <div className={styles.codeContainer}>
            <img 
              src={qrCodeUrl} 
              alt={`QR Code for ${projectTitle}`}
              className={styles.codeImage}
            />
          </div>
          <p className={styles.modalSubtitle}>
            Scan this QR code with your phone to download the app
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRModal;