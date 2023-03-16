import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigationbar from "./Navigationbar"
import Start from './pages/Start'
import Book from './pages/Book'
import About from './pages/About'
import Page404 from './pages/Page404'
import SelectSeats from './pages/SelectSeats'
import SelectTickets from './pages/SelectTickets'

export default function App() {

  const [movies, setMovies] = useState([]);
  const [screenings, setScreenings] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(result => result.json())
      .then(data => setMovies(data))
      .then(console.log("Running"))
      .catch(error=> console.error((error)))
  }, [])


  useEffect(() => {
    fetch('/api/screenings')
      .then(result => result.json())
      .then(data => setScreenings(data))
      .catch(error=> console.error((error)))
  }, [])

  useEffect(() => {
    fetch('/api/categories')
    .then(result => result.json())
    .then(data => setCategories(data))
    .catch(error=> console.error((error)))
  }, [])



  return (
    <>
      <Routes>
        <Route path="/" element={<Start movies={movies} screenings={screenings} />} />
        <Route path="/book" element={<Book movies={movies} screenings={screenings} categories={categories}  />} />
        <Route path="/about" element={<About />} />
        <Route path="/selectseats/:screeningid/:auditoriumId/:adultTickets/:seniorTickets/:childrenTickets" element={<SelectSeats />} />
        <Route path="/selecttickets/:screeningid/:auditoriumId" element={<SelectTickets movies={movies} screenings={screenings} />}/>
        {/* Add a 404 page last using path='*' */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>)
}
