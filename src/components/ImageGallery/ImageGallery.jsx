import PropTypes from 'prop-types'; 
import { ImageGallerySt } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
    return (
        <ImageGallerySt>{
          images.map(({id, webformatURL, tags}) => {return <ImageGalleryItem 
            key={id}
            picture={webformatURL}
            comment={tags}  
            onClick={onClick}  
            ></ImageGalleryItem> })}

        </ImageGallerySt>
    )
}


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,]).isRequired).isRequired).isRequired,
}


export default ImageGallery;