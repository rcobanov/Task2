import { useParams } from 'react-router-dom';


export default function SelectTickets(props) {
  const { screeningid } = useParams();
  const movies = props.movies
  const screenings = props.screenings

  return (
    <>
      <h1>Select your tickets for screening id {screeningid}:</h1>
    </>
  )
}