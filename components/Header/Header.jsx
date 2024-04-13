import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo} />
      <div className={styles.header__body}>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
}

export default Header;
