import { motion } from "framer-motion";

import { MyImage } from "../assets";
import { introContent } from "../constants";
import { styles } from "../styles";

// eslint-disable-next-line react/prop-types
const Hero = ({ language }) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#642035;]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-orange-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {introContent[language].header}
            <span className="text-red-400">Joaquin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {introContent[language].bio}
          </p>
          <div className="flex justify-end items-center">
            <img
              src={MyImage}
              alt="My Image"
              className=" md:h-96 md:w-96  object-contain object-center pointer-events-none shadow-card rounded-full "
            />
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about-section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
