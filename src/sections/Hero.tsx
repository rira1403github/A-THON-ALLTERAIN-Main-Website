"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const slides = [
  { id: 0, label: "ASHVA 6X6", link:  "/products/Ashva6x6", img: "/assets/landingPage/hp.webp", alt: "ASHVA6X6" },
  { id: 1, label: "ASHVA 4X4", link:  "/products/Ashva4x4", img: "/assets/landingPage/hp5.webp", alt: "ASHVA4X4" },
  { id: 2, label: "ASHVA 4S", link:  "/products/Ashva4S", img: "/assets/landingPage/hp3.webp", alt: "ASHVA4S" },
];

export default function Hero() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setProgress(0);
        }}
        onAutoplayTimeLeft={(_, time, progressFraction) => {
          setProgress((1 - progressFraction) * 100);
        }}
        loop
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                priority
                className={styles.image}
              />
              <div className={styles.overlay}>
                <h1 className={styles.heading}>{slide.label}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.bottomTabs}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={styles.tabWrapper}
            onClick={() => {
              swiperRef.current?.slideToLoop(index);
              setActiveIndex(index);
              setProgress(0);
            }}
          >
            <Link
              href={slide.link}
              className={`${styles.tab} ${index === activeIndex ? styles.active : ""}`}
              aria-label={slide.label}
            >
              {slide.label}
            </Link>

            {index === activeIndex && <div className={styles.arrow}></div>}

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: index === activeIndex ? `${progress}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}