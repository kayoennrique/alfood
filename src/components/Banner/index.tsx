import styles from './Banner.module.scss';

const Banner = () => {
  return (<section className={styles.BannerArea}>
    <div className={styles.Container}>
      <h1 className={styles.Title}>AlFood</h1>
      <p>Felicidade em cada prato.</p>
    </div>
  </section>)
}

export default Banner