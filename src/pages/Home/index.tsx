import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Home.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className={styles.MiniBanners}>
        <img src="/images/cooking_01.jpg" alt="Um prato conceitual" />
        <div className={styles.CardCentral}>
          <h2>A melhor rede de restaurantes!</h2>
          <div>
            <p>seja um parceiro agora:</p>
            <p>ligue para <a href="callto:99999999999">(99) 99999-999</a></p>
          </div>
        </div>
        <img src="/images/cooking_02.jpg" alt="Um hambúrguer desconstruído" />
      </div>
      <div className={styles.Categories}>
        <div className={styles.DishType}>
          <img src="/images/breakfast.png" alt="Café da manhã" />
          <h4>Café da manhã</h4>
        </div>
        <div className={styles.DishType}>
          <img src="/images/lunch.png" alt="Almoço" />
          <h4>Almoço</h4>
        </div>
        <div className={styles.DishType}>
          <img src="/images/to_have_lunch.png" alt="Jantar" />
          <h4>Jantar</h4>
        </div>
        <div className={styles.DishType}>
          <img src="/images/dessert.png" alt="Sobremesas" />
          <h4>Sobremesas</h4>
        </div>
      </div>
      <div className={styles.Links}>
        <h3>Conheça os melhores restaurantes</h3>
        <p>Clique <Link to='/restaurantes'>aqui</Link></p>
      </div>
      <Footer />
    </>
  );
}

export default App;
