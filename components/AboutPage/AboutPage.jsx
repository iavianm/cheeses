import styles from "./AboutPage.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <div className={styles.about__title_container}>
          <h2 className={styles.about__title}>О нас</h2>
        </div>
        <div className={styles.about__body}>
          <div className={styles.about__text_container}>
            <div className={styles.about__text}>
              <h3 className={styles.about__text_title}>
                Компания ООО «Ясногорские сыры» специализируется на производстве
                сыра и сырных продуктов для промышленного производства
                полуфабрикатов, мясных и хлебобулочных продуктов. Основным видом
                деятельности является: «Производство сыра и сырных продуктов».
              </h3>
              <p className={styles.about__text_body}>
                С 2017 года мы производим имитационные и аналоговые сыры, а
                также сырный продукт. За это время мы сформировали
                профессиональную команду менеджеров и технологов, наработали
                собственную научную базу. За довольно короткий срок у нашей
                компании появилось много клиентов.
              </p>
              <p className={styles.about__text_body}>
                В производстве продуктов мы ориентируемся на передовые
                европейские предприятия. Потребность в наших продуктах постоянно
                растет, поэтому мы постоянно расширяем ассортимент и
                совершенствуем рецептуры.
              </p>
              <p className={styles.about__text_body}>
                Наша компания производит сыр высшего качества, из
                пастеризованного молока, закваски термофильных молочнокислых
                микроорганизмов, поваренной пищевой соли, лимонной кислоты с
                добавлением натурального сливочного масла. Благодаря этому наш
                сыр идеально плавится, не выделяет жира, не «высыхает» и
                сохраняет характерную тягучесть даже после того, как блюдо
                остыло.
              </p>
            </div>
          </div>
          <div className={styles.about__image_container}>
            <Image
              src={"/images/photorealistic.webp"}
              alt={"image"}
              layout="fill"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
