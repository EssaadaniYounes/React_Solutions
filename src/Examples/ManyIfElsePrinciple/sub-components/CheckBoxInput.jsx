import React from "react";

function CheckBoxInput({ q, examples }) {
  return (
    <div>
      <label>{q}</label>
      {examples.map((ex) => (
        <div key={ex}>
          <input type="checkbox" />
          <label>{ex}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckBoxInput;
