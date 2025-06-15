import styles from './albumSection.module.css';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import album1Photo1 from '../../assets/images/album/album1Photo1.jpg';
import album1Photo2 from '../../assets/images/album/album1Photo2.jpg';
import album1Photo3 from '../../assets/images/album/album1Photo3.jpg';
import album1Photo4 from '../../assets/images/album/album1Photo4.jpg';
import album1Photo5 from '../../assets/images/album/album1Photo5.jpg';
import album1Photo6 from '../../assets/images/album/album1Photo6.jpg';
import album1Photo7 from '../../assets/images/album/album1Photo7.jpg';
import album1Photo8 from '../../assets/images/album/album1Photo8.jpg';
import album1Photo9 from '../../assets/images/album/album1Photo9.jpg';
import album1Photo10 from '../../assets/images/album/album1Photo10.jpg';
import album1Photo11 from '../../assets/images/album/album1Photo11.jpg';
import album1Photo12 from '../../assets/images/album/album1Photo12.jpg';
import album1Photo13 from '../../assets/images/album/album1Photo13.jpg';
import album1Photo14 from '../../assets/images/album/album1Photo14.jpg';
import album2Photo1 from '../../assets/images/album/album2Photo1.jpg';
import album2Photo2 from '../../assets/images/album/album2Photo2.jpg';
import album2Photo3 from '../../assets/images/album/album2Photo3.jpg';
import album2Photo4 from '../../assets/images/album/album2Photo4.jpg';

const AlbumSection = () => {
  const images = [
    {
      src: album1Photo1,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo2,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo3,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo4,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo5,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo6,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo7,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo8,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo9,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo10,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo11,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo12,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo13,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album1Photo14,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album2Photo1,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album2Photo2,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album2Photo3,
      alt: 'Foto de nuestro álbum',
    },
    {
      src: album2Photo4,
      alt: 'Foto de nuestro álbum',
    },
  ];

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Nuestras actividades de 2025</h1>
        <PhotoSlider
          className={styles.photoSlider}
          images={images}
          autoSlideInterval={5000}
          height="450px"
          showDots={true}
          showArrows={true}
        />
        <div className={styles.textBox}>
          <p className={styles.paragraph}>
            Álbum de fotos con nuestras actividades de 2025. Entre ellas se
            encuentran: Workshop sobre hidrogeoquímica de lagos de gran altitud,
            charla sobre astrobiología con el Dr. Sanjoy Som en Santa Cruz y La
            Paz.
          </p>
          <p className={styles.paragraph}>
            Puedes leer a fondo sobre estas actividades en la última sección de
            nuestro sitio web, en donde dice &quot;Mapa del sitio&quot;, o
            presionando <a href="#contact">aquí</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
