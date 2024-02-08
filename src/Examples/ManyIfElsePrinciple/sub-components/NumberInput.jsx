import React from "react";

function NumberInput({ q }) {
  return (
    <div>
      <label>{q}</label>
      <input type="number" />
    </div>
  );
}

export default NumberInput;
