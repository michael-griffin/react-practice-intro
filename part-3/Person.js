function Person ({ name, age, hobbies }) {

  return(
    <div>
      <p>Learn some information about {name}</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <ul>
        {hobbies.map(h => <li>{h}</li>)}
      </ul>
    </div>
  );
}
