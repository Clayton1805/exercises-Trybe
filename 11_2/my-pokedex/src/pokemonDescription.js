import React from 'react';

class PokemonDescription extends React.Component {
  render() {
    const { name, type, weight, image } = this.props;
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
