import styles from './workshopSection.module.css';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import ButtonVariable from '../../components/ButtonVariable/ButtonVariable';
import workshop_photo from '../../assets/images/workshop/workshop_photo.webp';
import workshop_photo_2 from '../../assets/images/workshop/workshop_photo_2.webp';
import workshop_photo_3 from '../../assets/images/workshop/workshop_photo_3.webp';

const WorkshopSection = () => {
  const images = [
    {
      src: workshop_photo,
      alt: 'Workshop',
    },
    {
      src: workshop_photo_2,
      alt: 'Workshop',
    },
    {
      src: workshop_photo_3,
      alt: 'Workshop',
    },
  ];

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>¡Únete a nuestro workshop!</h1>
        <PhotoSlider
          className={styles.photoSlider}
          images={images}
          autoSlideInterval={5000}
          height="500px"
          showDots={false}
          showArrows={true}
        />
        <div className={styles.textBox}>
          <p className={styles.paragraph}>
            Únete al Capacity Building Workshop sobre Hidrogeoquímica de Lagos
            de Gran Altitud, donde exploraremos los ecosistemas vulnerables del
            Altiplano Boliviano y su impacto frente al cambio climático.
          </p>
          <p className={styles.paragraph}>
            Este workshop reunirá a expertos nacionales e internacionales para
            abordar los desafíos actuales en la evaluación de la calidad del
            agua y la conservación de lagunas vulnerables en el Altiplano
            boliviano.
          </p>
          <p className={styles.paragraph}>
            🌱 Abierto a estudiantes, investigadores y profesionales en áreas
            afines. <br />
            📍 Universidad Mayor de San Andrés. La Paz, Bolivia 🗓️ 3 al 4 de
            Junio (Con salidas posteriores a campo) <br />
            🎟️ Evento gratuito con registro previo <br />
          </p>
          <p className={styles.paragraph}>
            Organizado por el Instituto de Investigaciones Químicas de la UMSA y
            la Red Boliviana de Ciencias Planetarias y Exploración Espacial con
            el apoyo internacional de la Geochemical Society y el Blue Marble
            Space Institute of Science.
          </p>
          <ButtonVariable
            link="https://forms.gle/zNqxo15c5eofjogw9"
            text="Link para unirte"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
