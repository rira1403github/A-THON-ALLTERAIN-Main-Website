"use client";

import React, { useEffect, useRef } from "react";
import styles from "./blog.module.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import CTA from "@/sections/ActionsSection";

type Blog = {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const sampleBlogs: Blog[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title:
    "Conquering the Himalayas: Testing the Ashva 6x6 at Extreme Altitudes",
  date: "Oct 15, 2025",
  readTime: "8 min read",
  excerpt:
    "Our team took the new Ashva 6x6 to the world's highest motorable roads to test its performance in low-oxygen environments.",
  image: "/assets/blogs/blogs4x45.webp",
}));

const BlogPage: React.FC = () => {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const els =
      revealRef.current?.querySelectorAll(`.${styles.reveal}`) || [];
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <Navbar />
      <main className={styles.maincontainer} ref={revealRef}>
        <section className={styles.header}>
          <h1 className={styles.maintitle}>Blogs & Insights</h1>
          <p className={styles.mainsubtitle}>
            Explore stories of innovation, adventure, and the technology that
            drives our vehicles forward.
          </p>
          <div className={styles.searchWrap}>
            <input
              className={styles.searchInput}
              placeholder="Search"
              aria-label="search"
            />
            <button className={styles.searchBtn} aria-hidden>
              ▾
            </button>
          </div>
        </section>

        <section className={`${styles.recent} ${styles.reveal}`}>
          <h2 className={styles.sectionTitle}>Recent Blogs</h2>

          <article className={styles.heroCard}>
            <div className={styles.heroImageWrap}>
              <Image
                src={sampleBlogs[0].image}
                alt="ashva 6x6"
                className={styles.heroImage}
                width={800}
                height={450}
                priority
              />
            </div>
            <div className={styles.heroContent}>
              <div className={styles.meta}>{sampleBlogs[0].date}</div>
              <h3 className={styles.heroTitle}>{sampleBlogs[0].title}</h3>
              <p className={styles.heroExcerpt}>{sampleBlogs[0].excerpt}</p>
              <div className={styles.heroFooter}>
                <span className={styles.readTime}>
                  {sampleBlogs[0].readTime}
                </span>
                <a className={styles.readMore} href="#">
                  Read Article →
                </a>
              </div>
            </div>
          </article>

          <div className={styles.grid}>
            {sampleBlogs.map((b) => (
              <article key={b.id} className={`${styles.card} ${styles.reveal}`}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={b.image}
                    alt={b.title}
                    className={styles.cardImage}
                    width={400}
                    height={250}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>{b.date}</div>
                  <h4 className={styles.cardTitle}>{b.title}</h4>
                  <p className={styles.cardExcerpt}>{b.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span>{b.readTime}</span>
                    <a href="#">Read Article →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <CTA />
      <section className={styles.subscribe}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Subscribe to <span className={styles.star}>*</span>
              <br /> – Our Blogs
            </h2>
            <p className={styles.subtitle}>
              Get weekly update about our product on your email, no spam
              guaranteed we promise ✌️
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <span className={styles.icon}>📩</span>
              <input
                type="email"
                placeholder="youremail123@gmail.com"
                aria-label="Email"
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default BlogPage;