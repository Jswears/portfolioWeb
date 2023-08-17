import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import "./styles/_index.scss";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <Navbar />
      <div id="page-container">
        <IntroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </>
  );
}

export default App;
