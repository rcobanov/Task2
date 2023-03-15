import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigationbar from "./Navigationbar"
import Start from './pages/Start'
import Book from './pages/Book'
import About from './pages/About'
import Page404 from './pages/Page404'

export default function App() {

  const [movies, setMovies] = useState([]);
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(result => result.json())
      .then(data => setMovies(data))
      .catch(error=> console.error((error)))
  })


  useEffect(() => {
    fetch('/api/screenings')
      .then(result => result.json())
      .then(data => setScreenings(data))
      .catch(error=> console.error((error)))
  })



  return (
    <>
      <Routes>
        <Route path="/" element={<Start movies={movies} screenings={screenings} />} />
        <Route path="/book" element={<Book movies={movies} screenings={screenings}  />} />
        <Route path="/about" element={<About />} />
        {/* Add a 404 page last using path='*' */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>)
}
