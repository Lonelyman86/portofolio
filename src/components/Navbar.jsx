import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Portfolio<span className="dot">.</span>
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>{t('nav.about')}</li>
          <li onClick={() => scrollToSection("experience")}>{t('nav.experience')}</li>
          <li onClick={() => scrollToSection("projects")}>{t('nav.work')}</li>
          <li onClick={() => scrollToSection("contact")}>{t('nav.contact')}</li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
