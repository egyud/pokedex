import React from 'react';
import classes from './Index.module.css';

const Index = (props) => (
  <div className={classes.Index}>
    <h4>Greetings, welcome to your Pokedex</h4>
    <p>To get started, enter a name above in the search or <a href="" onClick={props.fullList}>click here </a>to view a full list of all known Pokemon in order.  Clicking on a name will load a page full of stats about that Pokemon.</p>
  </div>
)

export default Index;