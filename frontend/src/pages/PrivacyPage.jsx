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
      <TopNavigation />
      <PageTop />
      <PrivacyDescription />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPage;
