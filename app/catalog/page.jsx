import styles from "./page.module.css";
import AboutPage from "@/components/AboutPage/AboutPage";
import FeedbackBlock from "@/components/FeedbackBlock/FeedbackBlock";

const Catalog = () => {
  return (
    <main className={styles.main}>
      <AboutPage />
      <FeedbackBlock />
    </main>
  );
};

export default Catalog;
