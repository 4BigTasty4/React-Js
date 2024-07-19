import "./App.css";
import React from "react";
import FunctionalFilm from "./FunctionalFilm";
import FunctionalNews from "./FunctionalNews";
import FunctionalCountry from "./FunctionalCountry";

function App() {
  return (
    <div className="App">
      {<FunctionalNews />}
      {/* <FunctionalFilm /> */}
    </div>
  );
}

export default App;
