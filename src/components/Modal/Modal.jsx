import React, { Component } from "react";
import { OverlaySt, ModalSt, ModalImageSt } from './Modal.styled';
import { createPortal } from "react-dom";
  
const modalRoot = document.querySelector('#modal-root')


export default class Modal extends Component{
  // добавляет слушателя для закрытия по escape
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // снимает слушателя для закрытия по escape
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // закрытие модалки по нажатию на escape
  handleKeyDown = (e) => {

      if (e.code === 'Escape') {
        this.props.onClose();
      }
  }

  // закрытие модалки по нажатию на backdrop
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }
  

  render() {
    return createPortal(
      <OverlaySt onClick={this.handleBackdropClick}>
        <ModalSt>
              <ModalImageSt src={this.props.children} alt="Big image"></ModalImageSt>
        </ModalSt>
</OverlaySt>, modalRoot)
  }
}







// import { OverlaySt, ModalSt, ModalImageSt } from './Modal.styled';

// const Modal = ({data, onClick}) => {
//     return (
//         <OverlaySt>
//   <ModalSt>
//     <ModalImageSt src={data} alt="Big image" onClick={onClick} />
//   </ModalSt>
// </OverlaySt>
//     )
// }

// export default Modal;