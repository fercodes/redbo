import Navbar from '../sections/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import AboutUs from '../sections/AboutUs/AboutUs';
import Team from '../sections/Team/Team';
import Alliances from '../sections/Alliances/Alliances';
import Contact from '../sections/Contact/Contact';
import PhotosSection from '../sections/PhotosSection/PhotosSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <Alliances />
      <PhotosSection />
      <Contact />
    </div>
  );
};

export default Home;
