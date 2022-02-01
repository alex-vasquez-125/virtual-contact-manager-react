import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import App from "./App";
import Header from "./components/Header";
import ContactTablePage from "./pages/ContactTablePage";
import ContactListPage from "./pages/ContactListPage";
import ContactCardPage from "./pages/ContactCardPage";
import { Counter } from "./components/Counter";

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Counter/>
          </Route>
          <Route path="/table">
            <ContactTablePage />
          </Route>
          <Route path="/list">
            <ContactListPage />
          </Route>
          <Route path="/card">
            <ContactCardPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
