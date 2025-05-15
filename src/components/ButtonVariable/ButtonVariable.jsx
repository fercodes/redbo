import PropTypes from 'prop-types';
import styles from './buttonVariable.module.css';

const ButtonVariable = ({ link, text }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <button className={styles.buttonVariable} onClick={handleClick}>
      {text}
    </button>
  );
};

ButtonVariable.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonVariable;
