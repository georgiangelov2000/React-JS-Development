import React from "react";
import utils from "../utils/observer";

const characters = (props) => {
  console.log(props)
  return (
    <div onClick={()=>utils.executeObserver("changeFocus",{id:props.params.id})} >
      <img className="char-img" alt="char" src={props.params.url}/>
    </div>
  );
};

export default characters;