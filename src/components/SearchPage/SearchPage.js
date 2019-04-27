import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchList from './SearchList/SearchList';
import Index from '../Index/Index';
import NoResultsMsg from '../SearchPage/NoResultsMsg/NoResultsMsg';
import classes from './SearchPage.module.css';

const SearchPage = (props) => {
  let content;

  if (props.index) {
    content = <Index fullList={props.fullList}/>
  } else if (props.noResults) {
    content = <NoResultsMsg />
  } else {
    content = <SearchList pokemon={props.pokemon}/>
  }

  return (
    <div className={classes.SearchPage}>
      <SearchBar 
        handleInput={props.input} 
        search={props.search}/>
      <button onClick={props.prev}>Prev</button>
      <button onClick={props.next}>Next</button>
      {content}
    </div>
  )
}


export default SearchPage;