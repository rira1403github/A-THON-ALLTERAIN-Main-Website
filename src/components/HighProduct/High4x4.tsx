"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./HighProduct.module.css";

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
      img: "/assets/Highlights/4x4H1.webp",
      title: "UNSTOPPABLE ON ANY GROUND",
      desc: "Conquer Indian terrains with ease – the Ashva 4X4 ATV handles mud, rocky trails, hilly slopes, and rugged landscapes effortlessly.",
    },
    {
      id: 2,
      img: "/assets/Highlights/4x4H2.webp",
      title: "VERSATILITY THAT WORKS ANYWHERE",
      desc: "Perfect for both work and off-road adventure, serving farmers, forestry departments, rescue teams, and adventure riders.",
    },
    {
      id: 3,
      img: "/assets/Highlights/4x4H3.webp",
      title: "BUILT FOR POWER",
      desc: "Powerful and multi-purpose – high load-carrying and towing capacity make it a true all-terrain utility vehicle.",
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