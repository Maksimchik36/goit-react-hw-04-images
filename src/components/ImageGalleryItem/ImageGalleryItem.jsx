import { ImageGalleryItemSt, ImageGalleryItemImageSt } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ picture, comment }) => {

    return ( 
        <ImageGalleryItemSt>
           <ImageGalleryItemImageSt src={picture} alt={comment} />
        </ImageGalleryItemSt>
    )
}

export default ImageGalleryItem;