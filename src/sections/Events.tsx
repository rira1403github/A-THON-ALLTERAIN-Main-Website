"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Events.module.css";

const events = [
  {
    id: 1,
    title: "AUTOSHOW 2024",
    description: `A-THON made history at the International Auto Show 2024, held at Bangalore Palace Grounds, by unveiling India’s first homegrown ATV, the Ashva 4X4. Engineered for agriculture, adventure, and extreme off-road applications, it features a 976cc V-twin engine, 2WD/4WD with locking differentials, and advanced suspension for superior control and durability. Available in four variants, the Ashva 4X4 redefines all-terrain mobility with power, precision, and innovation.`,
    img: "/assets/landingPage/Event1.webp",
  },
  {
    id: 2,
    title: "VROOM EVENT",
    description: `A-THON took centre stage at the 11th Edition of the VROOM Drag Meet 2024, showcasing its next-generation ATVs, the ASHVA 4X4 and ASHVA 6X6. With elite priority access, A-THON demonstrated its commitment to high-performance off-road vehicles, setting new benchmarks in power sports innovation and redefining all-terrain capabilities.`,
    img: "/assets/landingPage/Event2.webp",
  },
  {
    id: 3,
    title: "BHARAT MOBILITY EXPO",
    description: `At the Bharat Mobility Global Expo 2025, held at New Delhi, A-THON introduced its latest ATV innovations, featuring the ASHVA 4X4 and ASHVA 6X6. Built for extreme terrains and specialized applications, these vehicles combine power, agility, and durability to push the boundaries of off-road performance. A-THON’s showcase emphasized its commitment to innovation and versatility, catering to industries requiring rugged, high-performance mobility solutions.`,
    img: "/assets/landingPage/Event3.webp",
  },
  {
    id: 4,
    title: "UDYAMI VOKKALIGA",
    description: `At the Udyami Vokkaliga Expo 2025, A-THON showcased the ASHVA 4X4 and ASHVA 6X6. Designed for agriculture and industrial applications, these ATVs offer enhanced mobility, durability, and efficiency. The event provided a strategic platform for A-THON to engage with entrepreneurs and industry leaders, reinforcing its role in advancing all-terrain mobility solutions.`,
    img: "/assets/landingPage/Event4.webp",
  },
  {
    id: 5,
    title: "INVEST KARANATKA",
    description: `A-THON made a strong impact at Invest Karnataka 2025, showcasing its advanced ATV technology and reinforcing its role as a leader in all-terrain mobility. With the ASHVA 4X4 and ASHVA 6X6, A-THON highlighted high-performance solutions for agriculture, defense, and industrial applications. Engaging with investors and industry leaders, the company positioned Karnataka as a hub for ATV innovation, shaping the future of off-road mobility.`,
    img: "/assets/landingPage/Event5.webp",
  },
];

const Events: React.FC = () => {
  return (
    <section className={styles.events}>
      <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Events</h2>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className={styles.slider}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={event.img}
                  alt={event.title}
                  width={500}
                  height={400}
                  className={styles.image}
                />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
                <div className={`${styles.paginationWrapper} swiper-pagination`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Events;