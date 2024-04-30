import styles from "./ProductionBlock.module.css";
import Link from "next/link";
import SliderProductionBlock from "@/components/SliderProductionBlock/SliderProductionBlock";
import { productionContent } from "@/content/productionContent.json";

function ProductionBlock() {
  return (
    <section className={styles.production__section}>
      <div className={styles.production__container}>
        <div className={styles.production__head}>
          <h1 className={styles.production__head_title}>Продукция</h1>
          <Link className={styles.production__head_link} href={"/catalog"}>
            смотреть все
          </Link>
        </div>
        <div className={styles.production__slider}>
          <SliderProductionBlock content={productionContent} />
        </div>
      </div>
    </section>
  );
}

export default ProductionBlock;
