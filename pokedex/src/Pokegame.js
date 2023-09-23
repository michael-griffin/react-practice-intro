import Pokedex from "./Pokedex"
import _ from "lodash"

const defaultList = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
];

function Pokegame({pokeList = defaultList}){
  const shuffledList = _.shuffle(pokeList);

  const half = Math.floor(pokeList.length/2);

  const handOne = shuffledList.slice(0, half);
  const handTwo = shuffledList.slice(half);

  const oneWins = getWinner(handOne, handTwo);

  return (
    <div>
      <Pokedex hand={handOne} isWinner={oneWins} />
      <Pokedex hand={handTwo} isWinner={!oneWins} />
    </div>
  )
}

function getWinner(handOne, handTwo){
  const totalOne = handOne.reduce((accum, curr) => {
    return accum + curr.base_experience;
  }, 0);

  const totalTwo = handTwo.reduce((accum, curr) => {
    return accum + curr.base_experience;
  }, 0);

  return totalOne > totalTwo;
}

export default Pokegame;