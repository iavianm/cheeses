import styles from "./Footer.module.css";
import Link from "next/link";
import { navItems } from "@/content/navItemsContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__section}>
          <Link href="/" className={styles.footer__link}>
            <img
              src={"/images/logoY.png"}
              alt={"logo"}
              className={styles.footer__logo}
            />
          </Link>
          <ul className={styles.footer__nav}>
            {navItems.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              );
            })}
          </ul>

          <address className={styles.footer__address}>
            {/*<div>*/}
            {/*  <p className={styles.footer__address_text}>*/}
            {/*    Тульская область, Ясногорский район,*/}
            {/*  </p>*/}
            {/*  <p className={styles.footer__address_text}>д. Санталово</p>*/}
            {/*</div>*/}

            <div className={styles.footer__address_links}>
              <a href="tel:+79105899322">+7 910 589 93 22</a>

              <a href="mailto:89105899322@mail.ru">89105899322@mail.ru</a>
            </div>
          </address>
        </div>
        <div className={`${styles.footer__section} ${styles.footer__copy}`}>
          <p>&copy;{currentYear} Ясногорские сыры. Все права защищены</p>
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
