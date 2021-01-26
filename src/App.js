import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListTodo from "./views/ListTodo";
import NewTodo from "./views/NewTodo";
import ViewTodo from "./views/ViewTodo";
import EditTodo from "./views/EditTodo";
import NoMatch from "./views/NoMatch";
import Navbar from "./components/Navbar";
import DataContextProvider from "./context/context";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <ListTodo />
          </Route>
          <Route exact path="/todo/new">
            <NewTodo />
          </Route>
          <Route exact path="/todo/:todoId">
            <ViewTodo />
          </Route>
          <Route exact path="/todo/:todoId/edit">
            <EditTodo />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
