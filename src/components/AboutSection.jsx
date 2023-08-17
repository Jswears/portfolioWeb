import CssLogo from "../assets/technologies/css.png";
import GitLogo from "../assets/technologies/git.png";
import GithubLogo from "../assets/technologies/github.png";
import HtmlLogo from "../assets/technologies/html.png";
import JsLogo from "../assets/technologies/js.png";
import MongoLogo from "../assets/technologies/mongo.png";
import NodeLogo from "../assets/technologies/node.png";
import ReactLogo from "../assets/technologies/react.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const technologiesLogos = [
  {
    name: "Css",
    src: CssLogo,
  },
  { name: "Git", src: GitLogo },
  { name: "Github", src: GithubLogo },
  { name: "Html", src: HtmlLogo },
  { name: "JavaScript", src: JsLogo },
  { name: "MongoDB", src: MongoLogo },
  { name: "NodeJs", src: NodeLogo },
  { name: "React", src: ReactLogo },
];

const AboutSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section id="about-section">
      <h2>About me</h2>
      <p>
        Cultivating a diverse international background, I am enthusiastic about
        launching my career in front-end development. I have gained hands-on
        experience by participating in a range of projects, with a primary focus
        on front-end work, complemented by my involvement in back-end tasks.
        This has laid a robust foundation for me, and I thrive on creative
        approaches to problem-solving. My commitment to continual learning and
        personal growth defines my professional ethos.
      </p>

      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={1}
          dragMomentum={false}
          className="inner-carousel"
        >
          {technologiesLogos.map((technology) => (
            <motion.div className="item" key={technology.name}>
              <img src={technology.src} alt={technology.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
