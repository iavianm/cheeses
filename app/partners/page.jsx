import styles from "./page.module.css";
import PartnersPage from "@/components/PartnersPage/PartnersPage";
import FeedbackBlock from "@/components/FeedbackBlock/FeedbackBlock";

const Partners = () => {
  return (
    <main className={styles.main}>
      <PartnersPage />
      <FeedbackBlock title={"СТАТЬ ПАРТНЕРОМ"} />
    </main>
  );
};

export default Partners;
