import AddBtn from "components/AddBtn";
import React, { FC, useState } from "react";
import { useAppDispatch } from "state";

import ComponentTextarea from "./component";
import "./style.css";

const Textarea: FC = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    // dispatch(
    //   addTodoRequest({
    //     description: value[0].toUpperCase() + value.slice(1),
    //   })
    // );
    setValue("");
  };

  const disabled = !value;
  const placeholder = "Currently typing...";

  return (
    <ComponentTextarea
      Icon={<AddBtn disabled={disabled} handleAddTodo={handleAddTodo} />}
      value={value}
      placeholder={placeholder}
      handleChange={handleChange}
    />
  );
};

export default Textarea;
