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
      img: "/assets/landingPage/High4x4.webp",
      title: "ASHVA 4X4",
      desc: "Master India’s toughest terrains with the Ashva 4X4 ATV—powerful, versatile, and perfect for both work and thrilling ATV riding adventures. Ideal for farms, off-road trails, and rugged landscapes.",
    },
    {
      id: 2,
      img: "/assets/landingPage/High6x6.webp",
      title: "ASHVA 6X6",
      desc: "Experience unmatched stability and strength with the Ashva 6X6 ATV. Six wheels deliver superior performance for heavy loads, challenging terrains, and long off-road ATV riding sessions.",
    },
    {
      id: 3,
      img: "/assets/landingPage/High4S.webp",
      title: "ASHVA 4S",
      desc: "Compact yet mighty, the Ashva 4S ATV combines utility and fun. Perfect for daily tasks, weekend ATV rides, and easy handling on urban and rural trails.",
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