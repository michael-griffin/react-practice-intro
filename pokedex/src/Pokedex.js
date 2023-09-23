import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Component for Pokedex -- contains Pokecards */

function Pokedex({ hand, isWinner }) {
  return (
    <>
      <div className="Pokedex">
        {hand.map(entry => <Pokecard {...entry} />)}
      </div>
      {isWinner && <h1 className="Pokedex-win-msg">THIS HAND WINS!</h1>}
    </>

  );
}

export default Pokedex;
