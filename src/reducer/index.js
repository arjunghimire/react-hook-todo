const reducer = (state, action) => {
  switch (action.type) {
    case "todos":
      return { todos: action.payload };

    default:
      return "Invalid";
  }
};

export default reducer;
