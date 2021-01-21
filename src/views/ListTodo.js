import { useState, useEffect } from "react";
import PCard from "../components/Card";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    setTodos(JSON.parse(todos));
  }, []);

  const handleRemove = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filterTodo));
    setTodos(filterTodo);
  };
  return (
    <div>
      <br />
      {todos &&
        todos.map(({ title, description, id }) => {
          return (
            <div key={id}>
              <PCard
                title={title}
                description={description}
                id={id}
                handleRemove={() => handleRemove(id)}
              />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default ListTodo;
