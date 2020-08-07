import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Card from "./components/Card";
import SwipeButton from "./components/SwipeButton";
import ChartScreen from "./components/ChartScreen";
import Charts from "./components/Charts";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/chat/:person">
            <Header backButton="/chat" />
            <ChartScreen />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            <Charts />
          </Route>
          <Route exact path="/">
            <Header />
            <Card />
            <SwipeButton />
          </Route>
          <h1>hEllo</h1>

          {/**chart screan */}
          {/** indiviual chat screeen */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
