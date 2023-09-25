import Pokecard from "./Pokecard";
import "./Pokedex.css"

/** Component for Pokedex -- contains Pokecards */

function Pokedex ({ pokeList }) {
  return (
    <div className="Pokedex">
      {pokeList.map(entry => <Pokecard {...entry} />)}
    </div>
  );
}

export default Pokedex;
