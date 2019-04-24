import React from 'react';
import classes from './DetailsTable.module.css';

const DetailsTable = ({pokeData}) => (
  <table className={classes.DetailsTable}>
    <tbody>
      <tr>
        <td className={classes.Category}>HP</td>
        <td>{pokeData.stats[5].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Attack</td>
        <td>{pokeData.stats[4].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Defense</td>
        <td>{pokeData.stats[3].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Speed</td>
        <td>{pokeData.stats[0].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Special Attack</td>
        <td>{pokeData.stats[2].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Special Defense</td>
        <td>{pokeData.stats[1].base_stat}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Height</td>
        <td>{pokeData.height}</td>
      </tr>
      <tr>
        <td className={classes.Category}>Weight</td>
        <td>{pokeData.weight}</td>
      </tr>
    </tbody>
  </table>
)

export default DetailsTable;