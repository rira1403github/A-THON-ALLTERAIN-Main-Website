"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: number;
  img: string;
  alt?: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    { id: 1, img: "/assets/landingPage/Test1.webp", alt: "Rider testimonial 1" },
    { id: 2, img: "/assets/landingPage/Test2.webp", alt: "Rider testimonial 2" },
    { id: 3, img: "/assets/landingPage/Test3.webp", alt: "Rider testimonial 3" },
  ];

  return (
    <section className={styles.testimonials} role="region" aria-label="Testimonials">
      
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hear from adventurers, professionals, and enthusiasts who have pushed our vehicles to their limits.
      </motion.p>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={t.img}
                alt={t.alt ?? `testimonial-${t.id}`}
                width={600}
                height={400}
                className={styles.testimonialImage}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={t.id === 1}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.slider}>
        <Swiper
          modules={[ Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          // pagination={{ clickable: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={t.img}
                    alt={t.alt ?? `testimonial-${t.id}`}
                    width={800}
                    height={500}
                    className={styles.testimonialImage}
                    sizes="100vw"
                    priority={t.id === 1}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}