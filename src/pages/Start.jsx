import { Row } from 'react-bootstrap';
import MovieCards from '../components/MovieCards';

export default function Start(props) {
  const movies = props.movies;
  const screenings = props.screenings;

  return (
    <>
      <h1>Välkommen till Feature Flicks!</h1>
        <Row>
        <p>Vårt mål är att skapa en bekväm och avkopplande miljö för dig att avnjuta en film i. Välkommen in i våra moderna salonger med den senaste ljud- och bildtekniken och låt dig slukas utav förstklassig filmupplevelse. På Feature Flicks så har vi också en kiosk där du kan köpa popcorn, läsk och andra snacks för att göra din bioupplevelse ännu mer komplett. Varmt välkommen att boka din upplevelse via vår bokningssida!
          </p>
        </Row>
      <h3>Aktuella filmer</h3>
      <Row>
        {movies.map(movie => (
          <MovieCards key={movie.id} movie={movie} screenings={screenings} /> ))}
      </Row>
    </>
  );
}
