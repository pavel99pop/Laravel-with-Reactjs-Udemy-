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
      <TopNavigation title="Services" />
      <PageTop pageTitle="My Services" />
      <Services />
      <ContactSec />
      <Footer />
    </Fragment>
  );
};

export default ServicesPage;
