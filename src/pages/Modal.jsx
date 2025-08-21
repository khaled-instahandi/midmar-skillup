import React, { useEffect } from 'react';
import './Modal.css';
import closeSquare from '../images/close-square.svg';

const Modal = ({ children, onClose, height, width,scale ,maxWidth}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}  >

      <div className="modal-content" style={{ height, width,scale,maxWidth }} onClick={(e) => e.stopPropagation()}>
        <div className="close-button-alert" onClick={onClose}>
          <img src={closeSquare} alt="" />
        </div>
        <div className="modal-content-wrapper">
          {children}

        </div>
      </div>
    </div>
  );
};

export default Modal;
