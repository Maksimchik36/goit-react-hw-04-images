import { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';
import * as ImageService from '../../service/image-service';

class App extends Component {
  state = {
    query: '',
    images: [], 
    page: 1,
    isEmpty: false, // пустой ли массив получаем при запросе
    isVisible: false, // видимость Button LoadMore
    isLoading: false, // для визуализации загрузки - спинера
    error: null, // сообщение об ошибке - в catch
  };


  // componentDidUpdate(prevProps, prevState) - если один из параметровне исп-ем, пишем символ "_", чтобы валидатор не ругался
  componentDidUpdate(_, prevState){
    const {query, page, } = this.state;
    
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }


  // получение коллекции элементов
  getPhotos = async (query, page) => {
    if(!query){
      console.log("Введите Ваш запрос");
      return;
    }
    // начало загрузки
    this.setState({isLoading:true})

    try {
      const {totalHits, hits}  = await ImageService.getImages(query, page);
      
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
        console.log("isEmpty: true");
        return;
      }
      
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: Math.ceil(totalHits/hits.length) > page,

      }))
      // const result = hits.map(element => {
      //   return {
      //     id: element.id,
      //     webformatURL: element.webformatURL,
      //     largeImageURL: element.largeImageURL,
      //   }
      // })
      //         console.log("result", result);

      // return result;
    }
    catch (error) {
      this.setState({error: error.message})
    }
    finally {
      // завершение загрузки
      this.setState({isLoading:false})
    }
  }

  onClick = (e) => {
    console.log("e.target", e.target);
  }

  onSubmit = (query) => {
    this.setState({
      query,
      images:[],
      page: 1,
      isEmpty: false,
      isVisible: false,
      })
  }


  onLoadMoreBtnClick = () => {
   this.setState(prevState => ({page: prevState.page + 1}))    
  }


  render() {
    const { isEmpty, images, isVisible, error, isLoading } = this.state;

    return (
      <Container>        
        <Searchbar onSubmit={this.onSubmit}> </Searchbar>
        {isEmpty && <>Sorry. There are no images ... 😭</>}
        
        {error && <>❌ Something went wrong - {error}</>}
        
        <ImageGallery
            onClick={this.onClick}
            images={images}>         
        </ImageGallery>
        
        {isVisible && <Button message="Load More" onClick={this.onLoadMoreBtnClick}></Button>}
        
        {isLoading && <BallTriangle color="#00BFFF" height={80} width={80} />}
        
      </Container>
  );
  }
};


export default App;