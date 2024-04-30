"use client";
import styles from "./SliderPartnersBlock.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

function SliderPartnersBlock(props) {
  return (
    <section>
      <div className={styles.slider__section_prod}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
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
            440: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
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
                <div className={styles.lot__hover}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination__container_prod}></div>
      </div>
    </section>
  );
}

export default SliderPartnersBlock;
