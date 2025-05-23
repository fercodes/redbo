import { useLocation, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import styles from './navbar.module.css';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

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
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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

  const handleHomePageClick = (e) => {
    e.preventDefault(); // prevent default <a> behavior

    if (location.pathname === '/') {
      // Already on home page → scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home
      navigate('/');
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </div>
      <ul
        className={`${styles.menu} ${isMobile ? styles.mobileMenu : ''} ${
          isMobile && isOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <li className={styles.menuItem}>
          <a href="/" onClick={handleHomePageClick}>
            Inicio
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#about-us" onClick={handleMenuItemClick}>
            Sobre nosotros
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#team" onClick={handleMenuItemClick}>
            Equipo
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#contact" onClick={handleMenuItemClick}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
