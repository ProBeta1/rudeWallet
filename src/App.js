import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import BudgetDashboard from "./pages/BudgetDashboard"
import About from "./pages/About"

function App() {
  return (
    <div className="bg-green">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/budget">
          <BudgetDashboard />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
