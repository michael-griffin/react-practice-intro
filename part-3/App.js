const p1 = { name: "Noah", age: 100000000, hobbies: ["rock climbing", "extreme gaming"]};
const p2 = { name: "Michael", age: 21, hobbies: ["gaming", "reading", "cooking", "extreme gaming"]};
const p3 = { name: "Colt Steele", age: 17, hobbies: ["code master", "cat"]};

function App() {
  return (
    <div>
      <Person {...p1} />
      <Person {...p2} />
      <Person {...p3} />
    </div>
  )
}
