"use client";
import styles from "./Burgermenu.module.css";
import Link from "next/link";

export default function Burgermenu({ isOpen, onClose }) {
  return isOpen ? (
      <div className={styles.burger__overlay}>
        <div className={styles.burger__menu}>
          <button className={styles.burger__close} onClick={onClose}>
            <img src="/images/close-icon.svg" alt="крестик" className={styles.image__close}></img>
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
  ) : null;
}

