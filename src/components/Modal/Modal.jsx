import PropTypes from 'prop-types'; 
import React, { useEffect } from "react";
import { OverlaySt, ModalSt, ModalImageSt } from './Modal.styled';
import { createPortal } from "react-dom";
  
const modalRoot = document.querySelector('#modal-root')


const Modal = ({onClose, children}) => {
  
  // добавляет слушателя для закрытия по escape
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    //return in useEffect снимает слушателя для закрытия по escape
    return () => { window.removeEventListener('keydown', handleKeyDown) }
  })

  
  // закрывает модалку по нажатию на escape
  const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
  }


  // закрывает модалку по нажатию на backdrop
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
  

    return createPortal(
      <OverlaySt onClick={handleBackdropClick}>
        <ModalSt>
              <ModalImageSt src={children} alt="Big image"></ModalImageSt>
        </ModalSt>
</OverlaySt>, modalRoot)
  
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,  
}


export default Modal;