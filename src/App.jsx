import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import "./styles/_index.scss";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div id="page-container">
        <IntroSection language={language} />
        <AboutSection language={language} />
        <ProjectSection language={language} />
      </div>
    </>
  );
}

export default App;
