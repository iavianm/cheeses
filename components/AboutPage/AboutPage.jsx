import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <h2 className={styles.about__title}>Ясногорские сыры</h2>
        <div className={styles.about__text_container}>
          <div className={styles.about__text}>
            <p>Тульская область, Ясногорский район,</p>
            <p>д. Санталово</p>
          </div>
          <div className={styles.about__contacts}>
            <a className={styles.about__contacts_link} href="tel:+79215567284">
              +7 920 888 88 88
            </a>
            <a
              className={styles.about__contacts_link}
              href="mailto:somesite@yandex.ru"
            >
              somesite@yandex.ru
            </a>
          </div>
        </div>

        <iframe
          className={styles.about__frame}
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae2661b511a3fe510ae16db10366045a2d81dde9c3c6d228499506e79bcbe1c0d&amp;source=constructor"
        ></iframe>
      </div>
    </section>
  );
};

export default AboutPage;
