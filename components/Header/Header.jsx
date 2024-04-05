"use client";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/" className={styles.header__logo} />
      </div>
    </header>
  );
}

export default Header;
