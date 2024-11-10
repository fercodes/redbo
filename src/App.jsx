import Navbar from './sections/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import AboutUs from './sections/AboutUs/AboutUs';
import Team from './sections/Team/Team';
import Alliances from './sections/Alliances/Alliances';
import Contact from './sections/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <Alliances />
      <Contact />
    </div>
  );
};

export default App;
