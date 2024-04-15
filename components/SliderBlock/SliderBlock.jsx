"use client";
import styles from "./SliderBlock.module.css";
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

const SliderBlock = (props) => {
  return (
    <section className={styles.slider__section}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={900}
      >
        {props.content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slider__block_container}>
              <div className={styles.slider__block}>
                <h3 className={styles.slider__block_title}>{item.title}</h3>
                <Link className={styles.slider__block_button} href={item.link}>
                  Подробнее
                </Link>
              </div>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.slider__img}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default SliderBlock;
