import { useContext } from "react";
import PCard from "../components/Card";
import { TodoContext } from "../context";

const ListTodo = () => {
  const { state, dispatch } = useContext(TodoContext);
  const handleRemove = (id) => {
    const filterTodo = state.todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filterTodo));
    dispatch({
      type: "todos",
      payload: filterTodo,
    });
  };

  return (
    <div>
      <br />
      {state.todos &&
        state.todos.map(({ title, description, id }) => {
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
