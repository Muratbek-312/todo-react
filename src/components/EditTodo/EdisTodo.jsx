import React, { useContext } from "react";
import { todoContext } from "../../contexts/TodoContext";

const EdisTodo = () => {
  const { taskToEdit } = useContext(todoContext);
  console.log(taskToEdit)
  return (
    <div>
      <input type="text" />
      <button>Save</button>
    </div>
  );
};

export default EdisTodo;
