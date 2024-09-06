import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <ul
        className={`menu ${isMobile ? "mobile-menu" : ""} ${
          isMobile && isOpen ? "mobile-menu-open" : ""
        }`}
      >
        <li className="menu-item">
          <a href="#hero" onClick={handleMenuItemClick}>
            Inicio
          </a>
        </li>
        <li className="menu-item">
          <a href="#about-us" onClick={handleMenuItemClick}>
            Sobre nosotros
          </a>
        </li>
        <li className="menu-item">
          <a href="#team" onClick={handleMenuItemClick}>
            Equipo
          </a>
        </li>
        <li className="menu-item">
          <a href="#contact" onClick={handleMenuItemClick}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
