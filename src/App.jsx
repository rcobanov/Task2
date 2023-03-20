import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigationbar from "./Navigationbar"
import Start from './pages/Start'
import Book from './pages/Book'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
import SelectSeats from './pages/SelectSeats'
import SelectTickets from './pages/SelectTickets'
import Receipt from './pages/Receipt'

export default function App() {

  const [movies, setMovies] = useState([]);
  const [screenings, setScreenings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [auditoriumSeats, setAuditoriumSeats] = useState([]);
  const [auditoriums, setAuditoriums] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(result => result.json())
      .then(data => setMovies(data))
      .catch(error=> console.error((error)))
  }, [])

  useEffect(() => {
    fetch('/api/seats')
      .then(result => result.json())
      .then(data => setAuditoriumSeats(data))
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

  useEffect(() => {
    fetch('/api/auditoriums')
    .then(result => result.json())
    .then(data => setAuditoriums(data))
    .catch(error=> console.error((error)))
  }, [])



  return (
    <>
      <Routes>
        <Route path="/" element={<Start movies={movies} screenings={screenings} />} />
        <Route path="/book" element={<Book movies={movies} screenings={screenings} categories={categories} auditoriums ={auditoriums} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/selectseats"  element={<SelectSeats auditoriumSeats={auditoriumSeats} />} />
        <Route path="/selecttickets" element={<SelectTickets movies={movies} screenings={screenings} />} />
        <Route path="/receipt"  element={<Receipt  />} />
        {/* Add a 404 page last using path='*' */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>)
}
