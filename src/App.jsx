import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Workshop from './pages/Workshop';
import TalkJune2025 from './pages/TalkJune2025';
import Album from './pages/Album';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/charla-junio-2025" element={<TalkJune2025 />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </>
  );
};

export default App;
