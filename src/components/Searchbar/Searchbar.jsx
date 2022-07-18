import React, { Component } from "react";
import { SearchbarSt, SearchFormSt, SearchFormButtonSt, SearchFormSpanLabelSt, SearchFormInputSt } from './Searchbar.styled';

class Searchbar extends Component{
  state = {
    query: '',
  }

  // записывает введённое значение в this.state.query
  handleInput = (e) => {
    const {value} = e.currentTarget;
    this.setState({query: value.trim().toLowerCase()})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {query} = this.state;
    this.props.onSubmit(query);
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

export default Searchbar;