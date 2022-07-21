import PropTypes from 'prop-types'; 
import { ButtonLoadMoreSt } from './Button.styled';

const Button = ({message, onClick}) => {
    return (
        <ButtonLoadMoreSt onClick={onClick}>{message}</ButtonLoadMoreSt>
    )
}


Button.propTypes = {
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default Button;