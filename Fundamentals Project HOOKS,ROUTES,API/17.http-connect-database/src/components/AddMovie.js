import React, { useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: auto;
  width: 50%;
  text-align: center;
  background: grey;
  border-radius: 5px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    if (titleRef === "" || openingTextRef === "" || releaseDateRef === "") {
        return;
      }
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <input type="text" id="title" ref={titleRef} placeholder="Title" />
      </div>
      <div>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          placeholder="Description"
        />
      </div>
      <div>
        <input type="text" id="date" ref={releaseDateRef} placeholder="Date" />
      </div>
      <Button>Add Movie</Button>
    </Form>
  );
};
export default AddMovie;
