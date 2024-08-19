import "./Hero.css";
import logo from "../../assets/images/logo_red_rojo.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Red Boliviana de Ciencias Planetarias y Exploración Espacial</h1>
      </div>
    </section>
  );
};

export default Hero;
