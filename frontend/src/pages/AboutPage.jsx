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
      <TopNavigation title="About" />
      <PageTop pageTitle="About Me" />
      <AboutMe />
      <AboutDescription />
      <Footer />
    </Fragment>
  );
};

export default AboutPage;
