import styles from "./page.module.css";
import SliderBlock from "@/components/SliderBlock/SliderBlock";
import { cheesesImages } from "../content/sliderCheesesImages.json";
import ProductionBlock from "@/components/ProductionBlock/ProductionBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <SliderBlock content={cheesesImages} />
      <ProductionBlock />
    </main>
  );
}
