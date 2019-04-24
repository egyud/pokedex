import React from 'react';

const DetailsTable = ({pokeData}) => (
  <table>
    <tbody>
      <tr>
        <td>HP</td>
        <td>{pokeData.stats[5].base_stat}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{pokeData.stats[4].base_stat}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td>{pokeData.stats[3].base_stat}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{pokeData.stats[0].base_stat}</td>
      </tr>
      <tr>
        <td>Special Attack</td>
        <td>{pokeData.stats[2].base_stat}</td>
      </tr>
      <tr>
        <td>Special Defense</td>
        <td>{pokeData.stats[1].base_stat}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{pokeData.height}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{pokeData.weight}</td>
      </tr>
    </tbody>
  </table>
)

export default DetailsTable;