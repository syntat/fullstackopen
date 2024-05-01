import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] // there are 8 quotes that can be returned
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [mostvoted, setMostVotes] = useState(0) // tracks the index of the most voted quote

  const handleChange = () => {
    const newindex = randomInt(0, 8)
    setSelected(newindex)

  }

  const handleVote = () => {
    const newvotes = [...votes]
    newvotes[selected] += 1
    setVotes(newvotes)
    if (newvotes[selected] > newvotes[mostvoted]) { // if the quote being voted on now has more votes than
      setMostVotes(selected)                        // then it's changed to the index of the current quote
    }
  }

  const randomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br/>
      has {votes[selected]} votes <br/>
      <button onClick={handleVote}>
        vote</button>
      <button onClick={handleChange}>
        next anecdote
      </button><br/>

    <h2>Anecdote with most votes</h2>
    {anecdotes[mostvoted]}<br/>
    has {votes[mostvoted]} votes 
    </div>
    )
}

export default App
