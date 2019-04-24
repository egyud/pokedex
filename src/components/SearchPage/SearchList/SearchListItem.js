import React from 'react';
import classes from './SearchListItem.module.css';

const SearchListItem = (props) => (
  <li className={classes.SearchListItem} id={props.children}>{props.children}</li>
);

export default SearchListItem;