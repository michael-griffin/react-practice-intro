import Hand from "./Hand";

function Table ({ cards }) {

 return (
  <div className="Table">
    <Hand cards={cards} />
  </div>
 )
}

export default Table;
