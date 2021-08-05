import React, { Fragment } from "react";
import {
  AboutDescription,
  AboutMe,
  Footer,
  PageTop,
  TopNavigation,
} from "../components";

const AboutPage = () => {
  return (
    <Fragment>
      <TopNavigation />
      <PageTop pageTitle="About Me" />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
