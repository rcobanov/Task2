import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import MovieRows from '../MovieRows';

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
    
  return (
    <>
      <div>
        <label> Filters  
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
            <MovieRows date={date}  screenings={screenings}  filteredMovies={filteredMovies} />
          </tbody>
        </Table>
        </div>
      ))}
    </>
  );
}
