import IDish from '../../../interfaces/IDish';
import styles from './Dish.module.scss';

interface DishProps {
  dish: IDish
}

const Dish = ({ dish }: DishProps) => {
  return (<div className={styles.Dish}>
    <div className={styles.Container}>
      <div>
        <div className={styles.TorsionEffect}>
          <img src={dish.image} alt={dish.description}/>
        </div>
      </div>
    </div>
    <div className={styles.Content}>
      <h3>{dish.name}</h3>
      <div className={styles.Tag}>
        {dish.tag}
      </div>
      <div>
        {dish.description}
      </div>
    </div>
  </div>)
}

export default Dish