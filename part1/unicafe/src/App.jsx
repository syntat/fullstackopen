import { useState } from 'react'

const Button = ({handleFeedback, text}) => {
  return (
    <button onClick={handleFeedback}>
    {text}
    </button>
  )
}

const StatisticsLine = ({value, text}) => {
  if (text==='positive') {
    return <tr><td>{text} {value}%<br/></td></tr>
  }
  return (
    <tr><td>{text} {value}<br/></td></tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral
  let average = (props.good - props.bad) / total
  let positive = (props.good / total) * 100
  if (total === 0){ 
    return (
       <p>No feedback given</p>
    )
    }
  return (
    <table>
      <tbody>
    <StatisticsLine value = {props.good} text='good' />
    <StatisticsLine value = {props.neutral} text='neutral' />
    <StatisticsLine value = {props.bad} text='bad' />
    <StatisticsLine value={total} text='all'/>
    <StatisticsLine value = {average} text='average'/>
    <StatisticsLine value={positive} text='positive'/> 
    </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <Button handleFeedback={() => setGood(good+1)} text='good' />
      <Button handleFeedback={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleFeedback={() => setBad(bad+1)} text='bad' />
      <br />
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App
