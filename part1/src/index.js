import React from 'react'
import { createRoot } from 'react-dom/client'


const Header = (props) => {
  return (
    <>
      <h1>Course name:{props.title}</h1>
    </>
  )

}
const Content = (props) => {
  return (
    <>
      <p>The course has two parts:   {props.parts1}  , {props.parts2} and  {props.parts3} and also you need to complete: {props.exercise1} , {props.exercise2} and {props.exercise3} exercises</p>
    </>
  )

}
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )


}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header title={course} />
      <Content parts1={part1} parts2={part2} parts3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total total={total} />
    </div >
  )
}


createRoot(document.getElementById('root')).render(<App />)