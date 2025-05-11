import PropTypes from 'prop-types';
import styles from './teamCard.module.css';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import xIcon from '../../assets/icons/x.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import researchgateIcon from '../../assets/icons/researchgate.svg';
import beaconsIcon from '../../assets/icons/beacons.svg';
import githubIcon from '../../assets/icons/github.svg';
import behance from '../../assets/icons/behance.svg';

const icons = {
  linkedin: linkedinIcon,
  x: xIcon,
  instagram: instagramIcon,
  researchgate: researchgateIcon,
  beacons: beaconsIcon,
  github: githubIcon,
  behance: behance,
};

const TeamCard = ({ name, position, photo, socialNetworks }) => {
  return (
    <div className={styles.teamCard}>
      <img src={photo} alt={name} className={styles.teamPhoto} />
      <h3 className={styles.teamName}>{name}</h3>
      <p className={styles.teamPosition}>{position}</p>
      <div className={styles.teamSocials}>
        {socialNetworks.length > 0 ? (
          socialNetworks.map((socialNetwork, index) => (
            <a
              key={index}
              href={socialNetwork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img
                src={icons[socialNetwork.platform]}
                alt={`${socialNetwork.platform} icon`}
                className={styles.socialIconImg}
              />
            </a>
          ))
        ) : (
          <p> </p>
        )}
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamCard;
