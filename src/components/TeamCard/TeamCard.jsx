import PropTypes from 'prop-types';
import './team-card.css';
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
    <div className="team-card">
      <img src={photo} alt={name} className="team-photo" />
      <h3 className="team-name">{name}</h3>
      <p className="team-position">{position}</p>
      <div className="team-socials">
        {socialNetworks.length > 0 ? (
          socialNetworks.map((socialNetwork, index) => (
            <a
              key={index}
              href={socialNetwork.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${socialNetwork.platform}-icon`}
            >
              <img
                src={icons[socialNetwork.platform]}
                alt={`${socialNetwork.platform} icon`}
                className="social-icon-img"
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
