import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation";
import { navItems } from "../../content/navItemsContent.json";
import OrderPopup from "@/components/OrderPopup/OrderPopup";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__body}>
        <Link href="/" className={styles.header__logo} />
        <Navigation navLinks={navItems} />
        <OrderPopup />
      </div>
    </header>
  );
}

export default Header;
