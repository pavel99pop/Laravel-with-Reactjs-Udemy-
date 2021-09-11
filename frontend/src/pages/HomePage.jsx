import React, { Fragment } from "react";
import {
  AboutMe,
  Analysis,
  ClientReviews,
  Courses,
  Footer,
  RecentProjects,
  Services,
  Summary,
  TopBanner,
  TopNavigation,
  Video,
} from "../components";

const HomePage = () => {
  return (
    <Fragment>
      <TopNavigation title="Easy Learning" />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProjects />
      <Courses />
      <Video />
      <ClientReviews />
      <AboutMe />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
