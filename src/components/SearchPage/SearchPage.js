import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchList from './SearchList/SearchList';
import classes from './SearchPage.module.css';

const SearchPage = (props) => (
  <div className={classes.SearchPage}>
    <SearchBar 
      handleInput={props.input} 
      search={props.search}/>
    <button onClick={props.prev}>Prev</button>
    <button onClick={props.next}>Next</button>
    <SearchList 
      pokemon={props.pokemon}
    />
  </div>
)

export default SearchPage;