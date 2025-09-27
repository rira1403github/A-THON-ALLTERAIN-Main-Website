"use client";

import React, { useState } from "react";
import styles from "./agriRobotics.module.css";
import { motion } from "framer-motion";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/sections/Navbar";
import Image from "next/image";
import CTA from "@/sections/ActionsSection";

interface GalleryImage {
  src: string;
  alt: string;
}

const AgriPage: React.FC = () => {
  const gallery = [
    "/assets/agri/img1.webp",
    "/assets/agri/img2.webp",
    "/assets/agri/img3.webp",
    "/assets/agri/img4.webp",
    "/assets/agri/img5.webp",
    "/assets/agri/img6.webp",
  ];

  const images: GalleryImage[] = [
    { src: "/assets/agri/pict1.webp", alt: "Agriculture pict 1" },
    { src: "/assets/agri/pict2.webp", alt: "Agriculture pict 2" },
    { src: "/assets/agri/pict3.webp", alt: "Agriculture pict 3" },
    { src: "/assets/agri/pict4.webp", alt: "Agriculture pict 4" },
    { src: "/assets/agri/pict5.webp", alt: "Agriculture pict 5" },
  ];

  const [selected, setSelected] = useState<GalleryImage>(images[0]);

  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="/assets/hero/ashva_hero.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroTitleWrap}>
          <h1 className={styles.heroTitle}>ADBHUT</h1>
          <p className={styles.heroSub}>
            India’s <br /> 1st 6x6 FUV
          </p>
        </div>

        <motion.button
          className={styles.playBtn}
          aria-label="Play video"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path d="M8 5v14l11-7L8 5z" fill="white" />
          </svg>
        </motion.button>
      </section>

      <section className={styles.partners}>
        <div className={styles.partnerRow}>
          <div className={styles.partnerLogo}>
            <Image src="/assets/agri/a-thon.webp" alt="A-THON" fill />
          </div>
          <span style={{ fontSize: 18, color: "#666" }}>x</span>
          <div className={styles.partnerLogoArtpark}>
            <Image src="/assets/agri/ARTPARK.webp" alt="ARTPARK" fill />
          </div>
        </div>

        <p className={styles.blurb}>
          A market dominating technology for next 5 years.
          <br />
          Assisted autonomous ADBHUT Bot being integrated with ARTPARK, IISc
          Bengaluru.
        </p>

        <div className={styles.splitWrap}>
          <div className={styles.splitImage}>
            <div className={styles.splitInner}>
              <Image
                src="/assets/agri/adbhut.webp"
                alt="Adbhut illustration"
                width={1000}
                height={500}
                className={styles.productIllustration}
              />
              <div className={styles.centerDashed} aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.visionWrap}>
        <motion.h2
          className={styles.visionTitle}
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vision 2027 – ADBHUT
        </motion.h2>
        <p className={styles.visionSub}>
          Our roadmap to redefine mobility through technology leadership,
          off-road innovation, and sustainability.
        </p>

        <div className={styles.timeline} aria-hidden>
          <Image
            src="/assets/agri/Container.png"
            alt="Timeline container"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <motion.div
          className={styles.timelineRow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.timelineText}>
            <h3>Ashva Series Launch</h3>
            <p className="meta">2023</p>
            <p style={{ color: "#bfc7cc", lineHeight: 1.7 }}>
              Introduction of our flagship Ashva series with revolutionary
              off-road capabilities and advanced materials.
            </p>

            <div className={styles.checks}>
              <div className={styles.checkItem}>
                <div className={styles.checkBullet}>✓</div>
                <div>Carbon fiber reinforced chassis technology</div>
              </div>
              <div className={styles.checkItem}>
                <div className={styles.checkBullet}>✓</div>
                <div>Proprietary terrain mapping system</div>
              </div>
              <div className={styles.checkItem}>
                <div className={styles.checkBullet}>✓</div>
                <div>Advanced driver assistance for off-road environments</div>
              </div>
            </div>
          </div>

          <div className={styles.mediaBox}>
            <div style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontWeight: 700, opacity: 0.06 }}>VIDEO</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.galleryWrap}>
        <h4 className={styles.galleryTitle}>
          ULTIMATE SOLUTION FOR EVERYTHING FARMING
        </h4>

        <div className={styles.galleryGrid}>
          {gallery.map((src, i) => (
            <motion.div
              className={styles.galleryCard}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Image
                src={src}
                width={400}
                height={300}
                alt={`Gallery image ${i + 1}`}
                className={styles.galleryImg}
              />
              <div className={styles.galleryCaption}>
                {i === 0
                  ? "Stabilizer Hydro Drive wheels For hostile terrain"
                  : i === 1
                  ? "Monitoring crop health with drone"
                  : i === 2
                  ? "Pesticide application through aerial spraying"
                  : i === 3
                  ? "Crop harvesting through snippers & telescopic boom"
                  : i === 4
                  ? "On-site crop processing"
                  : "Transportation of harvest by Assisted Autonomous K-bots"}
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.galleryWrapper}>
          <h2 className={styles.heading}>Gallery</h2>

          <motion.div
            key={selected.src}
            className={styles.mainImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={selected.src}
              width={700}
              height={500}
              alt={selected.alt}
            />
          </motion.div>

          <div className={styles.thumbnailRow}>
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className={`${styles.thumbnail} ${
                  img.src === selected.src ? styles.active : ""
                }`}
                onClick={() => setSelected(img)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={img.src} width={120} height={80} alt={img.alt} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
};

export default AgriPage;