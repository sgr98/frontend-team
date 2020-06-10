<<<<<<< HEAD
import React from 'react';
import './App.css';
import { Navigation } from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
=======
import React from "react";
import "./App.css";
import "swiper/css/swiper.css";
import { Navigation } from "./Components/Navigation/Navigation";
import HomePage from "./Components/HomePage/HomePage";
>>>>>>> e2a7b98a74562581b863e598071349dff723a6f9

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
