import React from 'react';
import PokemonDescription from './pokemonDescription';
import Pokemons from './data'

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="pokedex">
        {Pokemons.map((pokemon, index) => {
          const { name, type, averageWeight, image } = pokemon;
          const { value, measurementUnit } = averageWeight;
          return <PokemonDescription key={index} name={name} type={type} weight={`Average weight: ${value} ${measurementUnit}`} image={image} />
        })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
