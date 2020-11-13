import React from 'react';
import Pokemons from './data'

class PokemonDescription extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
      
  //   }
  // }
  render() {
    console.log(this);
    const index = this.props.index
    const { name, type, averageWeight, image } = Pokemons[index];
    const { value, measurementUnit } = averageWeight;
    const weight = `Average weight: ${value} ${measurementUnit}`
    return (
      <div className="pokemon">
        <div className="pokemon-txt">
          <p>{name}</p>
          <p>{type}</p>
          <p>{weight}</p>
        </div>
        <div className="pokemon-img">
          <img src={image} />
        </div>
      </div>
    );
  }
}

export default PokemonDescription;
