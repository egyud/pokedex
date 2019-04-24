import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SearchPage from '../SearchPage/SearchPage';
import DetailPage from '../Details/DetailPage';
import classes from './Pokedex.module.css';

class Pokedex extends Component {
  state = {
    searchInput: '',
    pokemonList: [],
    selectedPokemon: ''
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
      .then(res => {
        this.setState({pokemonList: res.data.results})
        console.log(res.data.results)
      })
  }

  searchInputHandler = (e) => {
    e.persist();
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  }

  filterMatches() {
    return this.state.pokemonList.filter(pokemon => {
      const regex = new RegExp(this.state.searchInput, 'gi');
      return pokemon.name.match(regex);
    })
  }

  selectPokemonHandler = (e) => {
    e.persist();
    e.preventDefault();
    console.log('clicked')
    console.log(e.target.id)
  }

  render() {
    let pokemonArray = [];
    if (this.state.searchInput.length > 0) {
      pokemonArray = this.filterMatches();
    }
    return (
      <BrowserRouter>
        <div className={classes.Pokedex}>
          <Route 
            path="/" exact
            render={() => <SearchPage 
              input={this.searchInputHandler}
              search={this.searchByName}
              pokemon={pokemonArray}/>}
              click={this.selectPokemonHandler}></Route>
          <Route path="/details/:name" render={(props) => <DetailPage {...props}/>}></Route>
        </div>
      </BrowserRouter>
    )
  }

}

export default Pokedex;