import PropTypes from 'prop-types';
import styles from './allianceContainer.module.css';

const AllianceContainer = ({ photo, name, country, link }) => {
  return (
    <div className={styles.allianceContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={photo} alt={name} className={styles.alliancePhoto} />
      </a>
      <p className={styles.allianceContainerParagraph}>{name}</p>
      <p className={styles.allianceContainerParagraph}>{country}</p>
    </div>
  );
};

AllianceContainer.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  link: PropTypes.string,
};

export default AllianceContainer;
