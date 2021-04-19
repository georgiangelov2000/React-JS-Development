import React from "react";
import Movie from "./Movie";
import styled from 'styled-components'

const MovieUl=styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MovieList = (props) => {
  return (
    <MovieUl>
      {props.movies.map((movie) => (
        <Movie key={movie.id}
          title={movie.title}
          openingText={movie.openingText}
          releaseDate={movie.release}
        />
      ))}
    </MovieUl>
  );
};

export default MovieList