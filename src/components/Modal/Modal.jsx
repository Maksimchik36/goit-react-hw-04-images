
import { OverlaySt, ModalSt } from './Modal.styled';

const Modal = ({image, onClose}) => {
    return (
        <OverlaySt>
  <ModalSt>
    <img src={image} alt="" />
  </ModalSt>
</OverlaySt>
    )
}

export default Modal;