import styles from './aboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.credits}>
        <p>Bubble Nebula, NGC 7635</p>
        <p>
          <a href="https://esahubble.org/images/heic1608a/" target="_blank">
            Original image
          </a>{' '}
          by ESA/Hubble (M. Kornmesser), warped and recoloured by NN
        </p>
      </div>
      <section id="about-us" className={styles.aboutUsSection}>
        <div className={styles.aboutUsBox}>
          <h2 className={styles.aboutUsBoxHeader}>¿Quiénes somos?</h2>
          <p className={styles.aboutUsBoxParagraph}>
            La Red Boliviana de Ciencias Planetarias y Exploración Espacial es
            una comunidad colaborativa de personas motivadas en trabajar en el
            sector espacial. La Red está formando un grupo de jóvenes
            investigadores, para que a través del intercambio de ideas,
            habilidades y conocimientos, se aproveche el potencial existente en
            Bolivia y éste se visibilice a nivel internacional.
          </p>
        </div>
        <div className={styles.aboutUsBox}>
          <h2 className={styles.aboutUsBoxHeader}>Misión</h2>
          <p className={styles.aboutUsBoxParagraph}>
            Fomentar y promover la difusión, el estudio y la investigación de
            las Ciencias Planetarias y la Exploración Espacial en Bolivia,
            facilitando la interacción entre estudiantes y profesionales de las
            diferentes áreas para apoyar el fortalecimiento de capacidades y
            desarrollo de proyectos, y así impulsar una mayor participación de
            la comunidad científica boliviana a nivel nacional e internacional.
          </p>
        </div>
        <div className={styles.aboutUsBox}>
          <h2 className={styles.aboutUsBoxHeader}>Visión</h2>
          <p className={styles.aboutUsBoxParagraph}>
            Nuestra visión es generar un núcleo que facilite la interacción,
            desarrollo de habilidades y proyectos para estudiantes y
            profesionales que se quieran dedicar a las Ciencias Planetarias y
            Espaciales en Bolivia, con la finalidad de tener una mayor
            representación boliviana en el sector nacional e internacional.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
