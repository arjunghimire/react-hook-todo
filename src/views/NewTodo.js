import Form from "../components/Form";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";

const NewTodo = () => {
  const history = useHistory();

  const handleSubmit = (state) => {
    const data = {
      ...state,
      id: uuid(),
    };
    let todo = localStorage.getItem("todos");
    const parseTodo = todo === null ? [] : JSON.parse(todo);
    const sendData = [data, ...parseTodo];
    localStorage.setItem("todos", JSON.stringify(sendData));
    history.push("/");
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewTodo;
