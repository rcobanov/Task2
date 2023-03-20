import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function MovieRows(props) {
  const navigate = useNavigate();
  const { date, screenings, filteredMovies, auditoriums } = props;
  //const [auditoriums, setAuditoriums] = useState();
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
            <tr key={screening.id} style={{ cursor: 'pointer' }} onClick={() => handleRowClick(screening)}>
              <td><img style={{ height: "100px", objectFit: "cover", display: 'inline-block' }} src={'https://cinema-rest.nodehill.se' + movie.description.posterImage}></img> <ul style={{ display: 'inline-block', listStyleType: 'none' }} ><li>{movie.title}</li><li>{auditoriums.find(x => x.id === screening.auditoriumId).name}</li><li>{movie.description.length} min</li></ul></td>
            <td>{new Date(screening.time).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit'})}</td>
          </tr>
        );
      })}
    </>
  )
}