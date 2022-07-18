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
    isEmpty: false,
    isVisible: false,
    isLoading: false,
    error: null,
  };

  render() {
    const result = ImageService.getImages("cat");
    console.log(result);
    return (
      <Container>        
        <Searchbar onSubmit> </Searchbar>
        <ImageGallery>  </ImageGallery>
        
      </Container>
  );
  }
};


export default App;