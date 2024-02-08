import React from "react";
import TextInput from "../sub-components/TextInput";
import RadioInput from "../sub-components/RadioInput";
import NumberInput from "../sub-components/NumberInput";
import CheckBoxInput from "../sub-components/CheckBoxInput";

import { questions } from "../constant/questions";

const ITEMS_COMPONENTS = {
  Text: ({ title }) => {
    return <TextInput q={title} />;
  },
  Radio: ({ title, examples }) => {
    return <RadioInput q={title} examples={examples} />;
  },
  Number: ({ title }) => {
    return <NumberInput q={title} />;
  },
  CheckBox: ({ title, examples }) => {
    return <CheckBoxInput q={title} examples={examples} />;
  },
};

function After() {
  return (
    <div>
      <p>Questions</p>
      {questions.map((item) => {
        const Component = ITEMS_COMPONENTS[item.type];
        return <Component key={item.id} {...item} />;
      })}
    </div>
  );
}

export default After;
