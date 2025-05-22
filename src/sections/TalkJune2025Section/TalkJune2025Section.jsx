import styles from './talkJune2025Section.module.css';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import ButtonVariable from '../../components/ButtonVariable/ButtonVariable';
import talkJune2025 from '../../assets/images/talkJune2025/talkJune2025.jpeg';

const TalkJune2025Section = () => {
  const images = [
    {
      src: talkJune2025,
      alt: 'Charla de junio 2025',
    },
  ];

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <PhotoSlider
          className={styles.photoSlider}
          images={images}
          autoSlideInterval={5000}
          height="500px"
          showDots={false}
          showArrows={true}
        />
        <h1 className={styles.heroTitle}>
          ¡Charla con el Dr. Sanjoy Som, científico de la NASA!
        </h1>
        <div className={styles.textBox}>
          <p className={styles.paragraph}>
            🧪 ¡
            <a
              href="https://www.nasa.gov/people/sanjoy-som/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.customLink}
            >
              Científico de la NASA
              <span>↗</span>
            </a>{' '}
            llega a Santa Cruz para dar una charla imperdible!
            <br />
            ¿Y si no estamos solos en el universo?
            <br />
            🌌 Descubrí cómo la ciencia está buscando vida más allá de la
            Tierra.
          </p>
          <p className={styles.paragraph}>
            🚀 TALKS American Spaces Bolivia presenta:
            <br />
            Astrobiology: Searching for Life Beyond Earth
            <br />
            Con el Dr. Sanjoy Som, científico de la NASA fundador de Blue Marble
            Space y una de las voces más reconocidas en el campo de la
            astrobiología. En esta charla única, nos contará cómo la ciencia
            busca rastros de vida fuera de nuestro planeta.
          </p>
          <p className={styles.paragraph}>
            🤝 Esta charla es posible gracias a la coorganización y colaboración
            de la Red Boliviana de Ciencias Planetarias y Exploración Espacial,
            el Blue Marble Space Institute of Science, American Spaces Bolivia,
            CBA Santa Cruz.
          </p>
          <p className={styles.paragraph}>
            🔬 Esta es una actividad NACIONAL del programa American Spaces
            Bolivia, organizada de forma presencial en Santa Cruz, con ingreso
            gratuito, y dirigida a todo el público interesado en la ciencia y la
            exploración espacial.
          </p>

          <p className={styles.paragraph}>
            📍 Lugar: Cine CBA, Calle Sucre N.º 364
            <br />
            📅 Fecha: Lunes 2 de junio
            <br />
            🕙 Hora: 10:00 a.m.
            <br />
            🎟️ ¡Cupos limitados!
            <br />
          </p>
          <p className={styles.paragraph}>
            🔗 Registrate ahora y asegurá tu lugar:
          </p>
          <ButtonVariable
            link="https://forms.gle/UpUVU5FLESrUGiPS7"
            text="Link para registrarte"
          />
        </div>
      </div>
    </section>
  );
};

export default TalkJune2025Section;
