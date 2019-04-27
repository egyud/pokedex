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
    selectedPokemon: '',
    currentPage: 1,
    pokemonPerPage: 15,
    displayIndex: true
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

  prevPageHandler = (e) => {
    e.persist();
    e.preventDefault();
    if (this.state.currentPage === 1) return;
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }))
  }

  nextPageHandler = (e) => {
    e.persist();
    e.preventDefault();
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }))
  }

  hideIndexHandler = (e) => {
    e.persist();
    e.preventDefault();
    this.setState({displayIndex: false})
  }

  render() {
    const { currentPage, pokemonPerPage, pokemonList, searchInput, displayIndex } = this.state;
    const indexOfLastPoke = currentPage * pokemonPerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokemonPerPage;
    const currentPokemonList = pokemonList.slice(indexOfFirstPoke, indexOfLastPoke);

    let pokemonArray = [];
    if (searchInput.length > 0 && !displayIndex) {
      pokemonArray = this.filterMatches();
    } else if (searchInput.length === 0 && !displayIndex){
      pokemonArray = currentPokemonList;
    }

    return (
      <BrowserRouter>
        <div className={classes.Pokedex}>
          <Route 
            path="/" exact
            render={() => <SearchPage 
              input={this.searchInputHandler}
              search={this.searchByName}
              pokemon={pokemonArray}
              next={this.nextPageHandler}
              prev={this.prevPageHandler}
              index={displayIndex}
              fullList={this.hideIndexHandler}
              />}
              ></Route>
          <Route path="/details/:name" render={(props) => <DetailPage {...props}/>}></Route>
        </div>
      </BrowserRouter>
    )
  }

}

export default Pokedex;