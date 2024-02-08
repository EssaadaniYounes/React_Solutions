import React from "react";
import TextInput from "../sub-components/TextInput";
import RadioInput from "../sub-components/RadioInput";
import NumberInput from "../sub-components/NumberInput";
import CheckBoxInput from "../sub-components/CheckBoxInput";

import { questions } from "../constant/questions";

function Before() {
  return (
    <div>
      <p>Questions</p>
      {questions.map((item) => {
        if (item.type === "CheckBox") {
          return (
            <CheckBoxInput
              key={item.id}
              q={item.title}
              examples={item.examples}
            />
          );
        } else if (item.type === "Radio") {
          return (
            <RadioInput key={item.id} q={item.title} examples={item.examples} />
          );
        } else if (item.type === "Number") {
          return <NumberInput key={item.id} q={item.title} />;
        } else {
          return <TextInput key={item.id} q={item.title} />;
        }
      })}
    </div>
  );
}

export default Before;
