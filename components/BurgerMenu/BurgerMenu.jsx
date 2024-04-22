"use client";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import { useState } from "react";

function BurgerMenu() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  function handleOpenBurger() {
    setBurgerOpened(!burgerOpened);
  }

  return (
    <>
      <button className={styles.header_burger__btn} onClick={handleOpenBurger}>
        <img
          className={styles.header_burger__img}
          src="/images/burger-icon.svg"
          alt="кнопка меню"
        ></img>
      </button>
      {burgerOpened ? (
        <div className={styles.burger__overlay}>
          <div className={styles.burger__menu}>
            <button className={styles.burger__close} onClick={handleOpenBurger}>
              <img
                src="/images/close-icon.svg"
                alt="крестик"
                className={styles.image__close}
              ></img>
            </button>
            <nav className={styles.burger__nav}>
              <ul className={styles.burger__list}>
                <li>
                  <Link href="/" className={styles.burger__item}>
                    Продукция
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.burger__item}>
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.burger__item}>
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="/" className={styles.burger__item}>
                    Партнеры
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default BurgerMenu;
