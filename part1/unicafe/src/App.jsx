import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, title}) => {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad);
  const positive = good / (good + neutral + bad) * 100;
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <StatisticLine title="Good" value={good} />
      <StatisticLine title="Neutral" value={neutral} />
      <StatisticLine title="Bad" value={bad} />
      <StatisticLine title="All" value={good + neutral + bad} />
      <StatisticLine title="Average" value={average} />
      <StatisticLine title="Positive" value={positive + " %"} />
    </div>
  )
}

const StatisticLine = ({title, value}) => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App