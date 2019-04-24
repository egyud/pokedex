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
    return (
      <>
        <div>{this.state.pokemon}</div>
      </>
    )
  }
}

export default DetailPage;