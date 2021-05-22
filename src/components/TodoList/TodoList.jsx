import React, { useContext, useEffect } from "react";
import { todoContext } from "../../contexts/TodoContext";

const TodoList = () => {
  const { todos, getTodosData, changeStatus, deleteTask, editTodo } =
    useContext(todoContext);
  useEffect(() => {
    getTodosData();
  }, []);

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input
            onChange={() => changeStatus(item.id)}
            type="checkbox"
            checked={item.status}
          />
          {item.task}
          <button onClick={() => deleteTask(item.id)}>Delete</button>
          <button onClick={() => editTodo(item.id)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
