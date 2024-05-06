const Filtration = (props) => {
  return (
    <><h1>{props.header}</h1>
      filter shown with<input onChange={props.handleChange} />
    </>
  )
}

export default Filtration
