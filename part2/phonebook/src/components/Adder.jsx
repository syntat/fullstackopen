const Adder = (props) => {
  return (
    <>
    <form onSubmit={props.handleSubmit}>
    <h1>{props.header}</h1>
    <p>name: <input value={props.nameValue} onChange={props.nameChange} /><br/>
    number: <input value={props.numberValue} onChange={props.numberChange} /><br/></p>
    <button type="submit">add</button>
    </form>
    </>
  )
}

export default Adder
