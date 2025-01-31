import PropTypes from 'prop-types';
import './alliance-container.css';

const AllianceContainer = ({ photo, name, country, link }) => {
  return (
    <div className="alliance-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={photo} alt={name} className="alliance-photo" />
      </a>
      <p>{name}</p>
      <p>{country}</p>
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
