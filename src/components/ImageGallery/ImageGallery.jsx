import { ImageGallerySt } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

const ImageGallery = ({ images, onClick }) => {
    return (
        <ImageGallerySt>{
          images.map(({id, webformatURL, tags, largeImageURL}) => {return <ImageGalleryItem 
            key={id}
            picture={webformatURL}
            comment={tags}  
            onClick={onClick}  
            largeImageURL={largeImageURL}
            ></ImageGalleryItem> })}

        </ImageGallerySt>
    )
}

export default ImageGallery;