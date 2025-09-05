"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Events.module.css";

import event1 from "@/assets/landingPage/Event1.webp";

const events = [
  {
    id: 1,
    title: "AUTOSHOW 2024",
    description: `A-THON made history at the International Auto Show 2024, held at Bangalore Palace Grounds, 
    by unveiling India’s first homegrown ATV, the Ashva 4X4. Engineered for agriculture, adventure, and 
    extreme off-road applications, it features a 976cc V-twin engine, 2WD/4WD with locking differentials, 
    and advanced suspension for superior control and durability. Available in four variants, the Ashva 4X4 
    redefines all-terrain mobility with power, precision, and innovation.`,
    img: event1,
  },
  {
    id: 2,
    title: "TECH EXPO 2024",
    description: `Showcasing cutting-edge technology and innovation, A-THON highlighted future-ready mobility 
    solutions designed for versatility and endurance.`,
    img: event1,
  },
  {
    id: 3,
    title: "AUTOSHOW 2024",
    description: `A-THON made history at the International Auto Show 2024, held at Bangalore Palace Grounds, 
    by unveiling India’s first homegrown ATV, the Ashva 4X4. Engineered for agriculture, adventure, and 
    extreme off-road applications, it features a 976cc V-twin engine, 2WD/4WD with locking differentials, 
    and advanced suspension for superior control and durability. Available in four variants, the Ashva 4X4 
    redefines all-terrain mobility with power, precision, and innovation.`,
    img: event1,
  },
];

const Events: React.FC = () => {
  return (
    <section className={styles.events}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Events
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hear from adventurers, professionals, and enthusiasts who have pushed our vehicles to their limits.
      </motion.p>

      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={40}
        className={styles.slider}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <motion.div
              className={styles.slide}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={event.img}
                  alt={event.title}
                  className={styles.image}
                  width={600}
                  height={400}
                />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{event.title}</h3>
                <p className={styles.description}>{event.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Events;