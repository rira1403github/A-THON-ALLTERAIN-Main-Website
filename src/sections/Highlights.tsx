"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Highlights.module.css";

interface Highlight {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export default function Highlights() {
  const highlights: Highlight[] = [
    {
      id: 1,
      img: "/assets/landingPage/high-main-1.webp",
      title: "India’s First Homegrown ATV",
      desc: "A-THON made history by unveiling the Ashva 4X4, designed and engineered in India for agriculture, adventure, and extreme off-road use.",
    },
    {
      id: 2,
      img: "/assets/landingPage/high-main-2.webp",
      title: "Powerful Engineering",
      desc: "Powered by a 976cc V-twin engine with advanced suspension and 2WD/4WD locking differentials for durability and control on any terrain.",
    },
    {
      id: 3,
      img: "/assets/landingPage/high-main-3.webp",
      title: "Multi-Industry Applications",
      desc: "Built not only for farming but also for defence, robotics, and adventure sports, making it a versatile solution for different industries.",
    },
  ];

  return (
    <section className={styles.highlights}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        KEY HIGHLIGHTS
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A-THON isn&apos;t just building ATVs, we&apos;re building a new era of mobility. These highlights reveal how we turn challenges into unstoppable journeys.
      </motion.p>

      <div className={styles.grid}>
        {highlights.map((h: Highlight) => (
          <motion.div
            key={h.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <div className={styles.cardImageWrapper}>
              <Image
                src={h.img}
                alt={h.title}
                width={600}
                height={360}
                className={styles.cardImage}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={h.id === 1}
              />
            </div>

            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.slider}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          // pagination={{ clickable: true }}
        >
          {highlights.map((h: Highlight) => (
            <SwiperSlide key={h.id}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1 }}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={h.img}
                    alt={h.title}
                    width={800}
                    height={480}
                    className={styles.cardImage}
                    sizes="100vw"
                    priority={h.id === 1}
                  />
                </div>

                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}