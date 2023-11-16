import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowcaseRestaurants from './pages/ShowcaseRestaurants';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<ShowcaseRestaurants />} />
    </Routes>
  );
}

export default App;
