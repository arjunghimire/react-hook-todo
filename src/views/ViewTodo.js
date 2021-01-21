import PCard from "../components/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewTodo = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const parseTodos = JSON.parse(todos);
    const todo = parseTodos.find((t) => t.id === params.todoId);
    setTodo(todo);
  }, []);
  const { title, id, description } = todo;
  return (
    <div>
      <br />
      <PCard id={id} title={title} description={description} />
    </div>
  );
};

export default ViewTodo;
