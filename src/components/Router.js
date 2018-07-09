import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Table from "./table";
import Button from "./button";
import NoMatch from "./NoMatch";

export default class Router extends Component {
  render() {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/base/table" component={Table} />
        <Route exact path="/base/button" component={Button} />
        <Route component={NoMatch} />
      </Switch>;
  }
}
