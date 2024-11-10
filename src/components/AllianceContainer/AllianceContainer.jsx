import PropTypes from 'prop-types';
import './alliance-container.css';

const AllianceContainer = ({ photo, name, country }) => {
  return (
    <div className="alliance-container">
      <img src={photo} alt={name} className="alliance-photo" />
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
};

AllianceContainer.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default AllianceContainer;
