import React from 'react'
import { createRoot } from 'react-dom/client'


const Header = (props) => {
  return (
    <>
      <h1>Course name: {props.title}</h1>
    </>
  )

}
const Content = (props) => {
  return (
    <>
      <p>The course has three parts:
        <li>{props.parts1} with {props.exercise1} exercises </li> <li> {props.parts2} with {props.exercise2}exercises</li> <li>{props.parts3} with {props.exercise3} exercises </li> </p>
    </>
  )

}
const Total = (props) => {
  return (
    <>
      <p>Total number of exercises: {props.total}</p>
    </>
  )


}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const total = part1.exercises + part2.exercises + part3.exercises



  return (
    <div>
      <Header title={course} />
      <Content parts1={part1.name} parts2={part2.name} parts3={part3.name} exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
      <Total total={total} />
    </div >
  )
}


createRoot(document.getElementById('root')).render(<App />)