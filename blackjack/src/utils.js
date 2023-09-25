const CARD_API_URL = "https://deckofcardsapi.com/api/deck"

async function getDeck() {
  const response = await fetch (`${CARD_API_URL}/new/shuffle/`);
  const deck = response.json();

  return deck;
}

async function drawCards(deckId, numCards) {
  const response = await fetch (`${CARD_API_URL}/${deckId}/draw/?count=${numCards}`);
  const cards = response.json();

  return cards.cards;
}

export { getDeck, drawCards };
