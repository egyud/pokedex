import React from 'react';
import { Link } from 'react-router-dom';
import SearchListItem from './SearchListItem';
import classes from './SearchList.module.css';

const SearchList = ({pokemon}) => (
    <ul className={classes.SearchList}>
        {pokemon.map(poke => {
          poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);
          return (
            <Link 
                key={poke.name + Math.random()} 
                to={`/details/${poke.name}`}
                id={poke.name} >
                <SearchListItem>{poke.name}</SearchListItem>  
            </Link>
          )
        })}
    </ul>
)

export default SearchList;