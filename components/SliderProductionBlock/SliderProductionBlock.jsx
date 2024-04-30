"use client";
import styles from "./SliderProductionBlock.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Link from "next/link";

const SliderProductionBlock = (props) => {
  return (
    <section>
      <div className={styles.slider__section_prod}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: `.${styles.pagination__container_prod}`,
          }}
          scrollbar={{ draggable: true }}
          // navigation
          loop={true}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          speed={900}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {props.content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slider__block_container_prod}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.slider__img_prod}
                />
                <div className={styles.lot__hover}>
                  <ul className={styles.lot__list}>
                    {item.short.map((item, i) => {
                      return (
                        <li key={i}>
                          {item.title}
                          <span className={styles.lot__dashed}>
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href={`/catalog/${item.id}`}
                    className={styles.lot__button}
                  >
                    подробнее
                  </Link>
                </div>
              </div>
              <Link href={`/catalog/${item.id}`} className={styles.lot__link}>
                {item.title}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination__container_prod}></div>
      </div>
    </section>
  );
};
export default SliderProductionBlock;
