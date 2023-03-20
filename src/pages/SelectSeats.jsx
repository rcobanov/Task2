import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './SelectSeats.css';

export default function SelectSeats(props) {
  const auditoriumSeats = props.auditoriumSeats
  const location = useLocation();
  const navigate = useNavigate();
  const { screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets, movieTitle, screeningtime } = location.state;

  const [numberOfRows, setNumberOfRows] = useState(0);

  const screeningAuditoriumSeats = auditoriumSeats.filter(seat => seat.auditoriumId === parseInt(auditoriumId))
  useEffect(() => {
    if (parseInt(auditoriumId) === 1) setNumberOfRows(9);
    if (parseInt(auditoriumId) === 2) setNumberOfRows(6);
  }, [])

  const [bookSeats, setBookSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState('');

  useEffect(() => {
    (async () => {
      await fetch(`/api/occupied_seats?screeningid=${screeningid}}`)
      .then(result => result.json())
      .then(data => setOccupiedSeats(data))
      .catch(error=> console.error((error)))
      })()
  }, [])

  const twoDArray = create2DArray();

  function create2DArray() {
    let twoDArray = [];
    for (let i = 1; i <= numberOfRows; i++){
      const seats = screeningAuditoriumSeats.filter(x => x.rowNumber === i);
      twoDArray.push(seats);
    }
    return twoDArray;
  }

  function handleClick(seat) {    
    if (occupiedSeats[0].occupiedSeats.includes(seat)) {  
      return;
    }
    if (bookSeats.includes(seat) && (seat == Math.max(...bookSeats) ||(seat == Math.min(...bookSeats) ))) {
      setBookSeats(bookSeats.filter(x => x != seat));
      return;
    }
    if (bookSeats.length > 0 && !(bookSeats.includes(parseInt(seat)+1) || bookSeats.includes(parseInt(seat)-1))) {
      return;
    }
    if (parseInt(adultTickets) + parseInt(childrenTickets) + parseInt(seniorTickets) === bookSeats.length) {
      return;
    }
    setBookSeats(prevArray => [...prevArray, seat]);
  }

  function receipt() {
    if(bookSeats.length === parseInt(adultTickets) + parseInt(childrenTickets) + parseInt(seniorTickets))
    navigate(`/receipt`, { state: { screeningid: screeningid, auditoriumId: auditoriumId, adultTickets: adultTickets, seniorTickets: seniorTickets, childrenTickets: childrenTickets, bookSeats: bookSeats, movieTitle: movieTitle, screeningtime } },)
   }

  return (
  
    <>
      <h1>Välj stolar</h1>
      <p>{movieTitle}</p>
      <p>{new Date(screeningtime).toLocaleString()}</p>
      <div className="seats">
      {twoDArray.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((seat, seatIndex) => (
            <div key={seatIndex} onClick={() => handleClick(seat.seatNumber)} className={`seat ${bookSeats.includes(seat.seatNumber) ? 'booked' : (occupiedSeats[0]?.occupiedSeats.includes(seat.seatNumber) ? 'occupied' : 'available')}`}>
              {seat.seatNumber}
            </div>
          ))}
        </div>
      ))}
      </div>    
      <div>
        <br></br>
      <Button variant="primary" onClick={() => receipt()}> Bekräfta </Button>
      </div>

    </>
  )
}