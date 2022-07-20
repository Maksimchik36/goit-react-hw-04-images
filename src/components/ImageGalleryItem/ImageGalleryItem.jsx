import { ImageGalleryItemSt, ImageGalleryItemImageSt } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ picture, comment, onClick }) => {

    return ( 
        <ImageGalleryItemSt >
            <ImageGalleryItemImageSt src={picture} alt={comment} onClick={onClick} />
        </ImageGalleryItemSt>
    )
}

export default ImageGalleryItem;