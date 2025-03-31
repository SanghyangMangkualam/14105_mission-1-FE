import React from "react";
import Navbar from "./components/Elements/Navbar/index.jsx";
import HeroSection from "./components/Fragments/HeroSection.jsx";
import ContinueWatching from "./components/Fragments/ContinueWatching.jsx";
import NewPicks from "./components/Fragments/NewPicks.jsx";

const App = () => {
    return (
      <div className="block">
        <Navbar />
        <HeroSection />
        <ContinueWatching />
        <NewPicks/>
      </div>
    );
  };

export default App;

