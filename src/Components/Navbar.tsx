


import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const handleClick = (section: string) => {
    setActive(section);
  };

  return (
    <nav className="navbar">
      <h2>
        <img
          src="/src/assets/logo_navbar.png"
          height={50}
          alt="Logo"
        />
      </h2>

      <div className="nav-links">
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About Us
        </a>

        <a
          href="#services"
          className={active === "services" ? "active" : ""}
          onClick={() => handleClick("services")}
        >
          Services
        </a>

        <a
          href="#why-choose-us"
          className={active === "why-choose-us" ? "active" : ""}
          onClick={() => handleClick("why-choose-us")}
        >
          Why Choose Us
        </a>

        <a
          href="#portfolio"
          className={active === "portfolio" ? "active" : ""}
          onClick={() => handleClick("portfolio")}
        >
          Portfolio
        </a>

        <a
          href="#machinery"
          className={active === "machinery" ? "active" : ""}
          onClick={() => handleClick("machinery")}
        >
          Tools
        </a>
        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}




export default Navbar;

