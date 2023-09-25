import "./Pokecard.css"

const BASE_POKEMON_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/" +
"master/sprites/pokemon/" //${id}.png

/** Copmonent for Pokecard */

function Pokecard({ id, name, type, base_experience }){
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-header">{ name }</h1>
      <img src={`${BASE_POKEMON_URL}${id}.png`}/>
      <p>type {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
