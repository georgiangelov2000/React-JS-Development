import React from "react";
import PropTypes from "prop-types";

const CurrencyDisplay = (props) => {
  return (
  <div>
        {props.name.toUpperCase()}
    <input
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      type="text"
    />
    </div>
  );
};

CurrencyDisplay.propTypes={
  onChange: PropTypes.func
}

export default CurrencyDisplay;