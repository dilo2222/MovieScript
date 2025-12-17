import { useState } from 'react'
import './App.css'
import {MovieList} from "./MovieList"

function App() {

  const [showText, setShowText] = useState(false)

  const handleBtn = () => {
    setShowText(true)
  }

  return (
    <div>
      <button onClick={handleBtn}>Add a Movie</button>

      {showText && <MovieList/>}
      
    </div>
  )
}

export default App
