import IRestaurant from '../../interfaces/IRestaurant';
import style from './ListRestaurants.module.scss';
import Restaurant from './Restaurant';

const ListRestaurants = () => {

  const restaurants: IRestaurant[] = [
    {
      id: 1,
      name: "Lyllys Cafe",
      dishes: [
        {
          id: 1,
          description: 'Lasanha à Bolonhesa',
          image: 'https://receitassaborosa.com/wp-content/uploads/2019/12/Lasanha-com-Molho-a-Bolonhesa.jpg',
          name: 'Lasanha',
          restaurant: 1,
          tag: 'Italiana'
        },
        {
          id: 2,
          description: 'Strogonoff de Frango à brasileira',
          image: 'https://img.itdg.com.br/images/recipes/000/002/462/332854/332854_original.jpg',
          name: 'Strogonoff',
          restaurant: 1,
          tag: 'Russa'
        },
        {
          id: 3,
          description: 'Empadão de Frango',
          image: 'https://t1.uc.ltmcdn.com/pt/images/5/7/1/img_como_fazer_empadao_de_frango_27175_600.jpg',
          name: 'Empadão de Frango',
          restaurant: 1,
          tag: 'Portuguesa'
        }
      ]
    },
    {
      id: 2,
      name: "Sugiro Sushi",
      dishes: [
        {
          id: 1,
          description: 'Combinado de 8 peças',
          image: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
          name: 'Sushi',
          restaurant: 1,
          tag: 'Japonesa'
        },
        {
          id: 2,
          description: 'Sashimi de Salmão',
          image: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
          name: 'Sashimi',
          restaurant: 1,
          tag: 'Japonesa'
        }
      ]
    },
    {
      id: 3,
      name: "Cantina da Escola",
      dishes: [
        {
          id: 1,
          description: 'Salgado de queijo com presunto',
          image: 'https://img.itdg.com.br/tdg/images/recipes/000/102/312/279767/279767_original.jpg',
          name: 'Quejunto',
          restaurant: 1,
          tag: 'Lanche'
        },
        {
          id: 2,
          description: 'Coxinha de Frango',
          image: 'https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg',
          name: 'Coxinha',
          restaurant: 1,
          tag: 'Lanche'
        },
        {
          id: 3,
          description: 'Risole de Palmito',
          image: 'https://img.itdg.com.br/tdg/images/recipes/000/005/116/323871/323871_original.jpg',
          name: 'Risole',
          restaurant: 1,
          tag: 'Lanche'
        }
      ]
    }
  ]

  return (<section className={style.ListRestaurants}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurants?.map(item => <Restaurant restaurant={item} key={item.id} />)}
  </section>)
}

export default ListRestaurants