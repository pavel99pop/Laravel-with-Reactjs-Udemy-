import React, { Fragment } from "react";
import {
  ContactSec,
  Footer,
  PageTop,
  Services,
  TopNavigation,
} from "../components";

const ServicesPage = () => {
  return (
    <Fragment>
      <TopNavigation title="Privacy Policy" />
      <PageTop pageTitle="Privacy Policy" />
      <Services />
      <ContactSec />
      <Footer />
    </Fragment>
  );
};

export default ServicesPage;
