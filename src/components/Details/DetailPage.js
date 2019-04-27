import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DetailsTable from './DetailsTable/DetailsTable';
import classes from './DetailPage.module.css';


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
          <div className={classes.TypeWrapper}>
            {poke.types.map(type => {
              return <span>{type.type.name}</span>
            })}
          </div>
          <DetailsTable pokeData={poke}/>
        </>
    }
    return (
      <div className={classes.DetailPage}>
        <div className={classes.HeaderWrapper}>
          <Link to="/" className={classes.BackBtn}>
            <Button variant="outline-primary">&#8592; Back</Button>
          </Link>
          <h1>{this.state.pokemon}</h1>
        </div>

        {table}
      </div>
    )
  }
}

export default DetailPage;