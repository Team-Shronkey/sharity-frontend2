import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import nonfinDon from "./components/nonfinDon";
import finDon from "./components/finDon";
import homePage from "./components/home";
import about from "./components/about";
import login from "./components/login";
import healthcarePage from "./components/healthcare";

function App() {
  return (
    <div>
      <NavBar />

      <div className="content">
        <Switch>
          <Route path="/non-financial-donations" component={nonfinDon} />
          <Route
            path="/financial-donations/healthcare"
            component={healthcarePage}
          />
          <Route path="/financial-donations" component={finDon} />
          <Route path="/about" component={about} />
          <Route path="/login" component={login} />
          <Route path="/home" component={homePage} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
