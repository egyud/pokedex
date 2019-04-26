import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchList from './SearchList/SearchList';
import classes from './SearchPage.module.css';

const SearchPage = (props) => (
  <div className={classes.SearchPage}>
    <SearchBar 
      handleInput={props.input} 
      search={props.search}/>
    <SearchList 
      pokemon={props.pokemon}
    />
  </div>
)

export default SearchPage;