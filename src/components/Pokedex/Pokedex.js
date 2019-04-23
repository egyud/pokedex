import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import SearchList from '../SearchList/SearchList';

class Pokedex extends Component {
  state = {
    searchInput: '',
    pokemonList: []
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

  render() {
    let pokemonArray = [];
    if (this.state.searchInput.length > 0) {
      pokemonArray = this.filterMatches();
    }
    return (
      <div>
        <SearchBar 
          handleInput={this.searchInputHandler} 
          search={this.searchByName}/>
        <SearchList 
          pokemon={pokemonArray}/>
      </div>
    )
  }

}

export default Pokedex;