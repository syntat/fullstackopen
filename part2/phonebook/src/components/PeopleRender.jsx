import Person from './Person.jsx'
const PeopleRender = ({header, people}) => {
  const ans = people.map((per) => <Person key={per.id} name={per.name} number={per.number} />)
  return (
    <>
      <h1>{header}</h1>
      {ans}
    </>
 )
}
export default PeopleRender 
