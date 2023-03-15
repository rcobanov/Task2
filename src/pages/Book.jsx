import { Table } from 'react-bootstrap';

export default function Book(props) {
  const movies = props.movies
  const screenings = props.screenings

  // put all dates in a set to only get unique screen dates
  const datesSet = new Set(screenings.map(screening => new Date(screening.time).toDateString()))
  const datesArray = [...datesSet]
    
  return (
    <>
      {datesArray.map(date => (
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
              .map(screening => {
                const movie = movies.find(movie => movie.id === screening.movieId);
                return (
                  <tr key={screening.id}>
                    <td><img width="10%" height = "10%" src={'https://cinema-rest.nodehill.se' + movie.description.posterImage}></img> {movie.title}</td>
                    <td>{new Date(screening.time).toLocaleTimeString('sv-SE', { hour12: false })}</td>
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
