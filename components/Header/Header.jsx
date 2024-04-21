"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import Burgermenu from "@/components/Burgermenu/Burgermenu";
import { useState, useEffect } from "react";

function Header() {
  const [burgerOpened, setBurgerOpened] = useState(false);

  function handleOpenBurger() {
    setBurgerOpened(!burgerOpened);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/" className={styles.header__logo} />
        <Navigation navLinks={navItems} />
      </div>
      <button className={styles.header_burger__btn} onClick={handleOpenBurger}>
        <img
          className={styles.header_burger__img}
          src="/images/burger-icon.svg"
          alt="кнопка меню"
        ></img>
      </button>
      <Burgermenu isOpen={burgerOpened} onClose={handleOpenBurger} />
    </header>
  );
}

export default Header;
