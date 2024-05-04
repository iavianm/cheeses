import styles from "@/components/PartnersBlock/PartnersBlock.module.css";
import Link from "next/link";
import SliderPartnersBlock from "@/components/SliderPartnersBlock/SliderPartnersBlock";
import partnersData from "@/content/sliderPartnersImages";

function PartnersBlock() {
  return (
    <section className={styles.partners__section}>
      <div className={styles.partners__container}>
        <div>
          <div className={styles.partners__head}>
            <h1 className={styles.partners__head_title}>Партнеры</h1>
            <Link className={styles.partners__head_link} href={"/partners"}>
              смотреть все
            </Link>
          </div>
          <article className={styles.partners__article}>
            Наши продукты, созданные с учетом передовых разработок, полностью
            соответствуют отечественным нормам и международным стандартам
            качества. Это стало возможным благодаря тесному взаимодействию с
            ведущими предприятиями общественного питания и крупнейшими
            розничными сетями, что позволяет нам стабильно проходить независимый
            аудит и укреплять партнерские отношения с ключевыми дистрибьюторами
            в различных регионах.
          </article>
        </div>

        <SliderPartnersBlock content={partnersData.partnersImages} />
      </div>
    </section>
  );
}

export default PartnersBlock;
