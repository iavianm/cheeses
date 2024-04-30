import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__container}>
        <div className={styles.about__title_container}>
          <h2 className={styles.about__title}>Контакты</h2>
          <div className={styles.about__body}>
            <div className={styles.about__text_container}>
              <div className={styles.about__text}>
                <p>Тульская область</p>
                <p>Ясногорский район, пос. Санталовский, ул. Дорожная, д. 3</p>
              </div>
              <a
                className={styles.about__contacts_phone}
                href="tel:+79105899322"
              >
                +7 910 589 93 22
              </a>
              <a
                className={styles.about__contacts_email}
                href="mailto:89105899322@mail.ru"
              >
                89105899322@mail.ru
              </a>
            </div>
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

export default ContactPage;
