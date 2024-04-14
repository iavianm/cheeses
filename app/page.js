import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import Lot from "@/components/Lot/Lot";

export default function Home() {
  return <main className={styles.main}>
    <Card />
    <Lot />
    
  </main>;
}
