import React from 'react';
import pokemons from './data';

class PokemonDetails extends React.Component {
  render() {
    const { match: {params} } = this.props;
    const { id } = params;

    const find = pokemons.find((pok) => (pok.id === Number(id)));
    const {name, type, averageWeight, summary, foundAt} = find;
    console.log(find);
    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>{summary}</p>
        {foundAt.map((local) => (<img src={local.map} alt={local.location} />))}
      </div>
    );
  }
}

export default PokemonDetails;
