import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, title}) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

const StatisticScore = ({title, value}) => {
  return <div>{title} {value}</div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={() => setGood(good + 1)} title="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} title="Neutral" />
      <Button onClick={() => setBad(bad + 1)} title="Bad" />
      <Header text="Statistics" />
      <StatisticScore title="Good" value={good} />
      <StatisticScore title="Neutral" value={neutral} />
      <StatisticScore title="Bad" value={bad} />
      <StatisticScore title="All" value={good + neutral + bad} />
      <StatisticScore title="Average" value={((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)} />
      <StatisticScore title="Positive" value={good / (good + neutral + bad) * 100 + " %"} />
    </div>
  )
}

export default App