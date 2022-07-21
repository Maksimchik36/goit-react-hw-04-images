import PropTypes from 'prop-types';
import { ImageGalleryItemSt, ImageGalleryItemImageSt } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ picture, comment, onClick }) => {
    return ( 
        <ImageGalleryItemSt >
            <ImageGalleryItemImageSt src={picture} alt={comment} onClick={onClick} />
        </ImageGalleryItemSt>
    )
}


ImageGalleryItem.propTypes = {
    picture: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}


export default ImageGalleryItem;