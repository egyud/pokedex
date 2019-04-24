import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchList from './SearchList/SearchList';

const SearchPage = (props) => (
  <div>
    <SearchBar 
      handleInput={props.input} 
      search={props.search}/>
    <SearchList 
      pokemon={props.pokemon}
    />
  </div>
)

export default SearchPage;