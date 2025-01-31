import './contact.css';
import ButtonJoinUs from '../../components/ButtonJoinUs/ButtonJoinUs';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        ¿Te gustaría colaborar o quieres seguir nuestros proyectos? <br />
        ¡Síguenos en nuestras redes sociales para estar en contacto!
      </h2>
      <div className="contact-icons">
        <a
          href="https://www.facebook.com/RedBolivianadeCsEspaciales"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="contact-icon" />
        </a>
        <a
          href="https://www.instagram.com/redboliviana_csplanetyespac/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="contact-icon" />
        </a>
        <a
          href="https://www.youtube.com/@RedBolivianadeCsPlanetyEspac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" className="contact-icon" />
        </a>
      </div>
      <a href="mailto:redbolivianacsespaciales@gmail.com" className="email">
        redbolivianacsespaciales@gmail.com
      </a>
      <ButtonJoinUs />
    </section>
  );
};

export default Contact;
