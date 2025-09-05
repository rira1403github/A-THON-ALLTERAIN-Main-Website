"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Blogs.module.css";
import { FaRegCalendarAlt } from "react-icons/fa";

interface Blog {
  id: number;
  title: string;
  description: string;
  cover: string | null;
  author: string;
  publishedAt: string;
  slug: string;
}

const BlogSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/articles?populate=*");
        const data = await res.json();

        if (!data.data) {
          console.error("No blog data found:", data);
          return;
        }

        const formatted: Blog[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description || "",
          cover: item.cover?.url || null,
          author: item.author?.name || "Unknown",
          publishedAt: item.publishedAt,
          slug: item.slug,
        }));

        setBlogs(formatted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={styles.blogSection}>
      <h1 className={styles.blogTitle} data-aos="fade-down">
        Blogs & Insights
      </h1>
      <p className={styles.blogSubtitle} data-aos="fade-up">
        Explore stories of innovation, adventure, and the technology that drives our vehicles forward.
      </p>

      {loading ? (
        <p className={styles.loading}>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p className={styles.loading}>No blogs found.</p>
      ) : (
        <div className={styles.blogGrid}>
          {blogs.map((post, i) => (
            <div
              key={post.id}
              className={styles.blogCard}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={
                  post.cover
                    ? `http://localhost:1337${post.cover}`
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={post.title}
                className={styles.blogImage}
              />
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
                  <a href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.centerBtn}>
        <button className={styles.viewAllBtn}>View All Articles</button>
      </div>
    </div>
  );
};

export default BlogSection;