import { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import ImageGalleryItem from "components/ImageGalleryItem";
import * as ImageService from '../../service/image-service';

class App extends Component {
  state = {
    query: '',
    images: [], 
    page: 1,
    isEmpty: false, // пустой ли массив получаем при запросе
    // isVisible: false,
    // isLoading: false,
    // error: null,
  };


  // componentDidUpdate(prevProps, prevState) - если один из параметровне исп-ем, пишем символ "_", чтобы валидатор не ругался
  componentDidUpdate(_, prevState){
    const {query, page} = this.state;
    
    if(prevState.query !== query || prevState.page !== page){
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if(!query){
      console.log("Введите Ваш запрос");
      return;
    }

    try{
      const { hits } = await ImageService.getImages(query, page);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
        console.log("isEmpty: true");
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits]
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
    catch(error){
      console.log("error", error.message);
    }
  }

  onSubmit = (query) => {
    this.setState({
      query,
      images:[],
      page:1,
      })
  }

  render() {
    const {isEmpty} = this.state;

    return (
      <Container>        
        <Searchbar onSubmit={this.onSubmit}> </Searchbar>
        {isEmpty && <>Sorry. There are no images ... 😭</>}
        <ImageGallery>
          <ImageGalleryItem>
            
           </ImageGalleryItem>
         </ImageGallery>
        
      </Container>
  );
  }
};


export default App;