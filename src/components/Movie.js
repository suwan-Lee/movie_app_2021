// movie를 render할 것이다.
import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './movie.css';
// year, title ...들은 porps이다 .
function Movie({id, year, title, summary, background_image, genres}){
  return (
    <Link to = {{pathname:`/movie/${id}`,
    state : {
      year,
      title,
      summary,
      background_image,
      genres
    }
    }}>
  <div className="movie">
    <img src={background_image} alt={title} title={title}/>
    <div className="movie__data">
    <h3 className="movie__title">{title}</h3>
    <h5 className="movie__year">{year}</h5>
    <ul className="genres">{genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>))}</ul>
    <p className="movie__summary">{summary.slice(0, 180)}...</p>
    </div>
  </div>
    </Link>
  );
}
// map의 각각의 item은 key가 필요하다!!
Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
// 이것들이 props들

export default Movie;

// 언더바를 두번 준것은 father__child이다.