import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SelectSeats(props) {
  const {screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets} = useParams();
  const auditoriumSeats = props.auditoriumSeats
  let numberOfRows;

  const screeningAuditoriumSeats = auditoriumSeats.filter(seat => seat.auditoriumId === parseInt(auditoriumId))
  if (parseInt(auditoriumId) === 1) numberOfRows = 9;
  if (parseInt(auditoriumId) === 2) numberOfRows = 6;


  //const [twoDArray, setTwoDArray] = useState([]);
   const twoDArray = create2DArray();
  //setTwoDArray(create2DArray());
  
  function create2DArray() {
    let twoDArray = [];
    let tmpArray = [];
    for (let i = 1; i < numberOfRows; i++){
      tmpArray = [];
      for (let y = 1; y < 10; y++){
        const seat = screeningAuditoriumSeats.find(row => row.rowNumber === i)
        if(typeof seat !== 'undefined') tmpArray.push(seat)
      }
      twoDArray.push(tmpArray);
    }
    console.log(twoDArray);
    return twoDArray;
  }

//{screeningAuditoriumSeats.map(seat => <p>{seat.seatNumber}</p>)}
//      

  return (
  
    <>
      <h1>Select Seats</h1>
      <p>{console.log(twoDArray)}</p>

      

    </>
  )
}