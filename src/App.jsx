import React from "react";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";

const App = () => {
  return <main className="overflow-hidden">
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Faq />
  </main>;
};

export default App;
