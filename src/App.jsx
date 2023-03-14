import { useState, useEffect } from 'react'
import './App.css'
import Navigationbar from "./Navigationbar"

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
      <Navigationbar />
      <p>Number of movies in db: {movieLength}</p>
    </>)
}

export default App
