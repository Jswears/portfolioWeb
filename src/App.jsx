import Navbar from "./components/Navbar";
import "./styles/index.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Feebacks from "./components/Feebacks";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="realtive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar language={language} toggleLanguage={toggleLanguage} />
          <Hero language={language} />
        </div>
        <About language={language} />
        <Projects language={language} />
        <Feebacks language={language} />
      </div>
      <div className="relative z-0 bg-[#151030]">
        <Contact language={language} />
      </div>
    </>
  );
}

export default App;
