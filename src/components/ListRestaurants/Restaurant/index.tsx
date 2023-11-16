import axios from 'axios';
import IDish from '../../../interfaces/IDish';
import { useEffect, useState } from 'react';
import IRestaurant from '../../../interfaces/IRestaurant';
import Dish from '../Dish';
import styles from './Restaurant.module.scss';

interface RestaurantProps {
  restaurant: IRestaurant
}

const Restaurant = ({ restaurant }: RestaurantProps) => {
  const [dishes, setDishes] = useState<IDish[]>()
  useEffect(() => {
    axios.get<IDish[]>(`http://localhost:8000/api/v1/restaurantes/${restaurant.id}/pratos/`)
      .then(response => {
        setDishes(response.data)
      })
  }, [restaurant.id])

  return (<section className={styles.Restaurant}>
    <div className={styles.Title}>
      <h2>{restaurant.nome}</h2>
    </div>
    <div>
      {dishes?.map(item => <Dish dish={item} key={item.id} />)}
    </div>
  </section>)
}

export default Restaurant;