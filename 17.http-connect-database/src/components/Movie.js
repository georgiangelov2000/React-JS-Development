import React from "react";
import styled from 'styled-components'

const Li=styled.li`
  margin: 1rem;
  padding: 1rem;
  background-color: #230052;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  text-align: center;
  color: white;

.movie h2 {
  font-size: 2rem;
  color: #f7e702;
}

.movie h3 {
  color: #eccf77;
  margin: 0;
  font-size: 1rem;
}
`

const H2=styled.h2`
  font-size: 2rem;
  color: #f7e702;
`
const H3=styled.h3`
color: #eccf77;
margin: 0;
font-size: 1rem;
`

const Movie = (props) => {
  return (
    <Li>
      <H2>{props.title}</H2>
      <H3>{props.releaseDate}</H3>
      <p>{props.openingText}</p>
    </Li>
  );
};

export default Movie;