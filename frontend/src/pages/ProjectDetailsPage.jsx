import React, { Fragment } from "react";
import { TopNavigation, PageTop, ProjectDetails, Footer } from "../components";

const ProjectDetailsPage = () => {
  return (
    <Fragment>
      <TopNavigation title="Project Details" />
      <PageTop pageTitle="Project Details" />
      <ProjectDetails />
      <Footer />
    </Fragment>
  );
};

export default ProjectDetailsPage;
