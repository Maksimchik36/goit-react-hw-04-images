import { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";

class App extends Component {
  render() {
    return (
      <Container>        
        <Searchbar onSubmit> </Searchbar>
        <ImageGallery>  </ImageGallery>
        
      </Container>
  );
  }
};


export default App;