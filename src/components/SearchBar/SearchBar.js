import React from 'react';

const SearchBar = (props) => (
  <form onSubmit={props.search}>
    <input onChange={props.handleInput} type="text" placeholder="Search..."/>
  </form>
)

export default SearchBar;