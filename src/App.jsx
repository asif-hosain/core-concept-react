import { useState } from 'react'
import './App.css'
import Posts from './Posts'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concept</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
