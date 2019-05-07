import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";

import Footer from "../components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/" component={Main} /> */}
        </Switch>

        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Routes;
