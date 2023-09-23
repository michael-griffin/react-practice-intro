import Card from "./Card";

function Hand({ cards }) {


  const value = cards.reduce((accum, curr) => accum + curr.value, 0);

  return (
    <div className="Hand">
      <div className="Hand-card-area">
        {cards.map(card => <Card {...card} />)}
      </div>
      <h3>{value}</h3>
      {value === 21 && <h1>BLACKJACK!</h1>}
    </div>
  );
}

export default Hand;
