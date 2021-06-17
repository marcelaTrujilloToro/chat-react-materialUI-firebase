import React from "react";
import { Route, Switch } from "react-router";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Chat from "./components/chat/Chat";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Chat}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
    </Switch>
  );
};

export default Routes;
