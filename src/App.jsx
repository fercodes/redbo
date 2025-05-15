import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Workshop from './pages/Workshop';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workshop" element={<Workshop />} />
    </Routes>
  );
};

export default App;
