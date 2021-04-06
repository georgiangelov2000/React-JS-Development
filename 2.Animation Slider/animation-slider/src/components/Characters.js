import React from "react";

const characters = (props) => {
  console.log(props)
  return (
    <div>
      <img alt="char" src={props.params.url}/>
    </div>
  );
};

export default characters;