"use client";
import styles from "./FeedbackBlock.module.css";
import { useEffect, useState } from "react";
import { normalizePhone } from "@/functions/normalize_phone";

function FeedbackBlock({ title }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notRobotChecked, setNotRobotChecked] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [formData, setFormData] = useState(false);

  const handleInputChange = (e) => {
    let filteredValue = e.target.value;

    let phone = normalizePhone(filteredValue);

    setPhone(phone);
  };

  useEffect(() => {
    const isValid =
      (name && phone && notRobotChecked && consentChecked) || false;
    setFormData(isValid);
  }, [name, phone, notRobotChecked, consentChecked]);

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
                  onChange={(e) => setName(e.target.value)}
                  className={styles.feedback__input_group}
                />
              </div>

              <div className={styles.feedback__input_block}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (XXX) XXX-XX-XX"
                  onChange={handleInputChange}
                  value={phone}
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
                <input
                  type="checkbox"
                  id="not-robot"
                  name="not-robot"
                  onChange={(e) => setNotRobotChecked(e.target.checked)}
                />
                <label htmlFor="not-robot">Я не робот</label>
              </div>
              <div className={styles.feedback__checkbox_group}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  onChange={(e) => setConsentChecked(e.target.checked)}
                />
                <label htmlFor="consent">
                  Отправляя данные из этой формы, вы даете согласие на обработку
                  персональных данных
                </label>
              </div>
              <div className={styles.feedback__submit_place}>
                <button
                  className={styles.feedback__submit_button}
                  type="submit"
                  disabled={!formData}
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
