import { useState } from 'react'
import './App.css'
import DigitalClock1 from './components/DigitalClock1'
import DigitalClock3 from './components/DigitalClock3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <DigitalClock /> */}
      <DigitalClock1 />
      {/* <DigitalClock3 /> */}
    </>
  )
}

export default App
