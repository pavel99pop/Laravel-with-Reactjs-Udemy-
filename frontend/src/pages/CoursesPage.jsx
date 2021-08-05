import React, { Fragment } from "react";
import { AllCourses, Footer, PageTop, TopNavigation } from "../components";

const CoursesPage = () => {
  return (
    <Fragment>
      <TopNavigation />
      <PageTop pageTitle="All Courses" />
      <AllCourses />
      <Footer />
    </Fragment>
  );
};

export default CoursesPage;
