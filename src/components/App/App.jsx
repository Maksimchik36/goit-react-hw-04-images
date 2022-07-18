import { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import * as ImageService from '../../service/image-service';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    // isEmpty: false,
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
     const data = await ImageService.getImages(query, page);
     console.log("app data", data);
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
    const result = ImageService.getImages("cat");
    console.log(result);
    return (
      <Container>        
        <Searchbar onSubmit={this.onSubmit}> </Searchbar>
        <ImageGallery>  </ImageGallery>
        
      </Container>
  );
  }
};


export default App;