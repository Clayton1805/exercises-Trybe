import React from 'react';
import PokemonDescription from './pokemonDescription';
import Pokemons from './data'

class Pokedex extends React.Component {  
  constructor() {
    super()
    this.states = this.states.bind(this)
    this.state = {
      index: 0,      
    }
  }
  states() {
    if (this.state.index < Pokemons.length - 1) {
      this.setState((estadoAnterior, _props) => ({
        index: estadoAnterior.index + 1,
      }));
    } else {
      this.setState({ index: 0 });
    }
  }
  render() {
    // console.log(this);
    return (
      <div>
        <h1>Pokedex</h1><br />
        <button onClick={this.states}>Proximo pokemon</button>
        <div className="pokedex">
          <PokemonDescription index={this.state.index} />
        {/* {Pokemons.map((pokemon, index) => {
          const { name, type, averageWeight, image } = pokemon;
          const { value, measurementUnit } = averageWeight;
          return <PokemonDescription key={index} name={name} type={type} weight={`Average weight: ${value} ${measurementUnit}`} image={image} />
        })} */}
        </div>
      </div>
    );
  }
}

export default Pokedex;
