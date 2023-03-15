import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigationbar from "./Navigationbar"
import Start from './pages/Start'
import Book from './pages/Book'
import About from './pages/About'
import Page404 from './pages/Page404'

export default function App() {

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
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        {/* Add a 404 page last using path='*' */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <p>Number of movies in db: {movieLength}</p>
    </>)
}
