import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TicketDetails from '../TicketDetails';
import SelectTicketTypes from '../SelectTicketTypes';
import TicketInfo from '../TicketInfo';


export default function SelectTickets(props) {
  const screenings = props.screenings
  const movies = props.movies
  //const { screeningid, auditoriumId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const screeningid = location.state.screenid;
  const auditoriumId = location.state.auditoriumId;

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
    navigate(`/selectseats`, { state: { screeningid: screeningid, auditoriumId: auditoriumId, adultTickets: adultTickets, seniorTickets: seniorTickets, childrenTickets: childrenTickets, movieTitle: movie.title, screeningtime: screening.time } },)
  }

  // update totalcost when any of the ticket types are changed
  useEffect(() => {
    setTotalPrice(adultTickets * 110 + seniorTickets * 85 + childrenTickets * 75 );
  }, [adultTickets, seniorTickets, childrenTickets])

  return (
    <>
      <TicketInfo movietitle={movie.title} screeningtime={screening.time} />
      <SelectTicketTypes numberofTickets={numberofTickets} handleAdultTickets={handleAdultTickets} handleSeniorTickets={handleSeniorTickets}  handleChildrenTickets={handleChildrenTickets} />
      <TicketDetails totalPrice={totalPrice} selectSeats={selectSeats} />
    </>
  )
}