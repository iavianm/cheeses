import styles from "./PartnersPage.module.css";
import { partnersImages } from "../../content/sliderPartnersImages.json";
import styles2 from "@/components/SliderProductionBlock/SliderProductionBlock.module.css";
import styles3 from "@/components/ProductionPage/ProductionPage.module.css";
import Image from "next/image";

function PartnersPage() {
  return (
    <section className={styles.partners__section}>
      <div className={styles3.production__container}>
        <div className={styles.grid__container}>
          {partnersImages.map((item, i) => {
            return (
              <div key={i} className={styles.grid__item}>
                <div className={styles.image__container}>
                  <Image
                    src={item.src}
                    layout="fill"
                    style={{ objectFit: "contain" }}
                    alt={item.alt}
                  />
                </div>
                <p>{item.title}</p>
                <div className={styles2.lot__hover}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PartnersPage;
