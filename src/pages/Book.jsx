import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Book(props) {
  const movies = props.movies
  const screenings = props.screenings
  const categories = props.categories

  // put all dates in a set to only get unique screen dates
  const datesSet = new Set(screenings.map(screening => new Date(screening.time).toDateString()))
  const datesArray = [...datesSet]

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setFilteredMovies(movies.filter(movie => selectedCategory === 'All' || movie.description.categories.includes(selectedCategory)))
  }, [movies, selectedCategory]);

  const handleCategory = (event) => {
    console.log(event.target.value)
    setSelectedCategory(event.target.value)
  }

  function handleRowClick(screening) {
    console.log(screening.id)
    
  }
    
  return (
    <>
      <div>
        <label>
          <select value={selectedCategory} onChange={handleCategory}>
            <option key="All">All</option>
            {categories.map(category => <option key={category.id}>{category.title}</option>)}
          </select>
        </label>
      </div>
      {datesArray
        .filter(date => {
          const screeningsOnDate = screenings.filter(screening => new Date(screening.time).toDateString() === date);
          const moviesWithScreeningsOnDate = filteredMovies.filter(movie => screeningsOnDate.some(screening => screening.movieId === movie.id));
          return moviesWithScreeningsOnDate.length > 0;
        })
        .map(date => (
        <div key={date}>
          <h4>{date}</h4>  
          <Table striped bordered key={date}>
          <thead>
            <tr>
              <th>Titel</th>
              <th>Tid</th>
              <th>Längd(min)</th>
            </tr>
          </thead>
          <tbody>
            {screenings
              .filter(screening => new Date(screening.time).toDateString() === date)
              .filter(screening => {
                const movie = filteredMovies.find(movie => movie.id === screening.movieId)
                return movie;
              }) 
                .map(screening => {
                  const movie = filteredMovies.find(movie => movie.id === screening.movieId);
                  return (
                  <tr key={screening.id} onClick={() => handleRowClick(screening)}>
                    <td><img width="10%" height = "10%" src={'https://cinema-rest.nodehill.se' + movie.description.posterImage}></img> {movie.title}</td>
                    <td>{new Date(screening.time).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit'})}</td>
                    <td>{movie.description.length}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        </div>
      ))}
    </>
  );
}
