import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowcaseRestaurants from './pages/ShowcaseRestaurants';
import AdmissionRestaurant from './pages/Administration/Restaurant/AdmissionRestaurant';
import RestaurantForm from './pages/Administration/Restaurant/RestaurantForm';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<ShowcaseRestaurants />} />
      <Route path="/admin/restaurantes" element={<AdmissionRestaurant />} />
      <Route path="/admin/restaurantes/novo" element={<RestaurantForm />} />
    </Routes>
  );
}

export default App;
