import React, { Fragment } from "react";
import { ContactSec, Footer, PageTop, TopNavigation } from "../components";

const ContactPage = () => {
  return (
    <Fragment>
      <TopNavigation />
      <PageTop pageTitle="Contact Me" />
      <ContactSec />
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
