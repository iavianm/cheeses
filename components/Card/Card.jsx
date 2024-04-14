"use client";
import styles from "./Card.module.css";
import Link from "next/link";

function Card() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.card}>
          <div className={styles.card__image}>
            <img
              src="/images/Brie_Triangle.png"
              alt="Изображение сыра треугольной формы"
              className={styles.picture}
            />
          </div>
          <div className={styles.card__text}>
            <p className={styles.card__pretitle}>hit</p>
            <h1 className={styles.card__title}>brie alti треугольник</h1>
            <p className={styles.card__description}>
              Brie Alti треугольной формы – это мягкий сыр с изумительным
              сливочным вкусом и ароматом, раскрывающимся пикантной остринкой в
              течение всего срока хранения. Alti Brie прекрасно подойдет к
              праздничному столу, послужит изысканным дополнением к красным,
              белым и игристым винам.
            </p>
            <div className={styles.card__characteristic}>
              <div className={styles.characteristic}>
                <p className={styles.characteristic__title}>50 суток</p>
                <p className={styles.characterictic__text}>хранение</p>
              </div>
              <div className={styles.characteristic}>
                <p className={styles.characteristic__title}>125 грамм</p>
                <p className={styles.characterictic__text}>фасовка</p>
              </div>
              <div className={styles.characteristic}>
                <p className={styles.characteristic__title}>60%</p>
                <p className={styles.characterictic__text}>жирность</p>
              </div>
            </div>
            <div className={styles.card__about}>
              <h2 className={styles.card__subtitle}>состав</h2>
              <p className={styles.card__composition}>
                Молоко нормализованное, соль пищевая, мезофильные и термофильные
                заквасочные микроорганизмы, культура плесени Penicillium
                Candidum, культура плесени Geotrichum Candidum,
                молокосвертывающий ферментный препарат микробного происхождения.
              </p>
            </div>
            <div className={styles.card__table}>
              <h2 className={styles.card__subtitle}>
                технические характеристики
              </h2>
              <table>
                <tbody className={styles.table}>
                  <tr>
                    <td>БЖУ</td>
                    <td>15 / 30 / 2,76</td>
                  </tr>
                  <tr>
                    <td>Энергетическая ценность</td>
                    <td>1365 кДж / 330 ккал</td>
                  </tr>
                  <tr>
                    <td>Размер упаковки</td>
                    <td>120х100х30 мм</td>
                  </tr>
                  <tr>
                    <td>Транспортная упаковка</td>
                    <td>8(4)х125 г</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.gallery}>
              <ul className={styles.gallery__list}>
                <li className={styles.gallery__item}>
                  <a href="" className={styles.gallery__link}>
                    <img
                      className={styles.gallery__image}
                      src="/images/card_all.jpg"
                      alt="изображение сыра на столе"
                    />
                  </a>
                </li>
                <li className={styles.gallery__item}>
                  <a href="" className={styles.gallery__link}>
                    <img
                      className={styles.gallery__image}
                      src="/images/card_all.jpg"
                      alt="изображение сыра на столе"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <a href="" className={styles.card__button}>
              где купить
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Card;
