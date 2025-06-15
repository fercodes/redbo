import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import styles from './photosSection.module.css';

import foto_2024_workshop_1 from '../../assets/images/events/foto_2024_workshop_1.jpeg';
import foto_2024_workshop_2 from '../../assets/images/events/foto_2024_workshop_2.jpeg';
import foto_2024_workshop_3 from '../../assets/images/events/foto_2024_workshop_3.jpeg';
import foto_1 from '../../assets/images/events/foto_1.jpg';
import foto_2 from '../../assets/images/events/foto_2.jpg';
import foto_3 from '../../assets/images/events/foto_3.jpg';
import foto_4 from '../../assets/images/events/foto_4.jpg';
import album1Photo1 from '../../assets/images/album/album1Photo1.jpg';
import album1Photo2 from '../../assets/images/album/album1Photo2.jpg';
import album1Photo3 from '../../assets/images/album/album1Photo3.jpg';
import album1Photo7 from '../../assets/images/album/album1Photo7.jpg';
import album2Photo1 from '../../assets/images/album/album2Photo1.jpg';

const PhotosSection = () => {
  const images = [
    {
      src: album1Photo1,
      alt: 'actividades',
    },
    {
      src: album1Photo2,
      alt: 'actividades',
    },
    {
      src: album1Photo3,
      alt: 'actividades',
    },
    {
      src: album1Photo7,
      alt: 'actividades',
    },
    {
      src: album2Photo1,
      alt: 'actividades',
    },
    {
      src: foto_2024_workshop_1,
      alt: 'actividades',
    },
    {
      src: foto_2024_workshop_2,
      alt: 'actividades',
    },
    {
      src: foto_2024_workshop_3,
      alt: 'actividades',
    },
    {
      src: foto_1,
      alt: 'actividades',
    },
    {
      src: foto_2,
      alt: 'actividades',
    },
    {
      src: foto_3,
      alt: 'actividades',
    },
    {
      src: foto_4,
      alt: 'actividades',
    },
  ];

  return (
    <section id="alliances" className={styles.photosSection}>
      <h2 className={styles.photosSectionHeader}>
        Fotos de nuestras actividades
      </h2>
      <PhotoSlider
        className={styles.photoSlider}
        images={images}
        autoSlideInterval={5000}
        height="500px"
        showDots={true}
        showArrows={true}
      />
    </section>
  );
};

export default PhotosSection;
