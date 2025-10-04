"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Blogs.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Blog {
  id: number;
  title: string;
  description: string;
  cover: string;
  author: string;
  publishedAt: string;
  slug: string;
}

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  const blogs: Blog[] = [
    {
      id: 1, 
      title: "ASHVA 4X4 – Redefining Off-Road Adventures",
      description:
        "The ASHVA 4X4 is a powerful ATV built for tough terrains, offering strong performance, reliable safety, and a rugged design that combines comfort, style, and durability...",
      cover: "/assets/blogs/blogs4x44.webp",
      author: "John Doe",
      publishedAt: "2024-08-12",
      slug: "off-road-adventures",
    },
    {
      id: 2,
      title: "Experience Rugged Strength & Adventure with ASHVA 6X6",
      description:
        "The ASHVA 6X6 is a powerful all-terrain vehicle built for extreme conditions, offering superior traction, durability, and comfort for both adventure and heavy-duty tasks...",
      cover: "/assets/blogs/blogs6x61.webp", 
      author: "Sarah Lee",
      publishedAt: "2024-09-05",
      slug: "electric-atvs",
    },
    {
      id: 3,
      title: "ASHVA 4S – Experience the Thrill of Off-Road Adventures",
      description:
        "The ASHVA 4S is a compact, powerful ATV offering superior traction, agility, and comfort—perfect for off-road adventures and light utility tasks...",
      cover: "/assets/blogs/blogs4S1.webp", 
      author: "Mike Ross",
      publishedAt: "2024-10-21",
      slug: "extreme-terrain-design",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCard = (post: Blog, i: number) => (
    <div
      key={post.id}
      className={styles.blogCard}
      data-aos-delay={String(i * 100)}
    >
      <div className={styles.blogImageWrapper}>
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className={styles.blogImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={i === 0}
        />
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogMetaTop}>
          <FaRegCalendarAlt className={styles.icon} />
          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <h2 className={styles.blogPostTitle}>{post.title}</h2>
        <p className={styles.blogDesc}>
          {post.description.split(" ").slice(0, 20).join(" ")}...
        </p>
        <div className={styles.blogFooter}>
          <span>8 min read</span>
          <Link href={`/blog/${post.slug}`} className={styles.readMore}>
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.blogSection}>
      <h1 className={styles.blogTitle}>
        Blogs & Insights
      </h1>
      <p className={styles.blogSubtitle}>
        Explore stories of innovation, adventure, and the technology that drives
        our vehicles forward.
      </p>

      {isMobile ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          // pagination={{ clickable: true }}
          loop
          className={styles.blogSwiper}
        >
          {blogs.map((post, i) => (
            <SwiperSlide key={post.id}>{renderCard(post, i)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.blogGrid}>
          {blogs.map((post, i) => renderCard(post, i))}
        </div>
      )}

      <div className={styles.centerBtn}>
        <Link href="/Blogs">
          <button className={styles.viewAllBtn}>View All Articles</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;