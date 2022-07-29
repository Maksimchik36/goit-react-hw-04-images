import PropTypes from 'prop-types'; 
import React, { useState } from "react";
import { FcSearch } from 'react-icons/fc';
import { SearchbarSt, SearchFormSt, SearchFormButtonSt, SearchFormInputSt } from './Searchbar.styled';

const Searchbar = ({onSubmit}) => {
  
  const [query, setQuery] = useState('');


  // записывает введённое значение в query в Searchbar
  const handleInput = (e) => {
    const {value} = e.currentTarget;
    setQuery(value.trim().toLowerCase())
  }


  // вызывается ф-я onSubmit из App и записывается значение из query (Searchbar) - в query (App)
  const handleSubmit = (e) => {
    e.preventDefault();
        
    if(!query){
      alert ("Введите Ваш запрос");
    }

    onSubmit(query); // вызов ф-и из App
    setQuery('');   
  }

  
        return (
            <SearchbarSt>
                <SearchFormSt onSubmit={handleSubmit}>
                    <SearchFormButtonSt type="submit">
                      <FcSearch style={{height: "2em", width: "2em",}}/>
                    </SearchFormButtonSt>

                    <SearchFormInputSt
                      onChange = {handleInput}
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


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default Searchbar;