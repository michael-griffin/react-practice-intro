function Tweet({name, date, message}){
  return (
    <p className="tweet">{name} said {message} at time {date}</p>
  )
}