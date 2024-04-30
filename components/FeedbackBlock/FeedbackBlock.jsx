import styles from "./FeedbackBlock.module.css";

function FeedbackBlock({ title }) {
  return (
    <div className={styles.feedback__container}>
      <div className={styles.feedback__block}>
        <form action="/" method="post">
          <h2 className={styles.feedback__title}>{title}</h2>
          <div className={styles.feedback__form_container}>
            <div className={styles.feedback__form_group}>
              <div className={styles.feedback__input_block}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ваше имя"
                  className={styles.feedback__input_group}
                />
              </div>

              <div className={styles.feedback__input_block}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  className={styles.feedback__input_group}
                />
              </div>
              <div className={styles.feedback__input_block}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Тема письма"
                  className={styles.feedback__input_group}
                />
              </div>
              <div className={styles.feedback__area_block}>
                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  placeholder="Текст письма"
                  className={styles.feedback__area_group}
                ></textarea>
              </div>

              <div className={styles.feedback__checkbox_group}>
                <input type="checkbox" id="not-robot" name="not-robot" />
                <label htmlFor="not-robot">Я не робот</label>
              </div>
              <div className={styles.feedback__checkbox_group}>
                <input type="checkbox" id="consent" name="consent" />
                <label htmlFor="consent">
                  Отправляя данные из этой формы, вы даете согласие на обработку
                  персональных данных
                </label>
              </div>
              <div className={styles.feedback__submit_place}>
                <button
                  className={styles.feedback__submit_button}
                  type="submit"
                >
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackBlock;
