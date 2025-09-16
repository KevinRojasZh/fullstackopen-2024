import { useState } from 'react'
import './styles/App.css'
import Course from './components/Course'

function App() {
  const course = [ 
    {
    id: 1,
    name: 'Half Stack application development',
    parts:[
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]},
      {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    
  ]

  return (
    <>
    {
        course.map(courses => {
          return <Course key={courses.id} courses={courses}/>
        })
      }
    </>
  )
}

export default App
