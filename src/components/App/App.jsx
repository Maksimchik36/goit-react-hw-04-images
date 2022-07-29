import { useState, useEffect } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import Modal from "components/Modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "components/Loader";
import ErrorMessage from '../ErrorMessage';
import * as ImageService from '../../service/image-service';

const App = () => {

  const [query, setQuery] = useState('');
  const [ourImages, setOurImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false); // пустой ли массив получаем при запросе
  const [isVisible, setIsVisible] = useState(false); // видимость Button LoadMore
  const [isLoading, setIsLoading] = useState(false); // для визуализации загрузки - спинера
  const [error, setError] = useState(null); // сообщение об ошибке - в catch
  const [isModalShown, setIsModalShown] = useState(false); // отображение модалки
  const [largeImageURL, setLargeImageURL] = useState(''); // картинка для модалки


  // при изменении query или page обновляет коллекцию элементов
  useEffect(() => {getPhotos(query, page) }, [query, page]);


  // получает коллекцию элементов
  const getPhotos = async (query, page) => {
    if(!query){
         return ;
    }
    // начало загрузки
    setIsLoading(true)

    try {
      const {totalHits, hits}  = await ImageService.getImages(query, page);
      
      if (hits.length === 0) {
        setIsEmpty(true);
        setQuery('');
        return;
      }
          
      setOurImages(prev => [...prev, ...hits])
      setIsVisible(Math.ceil(totalHits/hits.length) > page)
    }
    catch (error) {
      setError(error);
    }
    finally {
      // завершение загрузки
      setIsLoading(false);
    }
  }


  // перезаписывает значение query в state (App)
  const onSubmit = (query) => {
      setQuery(query);
      setOurImages([]);
      setPage(1);
      setIsEmpty(false);
      setIsVisible(false);
  }


  // при нажатии на кнопку значение текущей страницы увеличивается
  const onLoadMoreBtnClick = () => {
    setPage(prev => prev + 1)
  }


  // при нажатии на картинку записывает в webformatURL значение свойства элемента webformatURL   
  const onImageClick = (e) => {
    const selectedImageSrc = e.target.src;
    const selectedImage = ourImages.find(el => el.webformatURL === selectedImageSrc);
    setLargeImageURL(selectedImage.largeImageURL);
    setIsModalShown(true);
 }

  
  // записывает значение isModalShown false , благодаря чему будет закрываться модалка
  const onModalClose = () => {
    setIsModalShown(false)
 }

  
    // ссылки на картинки для ошибок
    const EmptyLink="https://www.meme-arsenal.com/memes/6701390fa09401b5b6a3cdb3b90ce39e.jpg";
    const ImageError = "https://static6.depositphotos.com/1026266/543/i/600/depositphotos_5437053-stock-photo-woman-pressing-modern-error-button.jpg";

  
  
    return (
      <Container>        
        <Searchbar onSubmit={onSubmit}> </Searchbar>
        
        {isEmpty && <ErrorMessage text="Sorry. There are no images ... 😭" link={EmptyLink}></ErrorMessage>}
        
        {error && <ErrorMessage text="❌ Something went wrong ..." link={ImageError} ></ErrorMessage>}
        
        <ImageGallery
            onClick={onImageClick}
            images={ourImages}>         
        </ImageGallery>
        
        {isVisible && <Button type ="button" message="Load More" onClick={onLoadMoreBtnClick}></Button>}
        
        {isLoading && <Loader/>}

        {largeImageURL && isModalShown && <Modal onClose={onModalClose} >{largeImageURL}</Modal>}
        
      </Container>
  )
};


export default App;