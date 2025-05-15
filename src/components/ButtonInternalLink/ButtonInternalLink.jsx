import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './buttonInternalLink.module.css';

const ButtonInternalLink = ({ link, text }) => {
  return (
    <Link to={link}>
      <button className={styles.buttonInternalLink}>{text}</button>
    </Link>
  );
};

ButtonInternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ButtonInternalLink;
