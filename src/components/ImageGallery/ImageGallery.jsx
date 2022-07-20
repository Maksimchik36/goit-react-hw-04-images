import { ImageGallerySt } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({ images }) => {
    return (
        <ImageGallerySt>{
          images.map(({id, webformatURL, tags, largeImageURL}) => {return <ImageGalleryItem 
            key={id}
            picture={webformatURL}
            comment={tags}            
            ></ImageGalleryItem> })}

        </ImageGallerySt>
    )
}

export default ImageGallery;