import { getDeck, drawCards } from './utils';
import Hand from "./Hand";

async function Table () {
 const deck = await getDeck();
 const cards = await drawCards(deck.deck_id, 2);

 return (
  <div className="Table">
    <Hand cards={cards} />
  </div>
 )
}

export default Table;
