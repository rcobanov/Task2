export default function SelectTicketTypes(props) {
  const { numberofTickets, handleAdultTickets, handleSeniorTickets, handleChildrenTickets } = props;

  return (
    <>
      <div style={{ paddingBottom: '10px' }}>
        <h3>Antal biljetter:</h3>
        <label> Vuxna: 
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
        <label> Barn: 
          <select onChange={handleChildrenTickets}>
            {numberofTickets.map(number => (
              (<option key={number}>{number}</option>
              )
            ))}
          </select>
        </label>
      </div>
    </>
  )
}