import React from "react";
import {
  Analysis,
  ClientReviews,
  Courses,
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
      <Services />
    </div>
  );
}

export default App;
