import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Receipt() {
  const location = useLocation();
  const { screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets, bookSeats, movieTitle, screeningtime } = location.state;

  const [bookingNo, setBookingNo] = useState();
  const [auditorium, setAuditorium] = useState();

  useEffect(() => {
    setBookingNo(generateBookingNumber())
  }, [])
  
  function generateBookingNumber() {
    let no = '';
    while (no.length < 3) {
      no += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    }
    while (no.length < 6) {
      no += Math.floor(Math.random() * 10);
    }
    return no
  }

  useEffect(() => {
     fetch('/api/auditoriums')
      .then(result => result.json())
      .then(auditoriums => auditoriums.filter(x => x.id === auditoriumId))
    .then(data => setAuditorium(data[0].name))
      .catch(error=> console.error((error)))
  }, [])

  
  return (
    <>
      <h1>Tack för ditt köp!</h1>
      <h4>Här är ditt kvitto:</h4>
      <p><span style={{ fontWeight: 600}}> Bokningsnr: {bookingNo} </span> </p>
      <p>Film: {movieTitle}<br />
        Datum: {new Date(screeningtime).toLocaleString()}<br />
        Salong: {auditorium} <br/>Dina platser: {bookSeats.sort().join(', ')} </p>
      <p>{adultTickets * 110 + seniorTickets * 85 + childrenTickets * 75}kr betalas i kassan. <br/> Ange ditt bokningsnummer vid ankomst.</p>
    </>
  )
}