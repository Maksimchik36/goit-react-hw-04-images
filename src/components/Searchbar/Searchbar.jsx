import React, { Component } from "react";
import { SearchbarSt, SearchFormSt, SearchFormButtonSt, SearchFormSpanLabelSt, SearchFormInputSt } from './Searchbar.styled';

class Searchbar extends Component{

    render() {
        return (
            <SearchbarSt>
                <SearchFormSt>
                    <SearchFormButtonSt type="submit" className="button">
                      <SearchFormSpanLabelSt >Search</SearchFormSpanLabelSt>
                    </SearchFormButtonSt>

                    <SearchFormInputSt
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