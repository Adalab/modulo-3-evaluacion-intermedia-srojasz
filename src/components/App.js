import React from 'react';
import data from "../data/data.json";
import css from "../stylesheets/app.css";
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
      <React.Fragment>
        <h1 className="main-title">Mi lista de Pokemon</h1>
        <div className="container">
          <PokeList>
            {this.state.pokemons.map((pokemon, key) => {
              return <Pokemon
                key={key}
                pokemon={pokemon}

              />

            })}
          </PokeList>

        </div>

      </React.Fragment>
    );
  }
}

export default App;
