const navLinks = [
  { name: "About", ref: "#about-section" },
  { name: "Projects", ref: "#project-section" },
  { name: "Contact", ref: "#contact-section" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>
        <a href="#intro-section">JS |</a>
      </span>
      <h2>
        <a href="#intro-section">Joaquin Swears |</a>
      </h2>
      <ul>
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
