"use client";
import styles from "./Lot.module.css";

import Link from "next/link";

function Lot() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.lot}>
          <h2 className={styles.lot__title}>Вам может также понравиться</h2>
          <div className={styles.lot__wrapper}>
            <div className={styles.lot__card}>
              <div className={styles.lot__image}>
                <img
                  src="/images/brie__alti.png"
                  alt="сыр в многоугольной упаковке"
                />
                <div className={styles.lot__hover}>
                  <ul className={styles.lot__list}>
                    <li>
                      Вес <span className={styles.lot__dashed}>125 грамм </span>
                    </li>
                    <li>
                      МЖД <span className={styles.lot__dashed}>50 % </span>
                    </li>
                    <li>
                      Срок хранения
                      <span className={styles.lot__dashed}>60 суток </span>
                    </li>
                  </ul>
                  <a href="" className={styles.lot__button}>
                    подробнее
                  </a>
                </div>
              </div>
              <h3 className={styles.lot__name}>
                <a href="">brie alti</a>
              </h3>
              <p className={styles.lot__pretitle}>hit</p>
            </div>
            <div className={styles.lot__card}>
              <div className={styles.lot__image}>
                <img
                  src="/images/brie__alti.png"
                  alt="сыр в многоугольной упаковке"
                />
                <div className={styles.lot__hover}>
                  <ul className={styles.lot__list}>
                    <li>
                      Вес <span className={styles.lot__dashed}>125 грамм </span>
                    </li>
                    <li>
                      МЖД <span className={styles.lot__dashed}>50 % </span>
                    </li>
                    <li>
                      Срок хранения
                      <span className={styles.lot__dashed}>60 суток </span>
                    </li>
                  </ul>
                  <a href="" className={styles.lot__button}>
                    подробнее
                  </a>
                </div>
              </div>
              <h3 className={styles.lot__name}>
                <a href="">brie alti</a>
              </h3>
              <p className={styles.lot__pretitle}>hit</p>
            </div>
            <div className={styles.lot__card}>
              <div className={styles.lot__image}>
                <img
                  src="/images/brie__alti.png"
                  alt="сыр в многоугольной упаковке"
                />
                <div className={styles.lot__hover}>
                  <ul className={styles.lot__list}>
                    <li>
                      Вес <span className={styles.lot__dashed}>125 грамм </span>
                    </li>
                    <li>
                      МЖД <span className={styles.lot__dashed}>50 % </span>
                    </li>
                    <li>
                      Срок хранения
                      <span className={styles.lot__dashed}>60 суток </span>
                    </li>
                  </ul>
                  <a href="" className={styles.lot__button}>
                    подробнее
                  </a>
                </div>
              </div>
              <h3 className={styles.lot__name}>
                <a href="">brie alti</a>
              </h3>
              <p className={styles.lot__pretitle}>hit</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Lot;
