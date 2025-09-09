import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Gallery from "./components/Gallery";
import Message from "./components/Message";
import Celebration from "./components/Celebration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Quote />
      <Gallery />
      <Message />
      <Celebration />
      <Footer />
    </div>
  );
}

export default App;
