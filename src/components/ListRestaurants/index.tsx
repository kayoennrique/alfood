import axios from 'axios';
import { useEffect, useState } from 'react';
import IRestaurant from '../../interfaces/IRestaurant';
import style from './ListRestaurants.module.scss';
import Restaurant from './Restaurant';
import { IPagination } from '../../interfaces/IPagination';


const ListRestaurants = () => {

  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  const loadData = (url: string) => {
    axios.get<IPagination<IRestaurant>>(url)
      .then(response => {
        setRestaurants(response.data.results)
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
      })
      .catch(erro => {
        console.log(erro)
      });
  }
  useEffect(() => {
    // get restaurants
    loadData('http://localhost:8000/api/v1/restaurantes/')
  }, []);

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurants?.map(item => <Restaurant restaurant={item} key={item.id} />)}
    {<button onClick={() => loadData(previousPage)} disabled={!previousPage}>
      Página Anterior
    </button>}
    {<button onClick={() => loadData(nextPage)} disabled={!nextPage}>
      Próxima página
    </button>}
  </section>)
}

export default ListRestaurants;