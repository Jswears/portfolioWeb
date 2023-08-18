const Navbar = ({ language, toggleLanguage }) => {
  const navLinks = [
    {
      name: language === "en" ? "Home" : "Home",
      ref: "#intro-section",
    },
    { name: language === "en" ? "About" : "Über", ref: "#about-section" },
    {
      name: language === "en" ? "Projects" : "Projekte",
      ref: "#project-section",
    },
  ];
  return (
    <nav className="navbar">
      <span>
        <a href="#intro-section">JS |</a>
      </span>
      <h2>
        <a href="#intro-section">Joaquin Swears |</a>
      </h2>
      <ul>
        <button onClick={() => toggleLanguage(language === "en" ? "de" : "en")}>
          {language === "en" ? "DE" : "EN"}
        </button>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.ref}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
