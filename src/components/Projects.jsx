import { motion } from "framer-motion";

import { projectOverview, projectsContent } from "../constants";
import { styles } from "../styles";
import ProjectCard from "./ProjectCard";

import { textVariant, fadeIn, staggerContainer } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const Projects = ({ language }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="project-section"
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          {projectOverview[language].heading}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {projectOverview[language].content}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projectsContent.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            language={language}
            {...project}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
