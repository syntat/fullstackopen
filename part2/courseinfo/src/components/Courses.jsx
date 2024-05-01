const Header = ({ course }) => <h1>{course}</h1>

const Total = ({parts}) => <p><b>total of {parts.reduce((acc, currValue) => acc + currValue.exercises, 0)} exercises</b></p>

const Course = ({parts, header}) => {
    return (<>
    <Header course = {header}/>
    {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    <Total parts = {parts}/>
    </>
    )
}

const Courses = ({courses}) => {
    return (
        <>
        {courses.map(course => <Course key={course.id} parts={course.parts} header={course.name}/>)}
        </>
    )
}

export default Courses
