import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [movieLength, setMovieLength] = useState(0);


  useEffect(() => {
    fetch('/api/movies')
      .then(result => result.json())
      .then(data => setMovieLength(data.length))
      .catch(error=> console.error((error)))
  })



  return (
    <>
      <p>Number of movies in db: {movieLength}</p>
    </>)
}

export default App
