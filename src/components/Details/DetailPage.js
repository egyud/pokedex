import React, { Component } from 'react';
import axios from 'axios';


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
          <div>
            {poke.types.map(type => {
              return <span>{type.type.name}</span>
            })}
          </div>
          <table>
            <tbody>
              <tr>
                <td>HP</td>
                <td>{poke.stats[5].base_stat}</td>
              </tr>
              <tr>
                <td>Attack</td>
                <td>{poke.stats[4].base_stat}</td>
              </tr>
              <tr>
                <td>Defense</td>
                <td>{poke.stats[3].base_stat}</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>{poke.stats[0].base_stat}</td>
              </tr>
              <tr>
                <td>Special Attack</td>
                <td>{poke.stats[2].base_stat}</td>
              </tr>
              <tr>
                <td>Special Defense</td>
                <td>{poke.stats[1].base_stat}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{poke.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{poke.weight}</td>
              </tr>
            </tbody>
          </table>
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