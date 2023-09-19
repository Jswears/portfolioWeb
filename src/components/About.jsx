import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { aboutContent, socialLinks, technologiesLogos } from "../constants";

// eslint-disable-next-line react/prop-types
const About = ({ language }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 flex flex-col justify-center gap-10`}
      id="about-section"
    >
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          {aboutContent[language].heading}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {aboutContent[language].content}
      </motion.p>

      <div className="mt-8 ">
        <div className="flex flex-wrap gap-4">
          {technologiesLogos.map((technology) => (
            <div
              key={technology.name}
              className="item w-16 h-16 p-2 bg-white rounded-lg shadow-md hover:scale-125 cursor-grab"
            >
              <img
                src={technology.src}
                alt={technology.name}
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-4 items-center flex-wrap mt-8">
        {socialLinks.map((element) => (
          <div
            key={element.name[language]}
            className="item w-16 h-16 p-3 bg-white rounded-full hover:scale-125 cursor-grab"
            onClick={() => window.open(element.url[language], "_blank")}
          >
            <img src={element.image} alt={element.name} />
            <p className="mt-5 ">{element.name[language]}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
