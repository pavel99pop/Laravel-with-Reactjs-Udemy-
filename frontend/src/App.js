import React from "react";
import {
  Analysis,
  Services,
  Summary,
  TopBanner,
  TopNavigation,
} from "./components";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
    </div>
  );
}

export default App;
