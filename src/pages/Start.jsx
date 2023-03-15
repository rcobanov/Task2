import { Table, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

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
          <Col sm={6} md={6} lg={5} key={movie.id} className="mb-4">
            <Card>
              <Card.Img variant="top" style={{ height: '400px' }} src={'https://cinema-rest.nodehill.se' + movie.description.posterImage} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Längd: {movie.description.length} min</Card.Text>
                <Card.Text>Kategori: {movie.description.categories.join(', ')}</Card.Text>
                <ListGroup>
                  <ListGroupItem className="bg-dark text-light">Tider:</ListGroupItem>
                  {screenings
                        .filter(screening => screening.movieId === movie.id)
                        .map(screening => (
                          <ListGroupItem key={screening.id}>{new Date(screening.time).toLocaleString()}</ListGroupItem>
                        ))}
                  </ListGroup>
              </Card.Body>
            </Card>
          </Col>
              ))}
      </Row>
    </>
  );
}
