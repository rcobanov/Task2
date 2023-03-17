import { Table, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function MovieCards(props) {
  const movie = props.movie;
  const screenings = props.screenings
  
  return (
    <>
      
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
    </>
  )
}