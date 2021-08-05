import React, { Fragment } from "react";
import { AllProjects, Footer, PageTop, TopNavigation } from "../components";

const PortfolioPage = () => {
  return (
    <Fragment>
      <TopNavigation />
      <PageTop pageTitle="My Portfolio" />
      <AllProjects />
      <Footer />
    </Fragment>
  );
};

export default PortfolioPage;
