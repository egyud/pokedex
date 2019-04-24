import React, { Component } from 'react';
import axios from 'axios';
import DetailsTable from './DetailsTable/DetailsTable';


class DetailPage extends Component {
  state = {
    pokemon: '',
    data: {}
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({pokemon: params.name.toLowerCase()}, () => {
      this.retrievePokemonDetails();
    })
  }

  retrievePokemonDetails() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`)
      .then(res => this.setState({data: res.data}))
  }

  render() {
    let poke = this.state.data;
    let table = <p>Loading...</p>;
    if (this.state.data.stats !== undefined) {
      table = 
        <>
          <img src={poke.sprites.front_default}/>
          <div>
            {poke.types.map(type => {
              return <span>{type.type.name}</span>
            })}
          </div>
          <DetailsTable pokeData={poke}/>
        </>
    }
    return (
      <>
        <h1>{this.state.pokemon}</h1>
        <div>
          
        </div>
        {table}
      </>
    )
  }
}

export default DetailPage;