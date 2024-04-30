import styles from "./page.module.css";
import FeedbackBlock from "@/components/FeedbackBlock/FeedbackBlock";
import ContactPage from "@/components/ContactPage/ContactPage";

const Contacts = () => {
  return (
    <main className={styles.main}>
      <ContactPage />
      <FeedbackBlock />
    </main>
  );
};

export default Contacts;
