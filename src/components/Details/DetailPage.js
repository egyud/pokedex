import React, { Component } from 'react';
import axios from 'axios';


class DetailPage extends Component {
  state = {
    pokemon: ''
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({pokemon: params.name})
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