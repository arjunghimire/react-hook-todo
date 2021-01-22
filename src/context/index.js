import React, { useEffect, useReducer, createContext } from "react";
import reducer from "../reducer";

const TodoContext = createContext();
const initialState = { todos: [] };

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    dispatch({ type: "todos", payload: JSON.parse(todos) });
  }, []);
  console.log("FUCCCCCCCC", state);
  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

export { TodoContext };
