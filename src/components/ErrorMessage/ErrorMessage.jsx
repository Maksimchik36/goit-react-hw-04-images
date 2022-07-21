import PropTypes from 'prop-types';
import {ErrorMessageSt, ErrorMessageImageSt, ErrorMessageTextSt} from './ErrorMessage.styled';

const ErrorMessage = ({link, text}) => {
    return(<ErrorMessageSt>
        <ErrorMessageTextSt>{text}</ErrorMessageTextSt>
        <ErrorMessageImageSt src={link} />        
    </ErrorMessageSt>)
}

ErrorMessage.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ErrorMessage;