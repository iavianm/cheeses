"use client";
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactSVG } from "react-svg";

function BurgerMenu(props) {
  const pathname = usePathname();
  const [burgerOpened, setBurgerOpened] = useState(false);

  function handleOpenBurger() {
    setBurgerOpened(!burgerOpened);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setBurgerOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button className={styles.header_burger__btn} onClick={handleOpenBurger}>
        <img
          className={styles.header_burger__img}
          src="/images/burger-icon.svg"
          alt="menu_button"
        ></img>
      </button>

      <div
        className={`${styles.burger__overlay} ${
          burgerOpened ? styles.burger__overlay_visible : ""
        }`}
        onClick={() => setBurgerOpened(false)}
      >
        <div
          className={`${styles.burger__menu} ${
            burgerOpened ? styles.burger__menu_visible : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.burger__close} onClick={handleOpenBurger}>
            <img
              src="/images/close-icon.svg"
              alt="close_button"
              className={styles.image__close}
            ></img>
          </button>
          <nav className={styles.burger__nav}>
            <ul className={styles.burger__list}>
              {props.navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={
                        isActive
                          ? `${styles.active} ${styles.nav__menu_item}`
                          : styles.nav__menu_item
                      }
                      onClick={handleOpenBurger}
                    >
                      <ReactSVG
                        src={link.src}
                        alt={link.label}
                        className={styles.nav__icon}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
