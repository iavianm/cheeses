import styles from "./Card.module.css";
import Image from "next/image";

function Card({ content }) {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <div className={styles.card__image_block}>
          <Image
            src={content.src}
            width={500}
            height={500}
            alt={content.alt}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.card__text}>
          <h1 className={styles.card__title}>{content.title}</h1>
          <p className={styles.card__description}>{content.description}</p>
          <div className={styles.card__characteristic}>
            {content.characteristic.map((item, i) => {
              return (
                <div key={i} className={styles.characteristic}>
                  <p className={styles.characteristic__title}>{item.title}</p>
                  <p className={styles.characteristic__text}>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.card__about}>
            <h2 className={styles.card__subtitle}>состав</h2>
            <p className={styles.card__composition}>{content.composition}</p>
          </div>
          <div className={styles.card__table}>
            <h2 className={styles.card__subtitle}>
              технические характеристики
            </h2>
            <table>
              <tbody className={styles.table}>
                {content.table.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.title}</td>
                      <td>{item.text}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
