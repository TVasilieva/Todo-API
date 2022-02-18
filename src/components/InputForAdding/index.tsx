import React, { FC, useState } from "react";
import { useAppDispatch } from "state";
import { addTodo } from "state/todos/actions";

import ComponentInputForAdding from "./component";
import "./style.css";

const InputForAdding: FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    dispatch(
      addTodo({
        id: Math.random(),
        name: value[0].toUpperCase() + value.slice(1),
        active: true,
      })
    );
    setValue("");
  };

  const disabled = !value;

  return (
    <ComponentInputForAdding
      value={value}
      disabled={disabled}
      handleAddTodo={handleAddTodo}
      handleChange={handleChange}
    />
  );
};

export default InputForAdding;
