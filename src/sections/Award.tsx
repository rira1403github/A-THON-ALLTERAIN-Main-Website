"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Award.module.css";

interface AwardItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default function Award() {
  const awards: AwardItem[] = [
    {
      id: 1,
      img: "/assets/Award/A1.webp",
      title: "Babina Platform Demo",
      description:
        "A-THON & ARTPARK IISc showcase autonomous off-road innovation to Army leadership",
    },
    {
      id: 2,
      img: "/assets/Award/A2.webp",
      title: "Babina Platform Demo",
      description:
        "A-THON & ARTPARK IISc showcase autonomous off-road innovation to Army leadership",
    },
    {
      id: 3,
      img: "/assets/Award/A3.webp",
      title: "Vroom 2024 Partnership",
      description:
        "A-THON powered Vroom 2024 as sponsor, spotlighting ASHVA 4X4, ASHVA 6X6 & ASHVA 4S to motorsport fans.",
    },
    {
      id: 4,
      img: "/assets/Award/A4.webp",
      title: "Startup Mahakumbh Triumph",
      description:
        "Hon'ble Minister Mr. Piyush Goyal honored A-THON with the Start Maharathi Challenge award.",
    },
    {
      id: 5,
      img: "/assets/Award/A5.webp",
      title: "Invest Karnataka Recognition",
      description:
        "A-THON unveiled ASHVA 4X4 & 6X6 to Chief Secretary Dr. Shalini Rajneesh and global leaders.",
    },
    {
      id: 6,
      img: "/assets/Award/A6.webp",
      title: "A-THON at Bharat Mobility 2025",
      description:
        "Showcasing innovative next-gen all-terrain solutions and actively engaging with industry leaders in Delhi.",
    },
    {
      id: 7,
      img: "/assets/Award/A7.webp",
      title: "Urban Launch",
      description:
        "A-THON introduced the ASHVA 4X4 in Mumbai & Pune, sparking attention among auto enthusiasts and industry insiders.",
    },
    {
      id: 8,
      img: "/assets/Award/A8.webp",
      title: "Media Spotlight",
      description:
        "Renowned moto-vlogger Cherry Vlogs test drove the ASHVA 4X4, creating viral buzz and reaching millions of viewers.",
    },
  ];

  return (
    <section className={styles.awards} role="region" aria-label="Awards & Recognition">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Awards & Recognition
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A-THON – Redefining mobility with innovation and excellence.
      </motion.p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className={styles.slider}
      >
        {awards.map((award) => (
          <SwiperSlide key={award.id}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={award.img}
                  alt={award.title}
                  width={500}
                  height={350}
                  className={styles.awardImage}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{award.title}</h3>
                <p className={styles.cardDesc}>{award.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}