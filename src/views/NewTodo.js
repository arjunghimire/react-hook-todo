import Form from "../components/Form";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../context";
import { DataContext } from "../context/context";

const NewTodo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const contextValue = useContext(DataContext);
  console.log("NEEEEE", contextValue);
  const history = useHistory();
  const handleSubmit = (stateData) => {
    const data = {
      ...stateData,
      id: uuid(),
    };
    const parseTodo = state.todos === null ? [] : state.todos;
    const sendData = [data, ...parseTodo];
    localStorage.setItem("todos", JSON.stringify(sendData));
    dispatch({
      type: "todos",
      payload: sendData,
    });
    history.push("/");
  };
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewTodo;
