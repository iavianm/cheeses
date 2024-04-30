import styles from "./AboutBlock.module.css";

function AboutBlock() {
  return (
    <section className={styles.about__block}>
      <div className={styles.about__article_container}>
        <div className={styles.about__article_back}>
          <h3 className={styles.about__title}>О нас</h3>
          <p className={styles.about__text}>
            <span className={styles.about__span}>
              Компания ООО «Ясногорские сыры» специализируется на производстве
              сыра и сырных продуктов для промышленного производства
              полуфабрикатов, мясных и хлебобулочных продуктов. Основным видом
              деятельности является: «Производство сыра и сырных продуктов».
            </span>
            <span className={styles.about__span}>
              С 2017 года мы производим имитационные и аналоговые сыры, а также
              сырный продукт. За это время мы сформировали профессиональную
              команду менеджеров и технологов, наработали собственную научную
              базу. За довольно короткий срок у нашей компании появилось много
              клиентов.
            </span>
            <span className={styles.about__span}>
              В производстве продуктов мы ориентируемся на передовые европейские
              предприятия. Потребность в наших продуктах постоянно растет,
              поэтому мы постоянно расширяем ассортимент и совершенствуем
              рецептуры.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
