import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";

const FormControl = styled.form`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  .form-control.invalid label {
    color: red;
  }
  label {
    margin-right: 10px;
  }
`;

const Input=styled.input`
margin-right:10px
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <div>
      <FormControl onSubmit={formSubmitHandler}>
        <label>Course Goal</label>
        <Input type="text" onChange={goalInputChangeHandler} />
        <Button type="submit">Add Goal</Button>
      </FormControl>
    </div>
  );
};

export default CourseInput;
