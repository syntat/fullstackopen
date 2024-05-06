import { useState } from 'react'
import Filtration from './components/Filtration'
import PeopleRender from './components/PeopleRender'
import Adder from './components/Adder'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [nameFill, setName] = useState('')
  const [numberFill, setNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const nameChange = () => {
    setName(event.target.value)
  }  
  const numberChange = () => {
    setNumber(event.target.value)
  }
  const handleSubmit = () => {
    event.preventDefault()
    const newP = {
      name: nameFill,
      number: numberFill,
      id: persons.length + 1,
    }
    const modP = persons.concat(newP)
    setPersons(modP)
    setFilteredPersons(modP)
    setName('')
    setNumber('')
  }

  const filterChange = () => {
    setSearchName(event.target.value)
    const sn = event.target.value
    console.log(sn)
    sn === '' 
    ? setFilteredPersons(persons)
    : setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(sn.toLowerCase())))

  }

  return (
    <div>
      <Filtration header='Phonebook' handleChange={filterChange} />
      <Adder header='add a new' 
             nameValue = {nameFill} 
             numberValue = {numberFill} 
             nameChange={nameChange} 
             numberChange={numberChange} 
             handleSubmit={handleSubmit}/>
      <PeopleRender header = 'Numbers' people={filteredPersons} />  
    </div>
  )  
}

export default App
