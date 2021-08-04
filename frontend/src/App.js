import React from "react";
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
} from "./components";

function App() {
  return (
    <div>
      <TopNavigation />
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
    </div>
  );
}

export default App;
