import styles from "./ProductionPage.module.css";
import styles2 from "../SliderProductionBlock/SliderProductionBlock.module.css";

import { productionContent } from "../../content/productionContent.json";
import Image from "next/image";
import Link from "next/link";

function ProductionPage() {
  return (
    <section className={styles.production__section}>
      <div className={styles.production__container}>
        <div className={styles.grid__container}>
          {productionContent.map((item, i) => {
            return (
              <div key={i} className={styles.grid__item}>
                <div className={styles2.slider__block_container_prod}>
                  <div className={styles.image__container}>
                    <Image
                      src={item.src}
                      layout="fill"
                      objectFit="cover"
                      alt={item.alt}
                    />
                  </div>

                  <div className={styles2.lot__hover}>
                    <ul className={styles2.lot__list}>
                      {item.short.map((item, i) => {
                        return (
                          <li key={i}>
                            {item.title}
                            <span className={styles2.lot__dashed}>
                              {item.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <Link
                      href={`/catalog/${item.id}`}
                      className={styles2.lot__button}
                    >
                      подробнее
                    </Link>
                  </div>
                </div>
                <Link
                  href={`/catalog/${item.id}`}
                  className={styles2.lot__link}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductionPage;
