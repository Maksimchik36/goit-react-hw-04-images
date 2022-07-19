import { ImageGalleryItemSt, ImageGalleryItemImageSt } from './ImageGalleryItem.styled';

const ImageGalleryItem = (webformatURL, tags) => {
    
    return ( 
        <ImageGalleryItemSt>
           <ImageGalleryItemImageSt src={webformatURL} alt={tags} />
        </ImageGalleryItemSt>
    )
}

export default ImageGalleryItem;