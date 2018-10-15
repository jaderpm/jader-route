import React from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  IndexRoute,
  browserHistory
} from "react-router-dom";
import App from "./pages/App";
import Cursos from "./pages/Cursos";
import Curso from "./pages/Curso";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";

import "./styles.css";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router history={browserHistory}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/cursos/:name" component={Cursos} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </App>
  </Router>,
  rootElement
);
//<Route path="/cursos" component={Cursos} />
// <Route path="/cursos/:name" component={Curso} />
