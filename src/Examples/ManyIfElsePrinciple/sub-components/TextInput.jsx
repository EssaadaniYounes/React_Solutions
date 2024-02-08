import React from "react";

function TextInput({ q }) {
  return (
    <div>
      <label>{q}</label>
      <input type="text" />
    </div>
  );
}

export default TextInput;
