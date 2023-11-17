import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowcaseRestaurants from './pages/ShowcaseRestaurants';
import Restaurants from './pages/Administration/Restaurant/AdmissionRestaurant';
import RestaurantForm from './pages/Administration/Restaurant/RestaurantForm';
import BaseAdminPage from './pages/Administration/BaseAdminPage';
import AdmissionDish from './pages/Administration/Dishes/AdmissionDish';
import FormDish from './pages/Administration/Dishes/FormDish';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<ShowcaseRestaurants />} />
      <Route path='/admin' element={<BaseAdminPage />}>
        <Route path="restaurantes" element={<Restaurants />} />
        <Route path="restaurantes/novo" element={<RestaurantForm />} />
        <Route path="restaurantes/:id" element={<RestaurantForm />} />
        <Route path="pratos" element={<AdmissionDish />} />
        <Route path="pratos/novo" element={<FormDish />} />
        
      </Route>
    </Routes>
  );
}

export default App;