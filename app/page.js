import styles from "./page.module.css";
import SliderBlock from "@/components/SliderBlock/SliderBlock";
import cheesesData from "@/content/sliderCheesesImages.json";
import ProductionBlock from "@/components/ProductionBlock/ProductionBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import AboutBlock from "@/components/AboutBlock/AboutBlock";
import FeedbackBlock from "@/components/FeedbackBlock/FeedbackBlock";

export default function Home() {
  return (
    <main className={styles.main}>
      <SliderBlock content={cheesesData.cheesesImages} />
      <ProductionBlock />
      <AboutBlock />
      <PartnersBlock />
      <FeedbackBlock title={"ДЛЯ ВОПРОСОВ И ПРЕДЛОЖЕНИЙ"} />
    </main>
  );
}
