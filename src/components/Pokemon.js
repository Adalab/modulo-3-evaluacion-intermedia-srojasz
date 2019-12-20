import React from 'react';

function Pokemon(props) {

  const img = props.pokemon.url;
  const name = props.pokemon.name;
  const types = props.pokemon.types;

  return (
    <React.Fragment>
      <li>
        <img src={img}></img>
        <h2>{name}</h2>
        <ul>
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