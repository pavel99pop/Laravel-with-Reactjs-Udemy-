import React from "react";
import {
  Analysis,
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
    </div>
  );
}

export default App;
