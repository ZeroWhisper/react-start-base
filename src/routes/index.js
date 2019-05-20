import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Screen from "../pages/Screen";

import Login from "../pages/Login";
import Localization from "../pages/Localization";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import Main from "../components/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <>
        <Header />

        <Screen>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Localization} />
            {/* <Route exact path="/" component={Teste} /> */}
            {/* <Route exact path="/" component={Main} /> */}
          </Switch>
        </Screen>

        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Routes;
