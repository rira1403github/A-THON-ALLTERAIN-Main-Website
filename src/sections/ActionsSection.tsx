"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./ActionsSection.module.css";

const ActionsSection: React.FC = () => {
  const items = [
    {
      id: 1,
      label: "Get more info",
      img: "/assets/landingPage/CTA2.png",
      link: "/info",
    },
    {
      id: 2,
      label: "Book a Test drive",
      img: "/assets/landingPage/CTA3.png",
      link: "/book",
    },
    {
      id: 3,
      label: "Book Experience",
      img: "/assets/landingPage/CTA1.png",
      link: "https://asxmotodrome.com/",
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={styles.card}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={item.link} className={styles.link}>
            <span className={styles.icon}>
              <Image
                src={item.img}
                alt={item.label}
                width={40}
                height={40}
                className={styles.iconImg}
              />
            </span>
            <span className={styles.label}>{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ActionsSection;