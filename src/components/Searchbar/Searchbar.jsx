import PropTypes from 'prop-types'; 
import React, { Component } from "react";
import { SearchbarSt, SearchFormSt, SearchFormButtonSt, SearchFormSpanLabelSt, SearchFormInputSt } from './Searchbar.styled';

class Searchbar extends Component{
  state = {
    query: '',
  }

  // записывает введённое значение в this.state.query в Searchbar
  handleInput = (e) => {
    const {value} = e.currentTarget;
    this.setState({query: value.trim().toLowerCase()})
  }

  // вызывается ф-я onSubmit из App и записывается значение из this.state.query (Searchbar) - в this.state.query (App)
  handleSubmit = (e) => {
    e.preventDefault();
    const {query} = this.state;
    this.props.onSubmit(query); // вызов ф-и из App
    this.setState({query: ''})
  }


    render() {
      const {query} = this.state;
        return (
            <SearchbarSt>
                <SearchFormSt onSubmit={this.handleSubmit}>
                    <SearchFormButtonSt type="submit">
                      <SearchFormSpanLabelSt >Search</SearchFormSpanLabelSt>
                    </SearchFormButtonSt>

                    <SearchFormInputSt
                      onChange = {this.handleInput}
                      value = {query}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                    />
                 </SearchFormSt>
            </SearchbarSt>
        )
    }

}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default Searchbar;