import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  CoursesPage,
  HomePage,
  PortfolioPage,
  ServicesPage,
} from "../pages";

const AppRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/service" component={ServicesPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Fragment>
  );
};

export default AppRouter;
