import React from "react";

const Ppokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div> Paginação :</div>
      </div>
      {loading ? ( 
        <div>carregando</div>
     ): (
      <div className="pokedex-grid"> </div>) }
    </div>
  );
};

export default Ppokedex;
