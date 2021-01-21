import Form from "../components/Form";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const EditTodo = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const history = useHistory();

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const parseTodos = JSON.parse(todos);
    const todo = parseTodos.find((t) => t.id === params.todoId);
    setTodo(todo);
  }, []);

  const handleSubmit = (state) => {
    let todo = localStorage.getItem("todos");
    const parseTodo = todo === null ? [] : JSON.parse(todo);
    const findTodoIndex = parseTodo.findIndex((t) => t.id === params.todoId);
    parseTodo[findTodoIndex] = state;
    localStorage.setItem("todos", JSON.stringify(parseTodo));
    history.push("/");
  };

  return (
    <div>
      <Form isEdit={true} todo={todo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditTodo;
