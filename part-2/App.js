function App(){
  const tweets = [
    {'name': 'Michael', date: 'now', message: 'test message1'},
    {'name': 'Noah', date: 'then', message: 'test message2'},
    {'name': 'Michael', date: 'now', message: 'test message3'},
  ]
  return (
    <div>
      <h1>Test header</h1>
      <Tweet {...tweets[0]} />
      <Tweet name={tweets[1].name} date={tweets[1].date} message={tweets[1].message} />
      <Tweet name={tweets[2].name} date={tweets[2].date} message={tweets[2].message} />
    </div>
  )
}