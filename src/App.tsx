import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { TodosPage } from "./pages/todosPage";
import { AboutPage } from "./pages/aboutPage";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
