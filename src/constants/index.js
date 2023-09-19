import {
  CssLogo,
  GitLogo,
  Github,
  GithubLogo,
  HtmlLogo,
  JsLogo,
  Linkedin,
  MongoLogo,
  NodeLogo,
  ReactLogo,
  Resume,
  VetApp,
  Trackify,
  UnknownChronicles,
  SpotifyClone,
  TypescriptLogo,
  TailwindLogo,
  SassLogo,
  NextLogo,
} from "../assets";

const navLinks = [
  {
    name: {
      en: "About",
      de: "Über",
    },
    ref: "#about-section",
  },
  {
    name: {
      en: "Projects",
      de: "Projekte",
    },
    ref: "#project-section",
  },
  {
    name: {
      en: "Contact",
      de: "Kontakt",
    },
    ref: "#contact-section",
  },
];

const socialLinks = [
  {
    name: "Linkedin",
    image: Linkedin,
    url: {
      en: "https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/",
      de: "https://www.linkedin.com/in/joaquin-ignacio-swears-salinas-9a4947284/",
    },
  },
  {
    name: "Github",
    image: Github,
    url: {
      en: "htttps://github.com/Jswears",
      de: "htttps://github.com/Jswears",
    },
  },
  {
    name: "Resume",
    image: Resume,
    url: {
      de: "https://drive.google.com/file/d/1OMBBWiWZHAFWTQnCVTAoLbblbWN56AiL/view?usp=sharing",
      en: "https://drive.google.com/file/d/17TypN8sxRLRhEuIx_yXEF2TLXhpYjkk2/view?usp=sharing",
    },
  },
];

const technologiesLogos = [
  { name: "Css", src: CssLogo },
  { name: "Git", src: GitLogo },
  { name: "Github", src: GithubLogo },
  { name: "Html", src: HtmlLogo },
  { name: "JavaScript", src: JsLogo },
  { name: "MongoDB", src: MongoLogo },
  { name: "NodeJs", src: NodeLogo },
  { name: "React", src: ReactLogo },
  { name: "TypeScript", src: TypescriptLogo },
  { name: "NEXT.JS", src: NextLogo },
  { name: "Tailwind", src: TailwindLogo },
  { name: "Sass", src: SassLogo },
];

const introContent = {
  en: {
    header: "Hey! I'm ",
    role: "Web Developer",
    bio: "Web Developer from Chile based in Hamburg.  I like to write some code and solve problems.",
  },
  de: {
    header: "Moin! Ich bin ",
    role: "Webentwickler",
    bio: "Entwickler aus Chile mit Sitz in Hamburg. Ich mag es, etwas Code zu schreiben und Probleme zu lösen.",
  },
};

const aboutContent = {
  en: {
    heading: "About me",
    content: `Cultivating a diverse international background, I am enthusiastic about launching my career in front-end development. I have gained hands-on experience by participating in a range of projects, with a primary focus on front-end work, complemented by my involvement in back-end tasks. This has laid a robust foundation for me, and I thrive on creative approaches to problem-solving. My commitment to continual learning and personal growth defines my professional ethos.`,
  },
  de: {
    heading: "Über mich",
    content: `Ich habe eine vielseitige internationale Background und bin excited, meine Laufbahn in der Frontend-Entwicklung zu beginnen. Durch Teilnahme an diversen Projekten habe ich praktische Erfahrung gesammelt, mit Schwerpunkt auf Frontend-Arbeit, ergänzt durch Backend-Aufgaben. Das hat eine starke Basis für mich geschaffen, und ich liebe kreative Ansätze zur Problemlösung. Meine Hingabe zum kontinuierlichen Lernen und persönlichem Wachstum prägt mein berufliches Ethos.`,
  },
};

const projectOverview = {
  en: {
    heading: "Projects",
    content: `Here are some of my projects. I am always working on new projects, so check back soon for more!`,
  },
  de: {
    heading: "Projekte",
    content: `Hier sind einige meiner Projekte. Ich arbeite immer an neuen Projekten, also schau bald wieder vorbei!`,
  },
};

const projectsContent = [
  {
    name: "Spotify-clone",
    description: {
      en: "App in progress",
      de: "App in progress",
    },
    tags: [
      {
        name: "scss",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: SpotifyClone,
    deployLink: "https://espotifai-clone.netlify.app/search",
    repository: "https://github.com/Jswears/spotify-clone",
  },
  {
    name: "VetApp",
    description: {
      en: "App to help connecting pet owners with veterinarians.",
      de: "App, die Tierhalter mit Tierärzten zusammenbringt",
    },
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: VetApp,
    deployLink: "https://vetappwecare.netlify.app/",
    repository: "https://github.com/Jswears/veterinary-frontend",
  },
  {
    name: "Trackify",
    description: {
      en: "App to help you track your habits, dailies and to-do's ",
      de: "App zum Verfolgen deiner Habits",
    },
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Trackify,
    deployLink: "https://habit-tracker.adaptable.app/",
    repository: "https://github.com/Jswears/habit-tracker",
  },
  {
    name: "Unknown Chronicles",
    description: {
      en: "Fun click on to defeat your enemies game! Enjoy",
      de: "Ein lustiges Click-on Spiel, bei dem du deine Feinde besiegen musst! Viel Spaß",
    },
    tags:
      //  ["HTML", "CSS", "JavaScript"],
      [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
    image: UnknownChronicles,
    deployLink: "https://jswears.github.io/unknownChronicles/",
    repository: "https://github.com/Jswears/unknownChronicles",
  },
];

const contactContent = {
  en: {
    heading: "Contact",
    formName: "Name",
    namePlaceholder: "Enter your name",
    formEmail: "Email",
    emailPlaceholder: "Enter your email",
    formMessage: "Message",
    messagePlaceholder: "Enter your message",
    formSubmit: "Submit",
  },
  de: {
    heading: "Kontakt",
    formName: "Name",
    namePlaceholder: "Geben Sie Ihren Namen ein",
    formEmail: "Email",
    emailPlaceholder: "Geben Sie Ihre Email ein",
    formMessage: "Nachricht",
    messagePlaceholder: "Geben Sie Ihre Nachricht ein",
    formSubmit: "Senden",
  },
};
export {
  technologiesLogos,
  aboutContent,
  socialLinks,
  introContent,
  projectsContent,
  navLinks,
  projectOverview,
  contactContent,
};
