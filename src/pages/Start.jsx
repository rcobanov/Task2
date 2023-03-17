import { Table, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import MovieCards from '../MovieCards';

export default function Start(props) {
  const movies = props.movies;
  const screenings = props.screenings;

  return (
    <>
      <h1>Välkommen till Feature Flicks!</h1>
        <Row>
          <p>Bästa bion i byn! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sint, impedit aut nisi nam qui soluta porro quasi voluptate voluptas expedita accusamus officiis ab molestiae. Voluptatem voluptate cumque repellendus exercitationem.
              Ea ipsum ipsa dolorem esse est facere sequi a natus, exercitationem repellat quae inventore excepturi deserunt accusantium ad quia facilis quod sed. Suscipit, corrupti sed. Quia veritatis eligendi debitis earum.
              Ipsam corrupti temporibus voluptatem aut ipsa nesciunt nulla iure a!
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
