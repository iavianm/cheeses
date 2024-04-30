import styles from "./page.module.css";
import ProductionPage from "@/components/ProductionPage/ProductionPage";

const Catalog = () => {
  return (
    <main className={styles.main}>
      <ProductionPage />
    </main>
  );
};

export default Catalog;
