import GameImg from "../assets/image 1 (1).png";
import TrackifyImg from "../assets/image 2 (1).png";
import VetAppImg from "../assets/image 3 (1).png";
import Github from "../assets/mdi_github.png";

const projectsImg = [
  {
    name: "VetApp",
    ref: VetAppImg,
    description: "App to help connecting pet owners with veterinarians.",
    technologies: ["CSS", "React", "Node.js", "Express", "MongoDB"],
    deployLink: "https://vetappwecare.netlify.app/",
    repository: "https://github.com/Jswears/veterinary-frontend",
  },
  {
    name: "Trackify",
    ref: TrackifyImg,
    description: "App to help you track your habits, dailies and to-do's",
    technologies: ["EJS", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    deployLink: "https://habit-tracker.adaptable.app/",
    repository: "https://github.com/Jswears/habit-tracker",
  },
  {
    name: "Unknown Chronicles",
    ref: GameImg,
    description: "Fun click on to defeat your enemies game! Enjoy",
    technologies: ["HTML", "CSS", "JavaScript"],
    deployLink: "https://jswears.github.io/unknownChronicles/",
    repository: "https://github.com/Jswears/unknownChronicles",
  },
];

const ProjectSection = () => {
  return (
    <section id="project-section">
      <h2>Projects</h2>
      <div className="projects">
        {projectsImg.map((project) => (
          <div className="projects-card" key={project.name}>
            <a href={project.deployLink}>
              <img src={project.ref} alt={project.name} className="app-img" />
            </a>
            <div className="project-info">
              <div className="info-right">
                <div>
                  <h3>
                    <a href={project.deployLink}>{project.name} </a>
                    <a href={project.repository}>
                      <img src={Github} alt="Github" className="logo-sm" />
                    </a>
                  </h3>
                  <p>{project.description}</p>
                </div>
              </div>

              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
