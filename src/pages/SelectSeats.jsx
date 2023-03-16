import { useParams, useNavigate } from 'react-router-dom';

export default function SelectSeats(props) {
  const {screeningid, auditoriumId, adultTickets, seniorTickets, childrenTickets} = useParams();
  const auditoriumSeats = props.auditoriumSeats

  console.log(props)

  return (
  
    <>
      

    </>
  )
}