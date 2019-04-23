import React from 'react';
import classes from './SearchListItem.module.css';

const SearchListItem = (props) => (
  <li className={classes.SearchListItem}>{props.children}</li>
);

export default SearchListItem;