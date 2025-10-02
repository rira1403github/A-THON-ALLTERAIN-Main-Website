"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "./products.module.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/sections/ActionsSection";

const products = [
  {
    id: 1,
    name: "ASHVA 4X4",
    img: "/assets/landingPage/Ashva4x4.png",
    exploreLink: "/Ashva4x4",
    testDriveLink: "/book",
    reverse: false,
  },
  {
    id: 2,
    name: "ASHVA 4S",
    img: "/assets/landingPage/Ashva4S.webp",
    exploreLink: "/Ashva4S",
    testDriveLink: "/book",
    reverse: true,
  },
  {
    id: 3,
    name: "ASHVA 6X6",
    img: "/assets/landingPage/Ashva6x6.webp",
    exploreLink: "/Ashva6x6",
    testDriveLink: "/book",
    reverse: false,
  },
];

const fadeIn = (direction: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});

const Products: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.products}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`${styles.product} ${
              product.reverse ? styles.reverse : ""
            }`}
          >
            <motion.div
              className={styles.imageWrapper}
              variants={fadeIn(product.reverse ? "right" : "left")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={product.img}
                alt={product.name}
                width={650}
                height={450}
                className={styles.image}
                priority
              />
            </motion.div>

            <motion.div
              className={styles.content}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className={styles.title}>{product.name}</h2>
              <div className={styles.buttons}>
                <Link
                  href={product.exploreLink}
                  className={`${styles.btn} ${styles.black}`}
                >
                  Explore
                </Link>
                <Link
                  href={product.testDriveLink}
                  className={`${styles.btn} ${styles.white}`}
                >
                  Book Test Drive
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </section>
      <CTA />
      <Footer />
    </div>
  );
};

export default Products;