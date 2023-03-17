import { Button } from 'react-bootstrap';

export default function TicketDetails(props) {
  const { totalPrice, selectSeats } = props;

  return (
    <>
      
      <div>
        <h4>Detaljer</h4>
        <p>Total kostnad: {totalPrice} kr </p>
        <Button variant="primary" onClick={() => selectSeats()}> Välj Stolar </Button>
      </div>
    </>
  )
}