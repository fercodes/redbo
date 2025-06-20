import { Link } from 'react-router-dom';

import styles from './contact.module.css';
import ButtonJoinUs from '../../components/ButtonJoinUs/ButtonJoinUs';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>
        ¿Te gustaría colaborar o quieres seguir nuestros proyectos? <br />
        ¡Síguenos en nuestras redes sociales para estar en contacto!
      </h2>
      <div className={styles.contactIconsContainer}>
        <a
          href="https://www.facebook.com/RedBolivianadeCsEspaciales"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookIcon}
            alt="Facebook"
            className={styles.contactIcon}
          />
        </a>
        <a
          href="https://www.instagram.com/redboliviana_csplanetyespac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
            className={styles.contactIcon}
          />
        </a>
        <a
          href="https://www.youtube.com/@RedBolivianadeCsPlanetyEspac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" className={styles.contactIcon} />
        </a>
      </div>
      <a
        href="mailto:redbolivianacsespaciales@gmail.com"
        className={styles.email}
      >
        redbolivianacsespaciales@gmail.com
      </a>
      <ButtonJoinUs />

      <div className={styles.sitemapSection}>
        <h3 className={styles.sectionTitle}>Mapa del sitio</h3>
        <ul className={styles.sitemapList}>
          <li>
            <Link to="/">Página principal</Link>
          </li>
          <li>
            <Link to="/workshop">Workshop</Link>
          </li>
          <li>
            <Link to="/charla-junio-2025">Charla junio 2025</Link>
          </li>
          <li>
            <Link to="/album">Álbum de fotos 2025</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
