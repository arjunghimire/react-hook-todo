import Form from "../components/Form";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context";

const EditTodo = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});
  const history = useHistory();
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    const parseTodos = state.todos;
    const todo = parseTodos.find((t) => t.id === params.todoId);
    setTodo(todo);
  }, []);

  const handleSubmit = (stateData) => {
    const parseTodo = state.todos === null ? [] : state.todos;
    const findTodoIndex = parseTodo.findIndex((t) => t.id === params.todoId);
    parseTodo[findTodoIndex] = stateData;
    localStorage.setItem("todos", JSON.stringify(parseTodo));
    dispatch({
      type: "todos",
      payload: parseTodo,
    });
    history.push("/");
  };

  return (
    <div>
      <Form isEdit={true} todo={todo} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditTodo;
