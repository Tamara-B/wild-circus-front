import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";

import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Performances from "./pages/Performances/Performances";
import PricesAndBooking from "./pages/PricesAndBooking/PricesAndBooking";
import Footer from "./components/Footer/Footer";

createStore({
  data: {},
});

export default class Routes extends Component {
  render() {
    return (
      <StateMachineProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={AboutUs} />
            <Route path="/performances" component={Performances} />
            <Route path="/prices_and_booking" component={PricesAndBooking} />
          </Switch>
          <Footer />
        </Router>
      </StateMachineProvider>
    );
  }
}
