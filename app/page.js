import styles from "./page.module.css";
import SliderBlock from "@/components/SliderBlock/SliderBlock";
import { cheesesImages } from "../content/sliderCheesesImages.json";
import ProductionBlock from "@/components/ProductionBlock/ProductionBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import AboutBlock from "@/components/AboutBlock/AboutBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <SliderBlock content={cheesesImages} />
      <ProductionBlock />
      <AboutBlock />
      <PartnersBlock />
    </main>
  );
}
