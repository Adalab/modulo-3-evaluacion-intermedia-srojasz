import React from 'react';


function PokeList(props) {
  return <div>
    <ul className="pokemon__list">
      {props.children}
    </ul>
  </div>
}

export default PokeList;