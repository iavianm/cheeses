"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import { ReactSVG } from "react-svg";

const Navigation = (props) => {
  const pathname = usePathname();

  return (
    <ul className={styles.nav__menu}>
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
  );
};

export default Navigation;
