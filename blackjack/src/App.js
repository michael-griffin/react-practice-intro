import './App.css';
import Table from "./Table"
import { getDeck, drawCards } from './utils';
import {useState, useEffect} from "react"


function App() {

  const [cards, setCards] = useState([]);

  async function fetchDeckAndCards(){
    const deck = await getDeck();
    const newCards = await drawCards(deck.deck_id, 2);

    setCards(cards => {
      return newCards;
    })
  }

  useEffect( () => {
    fetchDeckAndCards();
  }, [])


  return (
   <Table cards={cards} />
  );
}

export default App;
