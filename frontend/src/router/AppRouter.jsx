import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  CoursesPage,
  HomePage,
  PortfolioPage,
  RefundPage,
  ServicesPage,
  TermsPage,
} from "../pages";
import PrivacyPage from "../pages/PrivacyPage";
const AppRouter = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/refund" component={RefundPage} />
        <Route exact path="/terms" component={TermsPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
      </Switch>
    </Fragment>
  );
};

export default AppRouter;
