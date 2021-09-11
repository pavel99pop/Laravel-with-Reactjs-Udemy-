import React from "react";
import { Fragment } from "react";
import { Footer, PageTop, RefundDescription } from "../components";
import TopNavigation from "../components/TopNavigation/TopNavigation";

const RefundPage = () => {
  return (
    <Fragment>
      <TopNavigation title="Refund Policy" />
      <PageTop pageTitle="Refund Policy" />
      <RefundDescription />
      <Footer />
    </Fragment>
  );
};

export default RefundPage;
