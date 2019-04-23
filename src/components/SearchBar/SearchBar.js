import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = (props) => (
  <form className={classes.SearchBarForm} onSubmit={props.search}>
    <input className={classes.SearchBar} onChange={props.handleInput} type="text" placeholder="Search..."/>
  </form>
)

export default SearchBar;