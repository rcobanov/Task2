import { useLocation } from 'react-router-dom';

export default function Receipt() {
  const location = useLocation();
  const { screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets, bookSeats,  movieTitle, screeningtime } = location.state;

  
  return (
    <>
      <h1>Ditt kvitto</h1>
      <p>Film: {movieTitle}</p>
      <p>Datum: {new Date(screeningtime).toLocaleString()}</p>
      <p>Dina platser: {bookSeats.join(', ')} </p>
      <p>{adultTickets * 110 + seniorTickets * 85 + childrenTickets * 75}kr betalas i kassan.</p>
    </>
  )
}