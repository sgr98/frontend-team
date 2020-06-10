import React from "react";
import "./App.css";
import "swiper/css/swiper.css";
import { Navigation } from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
