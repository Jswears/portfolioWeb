import MyImage from "../assets/Frame 3 (4).png";
import Linkedin from "../assets/mdi_linkedin.png";
import Github from "../assets/mdi_github.png";
import Gmail from "../assets/mdi_gmail.png";

const socialLinks = [
  {
    name: Linkedin,
    image: Linkedin,
    url: "https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/",
  },
  { name: Github, image: Github, url: "https://github.com/Jswears" },
  {
    name: Gmail,
    image: Gmail,
    url: "mailto:ji.swearssalinas@gmail.com",
  },
];

const IntroSection = () => {
  return (
    <section id="intro-section">
      <div className="header container-left">
        <h1>Hey! I&apos;m Joaquin.</h1>
        <h2 id="big-sc">Web Developer</h2>
        <p>
          Developer from Chile based in Hamburg. I like to write some code and
          solve problems.
        </p>
      </div>
      <div className="container-right">
        <img src={MyImage} alt="My image" className="profile-image" />
        <h2>Web Developer</h2>
        <div className="social">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url}>
              <img src={link.image} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
