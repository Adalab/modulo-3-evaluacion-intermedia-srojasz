import React from 'react';


function Pokemon(props) {

  const img = props.pokemon.url;
  const name = props.pokemon.name;
  const types = props.pokemon.types;

  return (
    <React.Fragment>
      <li className="pokemon-card">
        <img src={img} alt={name} />
        <h2 class="pokemon-name">{name}</h2>
        <ul className="pokemon-types">

          {types.map((type, key) => {
            return <li
              key={key}
              type={type}

            >{type}</li>
          })}
        </ul>

      </li>
    </React.Fragment>
  );

}

export default Pokemon;