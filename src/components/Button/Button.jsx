import { ButtonLoadMoreSt } from './Button.styled';

const Button = ({text, onClick}) => {
    return (
        <ButtonLoadMoreSt onClick={onClick}>{text}</ButtonLoadMoreSt>
    )
    
}

export default Button;