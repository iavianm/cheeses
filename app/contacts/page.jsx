import styles from "./page.module.css";
import FeedbackBlock from "@/components/FeedbackBlock/FeedbackBlock";
import ContactPage from "@/components/ContactPage/ContactPage";

const Contacts = () => {
  return (
    <main className={styles.main}>
      <ContactPage />
      <FeedbackBlock title={"ДЛЯ ВОПРОСОВ И ПРЕДЛОЖЕНИЙ"} />
    </main>
  );
};

export default Contacts;
