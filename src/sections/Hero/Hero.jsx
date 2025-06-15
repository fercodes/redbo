import styles from './hero.module.css';
import ButtonJoinUs from '../../components/ButtonJoinUs/ButtonJoinUs';
import logo from '../../assets/images/logo_red_rojo.png';
import ButtonInternalLink from '../../components/ButtonInternalLink/ButtonInternalLink';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.heroTitle}>
          Red Boliviana de Ciencias Planetarias y Exploración Espacial
        </h1>
        <div className={styles.buttonsContainer}>
          <ButtonJoinUs />
          <ButtonInternalLink
            link="/album"
            text="Mira nuestras actividades de 2025"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
