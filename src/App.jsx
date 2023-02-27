import { useState } from 'react'
import Colloquiums from './components/Colloquiums'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='header'> 📣 Colloquium Notice 📣</h1>
      <h3>Williams College</h3>
      <h4 className='subheader'>Hi! Welcome to the colloquiums page, where you will find
        all the information about the different colloquiums happening around campus
      </h4>
      <Colloquiums/>
    </div>
  )
}

export default App
