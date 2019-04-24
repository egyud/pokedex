import React from 'react';
import SearchListItem from './SearchListItem';
import classes from './SearchList.module.css';

const SearchList = ({pokemon}) => (
    <ul className={classes.SearchList}>
        {pokemon.map(poke => {
          poke.name = poke.name.charAt(0).toUpperCase();
          return <SearchListItem key={Math.random()}>{poke.name}</SearchListItem>
        })}
    </ul>
)

export default SearchList;