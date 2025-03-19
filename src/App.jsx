import React from "react";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

const App = () => {
  return <main className="overflow-hidden">
    <Header />
    <Hero />
    <Features />
  </main>;
};

export default App;
