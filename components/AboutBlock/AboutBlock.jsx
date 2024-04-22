import styles from "./AboutBlock.module.css";
import { metadata as ыstyles } from "@/app/layout";

function AboutBlock() {
  return (
    <section className={styles.about__block}>
      <img
        src={"/images/cheese5.webp"}
        alt={"background"}
        className={styles.about__back}
      />
      <article className={styles.about__article}>
        <div className={styles.about__article_container}>
          <div className={styles.about__article_back}>
            <h3 className={styles.about__title}>О нас</h3>
            <p className={styles.about__text}>
              <span className={styles.about__span}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
                alias aspernatur beatae blanditiis commodi corporis dignissimos
                distinctio facilis fugiat fugit incidunt iusto libero, odio quae
                quos ratione sapiente ut veniam?
              </span>
              <span className={styles.about__span}>
                Ad architecto dicta distinctio, eligendi eos error fugit id
                ipsam natus non nulla numquam quasi quod recusandae tempore ut
                veritatis voluptas. A architecto deleniti dignissimos earum fuga
                impedit quia quis.
              </span>
              <span className={styles.about__span}>
                Aliquid, beatae consequatur culpa cumque deleniti dolore dolores
                doloribus eaque expedita harum hic ipsam iure laudantium libero
                maxime, molestiae neque nihil non nulla numquam omnis qui
                quisquam, ratione suscipit voluptatem!
              </span>
              <span className={styles.about__span}>
                Aperiam doloribus esse mollitia nemo numquam officia quasi quo
                ratione repellat temporibus? A ab amet aut dolore ex iste
                laborum, natus perferendis quidem voluptates! Aspernatur dolor
                maxime perferendis porro quibusdam.
              </span>
              <span className={styles.about__span}>
                Alias beatae consequuntur deleniti eveniet fugit illum impedit
                inventore ipsam magnam maxime molestias necessitatibus nemo non
                nulla officia perferendis, porro quaerat quam sapiente sequi
                similique sint suscipit tempora tenetur vitae.
              </span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutBlock;
