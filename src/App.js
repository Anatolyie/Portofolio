import { useEffect } from "react";
import Aos from "aos";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Service from "./components/UI/Service";
import Portofolio from "./components/UI/Portofolio";
import Contact from "./components/UI/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Service/>
        <Portofolio/>
        <Contact/>
      </main>
      <Footer/> 
    </>
  );
}

export default App;
