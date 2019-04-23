import React from 'react';
import SearchListItem from './SearchListItem';
import classes from './SearchList.module.css';

const SearchList = ({pokemon}) => (
  <ul className={classes.SearchList}>
    {pokemon.map(poke => (
      <SearchListItem key={Math.random()}>{poke.name}</SearchListItem>
    ))}
  </ul>
)

export default SearchList;