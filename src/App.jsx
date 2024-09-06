import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import AboutUs from "./sections/AboutUs/AboutUs";
import Team from "./sections/Team/Team";
import Contact from "./sections/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Team />
      <Contact />
    </div>
  );
};

export default App;
