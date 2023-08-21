import MyImage from "../assets/Frame 3 (4).png";
import Linkedin from "../assets/icons8-linkedin.svg";
import Github from "../assets/github-mark.svg";
import Resume from "../assets/resume-svgrepo-com.svg";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Linkedin",
    image: Linkedin,
    url: "https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/",
  },
  { name: "Github", image: Github, url: "https://github.com/Jswears" },
  {
    name: "Resume",
    image: Resume,
    url: "https://drive.google.com/file/d/1JY-yo4PNddkKhqdOQ5XAuZSmjORCFAlu/view?usp=sharing",
  },
];

const IntroSection = ({ language }) => {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const [instructions, setInstructions] = useState("");

  const content = {
    en: {
      name: "Hey! I'm Joaquin.",
      role: "Web Developer",
      bio: "Developer from Chile based in Hamburg. I like to write some code and solve problems.",
      langBtn: "DE",
      copyMsg: "Click to copy E-mail",
      copySuccess: "Email copied to clipboard",
    },
    de: {
      name: "Moin! Ich bin Joaquin.",
      role: "Webentwickler",
      bio: "Entwickler aus Chile mit Sitz in Hamburg. Ich mag es, etwas Code zu schreiben und Probleme zu lösen.",
      langBtn: "EN",
      copyMsg: "Zum Kopieren der E-Mail anklicken",
      copySuccess: "E-Mail erfolgreich kopiert",
    },
  };
  const email = "ji.swearssalinas@gmail.com";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(content[language].copySuccess);
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(content[language].copyMsg);
  }

  function hideInstruction() {
    setInstructions("");
  }

  return (
    <section id="intro-section">
      <div className="header container-left">
        <h1>{content[language].name}</h1>
        <h2 id="big-sc">{content[language].role}</h2>
        <p>{content[language].bio}</p>
      </div>
      <div className="container-right">
        <img src={MyImage} alt="My image" className="profile-image" />
        <div className="call-to-action">
          <h2>{content[language].role}</h2>
          <h3 className="cta">Let&apos;s connect!</h3>
          <p className={copySuccessMessage ? "success-msg" : "instructions"}>
            {copySuccessMessage} {instructions}
          </p>
          <p
            className={copySuccessMessage ? "email green" : "email orange"}
            onClick={copyEmail}
            onMouseOver={showInstruction}
            onMouseOut={hideInstruction}
          >
            ji.swearssalinas@gmail.com
          </p>
          <div className="social">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url}>
                <img
                  src={link.image}
                  alt={link.name}
                  title={link.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
