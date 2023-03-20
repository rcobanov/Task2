export default function TicketInfo(props) {
  const { movietitle, screeningtime } = props;

  return (
    <>
      <h2>Välj dina biljetter:</h2>
      <div>
        <p>Film: {movietitle}<br/>Datum: {new Date(screeningtime).toLocaleDateString('sv-SE', { hour: '2-digit', minute: '2-digit'})}</p>
      </div>
      
    </>
  )
}