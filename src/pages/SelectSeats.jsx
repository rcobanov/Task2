import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SelectSeats.css';

export default function SelectSeats(props) {
  const auditoriumSeats = props.auditoriumSeats
  const location = useLocation();
  const { screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets } = location.state;

  const [numberOfRows, setNumberOfRows] = useState(0);

  const screeningAuditoriumSeats = auditoriumSeats.filter(seat => seat.auditoriumId === parseInt(auditoriumId))
  useEffect(() => {
    if (parseInt(auditoriumId) === 1) setNumberOfRows(9);
    if (parseInt(auditoriumId) === 2) setNumberOfRows(6);
  }, [])

  
  const [occupiedSeats, setOccupiedSeats] = useState('');

  useEffect(() => {
    fetch(`/api/occupied_seats?screeningid=${screeningid}}`)
      .then(result => result.json())
      .then(data => setOccupiedSeats(data))
      .catch(error=> console.error((error)))
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

  return (
  
    <>
      <h1>Select Seats</h1>
      <div className="seats">
      {twoDArray.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((seat, seatIndex) => (
            <div key={seatIndex} className={`seat ${occupiedSeats[0]?.occupiedSeats.includes(seat.seatNumber) ? 'occupied' : 'available' }`}>
              {seat.seatNumber}
            </div>
          ))}
        </div>
      ))}
      </div>    
    </>
  )
}