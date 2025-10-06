"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductSection.module.css";

const products = [

  
  {
    id: 1,
    name: "ASHVA 4X4",
    title: "Ashva 4x4",
    subtitle: "Unstoppable Capability",
    description:
      "Ashva 4X4 isn’t just an ATV — it’s a force of nature. Born in India and built for the world, it blends raw power with smart engineering to take on fields, forests, and frontiers alike. With rugged strength, adaptive control, and a spirit of adventure, the Ashva 4X4 turns every terrain into its playground.",
    price: "Rs 22,09,000 - Rs 31,44,000",
    img: "/assets/landingPage/Ashva4x4.png",
    exploreLink: "/Ashva4x4",
    bookLink: "/book",
  },

  {
    id: 2,
    name: "ASHVA 4S",
    title: "Ashva 4S",
    subtitle: "Power Meets Style",
    description:
      "Ashva 4S is made for people who want both power and practicality. It’s sleek, easy to handle, and strong, combining tough build quality with everyday use. Whether you’re driving on rough village roads, doing daily work, or going on an adventure, the Ashva 4S shows that a compact machine can still take on big challenges.",
    price: "Rs 31,18,000 - Rs 37,73,000",
    img: "/assets/landingPage/Ashva4S.webp",
    exploreLink: "/Ashva4S",
    bookLink: "/book",
  },

  {
    id: 3,
    name: "ASHVA 6X6",
    title: "Ashva 6x6",
    subtitle: "Dominate Any Terrain",
    description:
      "Ashva 6X6 is the true powerhouse of the Ashva series, built to dominate the toughest terrains with unmatched stability and strength. With six-wheel drive, rugged engineering, and massive load capacity, it’s perfect for defence, farming, and extreme adventure. No path is too rough, no challenge too big — the Ashva 6X6 is designed to go beyond limits.",
    price: "Rs 1,20,000 - Rs 2,50,000",
    img: "/assets/landingPage/Ashva6x6.webp",
    exploreLink: "/Ashva6x6",
    bookLink: "/book",
  },
  
    {
    id: 4,
    name: "ASHVA BSX",
    title: "Ashva BSX",
    subtitle: "Ultimate Off-Road Partner",
    description:
      "Ashva BSX is made for people who want both power and practicality. It’s sleek, easy to handle, and strong, combining tough build quality with everyday use. Whether you’re driving on rough village roads, doing daily work, or going on an adventure, the Ashva BSX shows that a compact machine can still take on big challenges.",
    price: "Rs 18,00,000",
    img: "/assets/landingPage/AshvaBSX.webp",
    exploreLink: "#",
    bookLink: "/book",
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
            <Link href={activeProduct.exploreLink}>
              <button className={styles.explore}>Explore</button>
            </Link>
            <Link href={activeProduct.bookLink}>
              <button className={styles.book}>Book Test Drive</button>
            </Link>
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