import { ButtonLoadMoreSt } from './Button.styled';

const Button = ({message, onClick}) => {
    return (
        <ButtonLoadMoreSt onClick={onClick}>{message}</ButtonLoadMoreSt>
    )
    
}

export default Button;