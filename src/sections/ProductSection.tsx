"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProductSection.module.css";

const products = [
  {
    id: 1,
    name: "ASHVA BSX",
    title: "Ashva BSX",
    subtitle: "Ultimate Off-Road Partner",
    description:
      "The Ashva BSX delivers unmatched performance with rugged design, advanced suspension, and cutting-edge safety features.",
    price: "Rs 75,000 - Rs 1,50,000",
    img: "/assets/landingPage/Ashva4x4.png",
  },
  {
    id: 2,
    name: "ASHVA 4X4",
    title: "Ashva 4x4",
    subtitle: "Unstoppable Capability",
    description:
      "The Ashva 4x4 redefines off-road capability with advanced terrain response systems, military-grade construction, and cutting-edge technology.",
    price: "Rs 89,900 - Rs 1,80,900",
    img: "/assets/landingPage/Ashva4x4.png",
  },
  {
    id: 3,
    name: "ASHVA 4S",
    title: "Ashva 4S",
    subtitle: "Power Meets Style",
    description:
      "The Ashva 4S blends performance and elegance, designed for thrill-seekers who demand speed, safety, and sleek design.",
    price: "Rs 95,000 - Rs 2,00,000",
    img: "/assets/landingPage/Ashva4x4.png",
  },
  {
    id: 4,
    name: "ASHVA 6X6",
    title: "Ashva 6x6",
    subtitle: "Dominate Any Terrain",
    description:
      "The Ashva 6x6 is engineered for extreme terrains with six-wheel drive, unbeatable stability, and unmatched durability.",
    price: "Rs 1,20,000 - Rs 2,50,000",
    img: "/assets/landingPage/Ashva4x4.png",
  },
];

export default function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products</h2>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={activeProduct.img}
            alt={activeProduct.title}
            width={600}
            height={400}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.details}>
          <h3 className={styles.title}>{activeProduct.title}</h3>
          <h4 className={styles.subTitle}>{activeProduct.subtitle}</h4>
          <p className={styles.description}>{activeProduct.description}</p>
          <p className={styles.price}>
            <span>Starting at</span> {activeProduct.price}
          </p>
          <div className={styles.buttons}>
            <button className={styles.explore}>Explore</button>
            <button className={styles.book}>Book Test Drive</button>
          </div>
        </div>
      </div>

      <div className={styles.tabBar}>
        {products.map((product, index) => (
          <button
            key={product.id}
            className={`${styles.tab} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {product.name}
          </button>
        ))}
      </div>
    </section>
  );
}