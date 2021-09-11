import React from "react";
import { Fragment } from "react";
import {
  Footer,
  PageTop,
  TermsDescription,
  TopNavigation,
} from "../components";

const TermsPage = () => {
  return (
    <Fragment>
      <TopNavigation title="Terms & Conditions" />
      <PageTop pageTitle="Terms And Conditions" />
      <TermsDescription />
      <Footer />
    </Fragment>
  );
};

export default TermsPage;
