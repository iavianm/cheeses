import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "@/content/navItemsContent.json";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/" className={styles.header__logo} />
        <Navigation navLinks={navItems} />
        <BurgerMenu navLinks={navItems} />
      </div>
    </header>
  );
}

export default Header;
