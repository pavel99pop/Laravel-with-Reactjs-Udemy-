import React from "react";
import { Fragment } from "react";
import {
  Footer,
  PageTop,
  PrivacyDescription,
  TopNavigation,
} from "../components";

const PrivacyPage = () => {
  return (
    <Fragment>
      <TopNavigation title="Privacy Policy" />
      <PageTop pageTitle="Privacy Policy" />
      <PrivacyDescription />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPage;
