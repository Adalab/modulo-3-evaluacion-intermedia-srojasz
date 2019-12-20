import React from 'react';
import data from "../data/data.json";
import Pokemon from "./Pokemon";
import PokeList from './PokeList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: data
    };
  }

  render() {
    return (
      <div>

        <PokeList>
          {this.state.pokemons.map((pokemon, key) => {
            return <Pokemon
              key={key}
              pokemon={pokemon}

            />

          })}
        </PokeList>

      </div>


    );
  }
}

export default App;
