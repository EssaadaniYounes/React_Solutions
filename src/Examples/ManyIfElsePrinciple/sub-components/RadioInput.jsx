import React from "react";

function RadioInput({ q, examples }) {
  return (
    <div>
      <label>{q}</label>
      {examples.map((ex) => (
        <div key={ex}>
          <input type="radio" name="radio_group" />
          <label>{ex}</label>
        </div>
      ))}
    </div>
  );
}

export default RadioInput;
