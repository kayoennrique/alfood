import axios from 'axios';
import { useEffect, useState } from 'react';
import IRestaurant from '../../interfaces/IRestaurant';
import style from './ListRestaurants.module.scss';
import Restaurant from './Restaurant';
import { IPagination } from '../../interfaces/IPagination';


const ListRestaurants = () => {

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    // get restaurants
    axios.get<IPagination<IRestaurant>>('http://localhost:8000/api/v1/restaurantes/')
      .then(response => {
        setRestaurants(response.data.results)
        setNextPage(response.data.next)
      })
      .catch(erro => {
        console.log(erro)
      });
  }, []);

  const viewMore = () => {
    axios.get<IPagination<IRestaurant>>(nextPage)
      .then(response => {
        setRestaurants([...restaurants, ...response.data.results])
        setNextPage(response.data.next)
      })
      .catch(erro => {
        console.log(erro)
      });
  }

  return (<section className={style.ListRestaurants}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurants?.map(item => <Restaurant restaurant={item} key={item.id} />)}
    {nextPage && <button onClick={viewMore}>
      ver mais
    </button>}
  </section>)
}

export default ListRestaurants;