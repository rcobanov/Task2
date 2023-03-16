import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';


export default function SelectTickets(props) {
  const screenings = props.screenings
  const movies = props.movies
  const { screeningid, auditoriumId } = useParams();
  const navigate = useNavigate();

  const numberofTickets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
  //const [screening, setScreening] = useState({});
  const [adultTickets, setAdultTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);
  const [childrenTickets, setChildrenTickets] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)

  const screening = screenings.find(screening => screening.id === parseInt(screeningid));
  const movie = movies.find(movie => screening.movieId === movie.id);

  function handleAdultTickets(event) {
    setAdultTickets(event.target.value)
  }

  function handleSeniorTickets(event) {
    setSeniorTickets(event.target.value)
  }

  function handleChildrenTickets(event) {
    setChildrenTickets(event.target.value)
  }
  
  function selectSeats() {
    navigate(`/selectseats/${screeningid}/${auditoriumId}/${adultTickets}/${seniorTickets}/${childrenTickets}`);
  }

  //den här useEffecten skall uppdatera en total kostnad när något ändras
  useEffect(() => {
    
    setTotalPrice(adultTickets * 110 + seniorTickets * 85 + childrenTickets * 75 );
  }, [adultTickets, seniorTickets, childrenTickets])

  return (
    <>
      <h2>Select your tickets:</h2>
      <div>
        <p>Movie: {movie.title}</p>
        <p>Date: {new Date(screening.time).toLocaleDateString}</p>
      </div>
      
      <div style={{ paddingBottom: '10px' }}>
        <h3>Number of tickets:</h3>
        <label> Adults: 
          <select onChange={handleAdultTickets} >
            {numberofTickets.map(number => (
              (<option key={number}>{number}</option>
              )
            ))}
          </select>
        </label>
      </div>
      <div style={{ paddingBottom: '10px'}}>
        <label> Senior: 
          <select onChange={handleSeniorTickets} >
            {numberofTickets.map(number => (
              (<option key={number}>{number}</option>
              )
            ))}
          </select>
        </label>
      </div>
      <div style={{ paddingBottom: '10px'}}>
        <label> Children: 
          <select onChange={handleChildrenTickets}>
            {numberofTickets.map(number => (
              (<option key={number}>{number}</option>
              )
            ))}
          </select>
        </label>
      </div>

      <div>
        <h4>Detaljer</h4>
        <p>Total kostnad: {totalPrice} kr </p>
      <Button variant="primary" onClick={() => selectSeats()}> Välj Stolar </Button>
      </div>
      
    </>
  )
}