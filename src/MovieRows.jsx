import { useNavigate } from "react-router-dom";

export default function MovieRows(props) {
  const navigate = useNavigate();
  const { date, screenings, filteredMovies } = props;
  function handleRowClick(screening) {
    navigate(`/selecttickets`, { state: { screenid: screening.id, auditoriumId: screening.auditoriumId } },)
  }
  
  return (
    <>
        {screenings
      .filter(screening => new Date(screening.time).toDateString() === date)
      .filter(screening => {
        const movie = filteredMovies.find(movie => movie.id === screening.movieId)
        return movie;
      }) 
        .map(screening => {
          const movie = filteredMovies.find(movie => movie.id === screening.movieId);
          return (
          <tr key={screening.id} onClick={() => handleRowClick(screening)}>
            <td><img width="10%" height = "10%" src={'https://cinema-rest.nodehill.se' + movie.description.posterImage}></img> {movie.title}</td>
            <td>{new Date(screening.time).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit'})}</td>
            <td>{movie.description.length}</td>
          </tr>
        );
      })}
    </>
  )
}