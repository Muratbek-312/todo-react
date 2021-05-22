import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import EdisTodo from "./components/EditTodo/EdisTodo";
import Home from "./components/Home/Home";
import TodoList from "./components/TodoList/TodoList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddTodo} />
        <Route exact path="/list" component={TodoList} />
        <Route exact path="/edit" component={EdisTodo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
