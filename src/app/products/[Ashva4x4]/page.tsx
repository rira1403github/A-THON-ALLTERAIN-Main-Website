"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Highlights from "@/sections/Highlights";
import Footer from "@/components/Footer/Footer";
import styles from "./Ashva4x4.module.css";
import Blogs from "@/sections/Blogs";
import Testimonial from "@/sections/Testimonials";

const ProductPage = () => {
  
  const [variant, setVariant] = useState("XTR");
  const [color, setColor] = useState("red");
  const router = useRouter();

  const carImages: Record<string, string> = {
    red: "/assets/productpage/RedAshva4x4.png",
    yellow: "/assets/landingPage/Ashva4x4.png",
  };


const faqs = [
  { id: 1, question: "How do I sign up for the project?", answer: "You can sign up by visiting our official website and filling out the registration form." },
  { id: 2, question: "Is there any cost involved?", answer: "No, signing up is completely free." },
  { id: 3, question: "Who can participate in the project?", answer: "Anyone who meets the eligibility criteria mentioned on our website." },
  { id: 4, question: "When does the project start?", answer: "The project starts next month. Exact dates will be announced soon." },
  { id: 5, question: "Where can I get more information?", answer: "Please check our Info section or contact our support team." },
];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <motion.div
        className={styles.videoSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video className={styles.video} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
        <motion.div
          className={styles.playButton}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ▶
        </motion.div>
      </motion.div>

      <motion.div
        id={"overview"}
        className={styles.scrollNav}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { id: "overview", label: "Overview" },
          { id: "highlights", label: "Key Highlights" },
          { id: "variants", label: "Variants & Pricing" },
          { id: "gallery", label: "Gallery" },
          { id: "blogs", label: "Blogs" },
          { id: "testimonials", label: "Testimonials" },
          { id: "finance", label: "Finance" },
          { id: "faqs", label: "FAQ's" },
          { id: "getinfo", label: "Get More Info" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={styles.scrollBtn}
          >
            {item.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className={styles.productInfo}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/assets/productpage/Ashva4x4Title.png"
          alt="Ashva 4x4"
          width={400}
          height={100}
          priority
          className={styles.productName}
        />
        <p className={styles.productPrice}>
          Starting at <span>22 lakhs - 42 lakhs</span>
        </p>
        <div className={styles.buttons}>
          <button className={styles.brochureBtn}>Download The Brochure</button>
          <button className={styles.testDriveBtn}>Book Test Drive</button>
        </div>
      </motion.div>

      <motion.div
      id={"highlights"}>
      <Highlights />
      </motion.div>

      <div className={styles.variantsSection}>
        <motion.h2
          id={"variants"}
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Variants & Pricing
        </motion.h2>
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hear from adventurers, professionals, and enthusiasts who have pushed
          our vehicles to their limits.
        </motion.p>

        <div className={styles.content}>
          <motion.div
            className={styles.carImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={carImages[color]}
              alt="Car Variant"
              width={500}
              height={400}
              className={styles.image}
            />
            <div className={styles.colorPicker}>
              {[
                "red",
                "yellow",
                "green",
                "grey",
                "black",
                "white",
                "brown",
                "orange",
                "blue",
              ].map((col) => (
                <span
                  key={col}
                  className={`${styles.colorDot} ${styles[col]} ${
                    color === col ? styles.active : ""
                  }`}
                  onClick={() => setColor(col)}
                ></span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.details}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${
                  variant === "XTR" ? styles.activeTab : ""
                }`}
                onClick={() => setVariant("XTR")}
              >
                XTR
              </button>
              <button
                className={`${styles.tab} ${
                  variant === "PFX" ? styles.activeTab : ""
                }`}
                onClick={() => setVariant("PFX")}
              >
                PFX
              </button>
            </div>
            <p className={styles.variantLabel}>Variants</p>
            <h3 className={styles.price}>Starting at ₹ 22,09,000*</h3>

            <div className={styles.specs}>
              <div>
                <h4>Petrol</h4>
                <p>Fuel</p>
              </div>
              <div>
                <h4>Petrol</h4>
                <p>Engine</p>
              </div>
              <div>
                <h4>Automatic</h4>
                <p>Transmission</p>
              </div>
              <div>
                <h4>71 Hp</h4>
                <p>Horse Power</p>
              </div>
              <div>
                <h4>2</h4>
                <p>Seater</p>
              </div>
              <div>
                <h4>2</h4>
                <p>Torque</p>
              </div>
            </div>

            <div className={styles.buttons}>
              <button
                className={styles.outlineBtn}
                onClick={() =>
                  router.push("/products/Ashva4x4/Specifications")
                }
              >
                View All Specification
              </button>
              <button className={styles.fillBtn}>Book Now</button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.galleryContainer} 
          id={"gallery"}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GALLERY
        </motion.h2>
      </div>

      <motion.div
      id="blogs">
        <Blogs />
      </motion.div>

      <motion.div
      id="testimonials">
        <Testimonial />
      </motion.div>


       <motion.div
        className={styles.financeSection}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>Finance</h2>
        <p className={styles.subtitle}>
          Hear from adventurers, professionals, and enthusiasts who have pushed
          our vehicles to their limits.
        </p>
        <div className={styles.videoPlaceholder}>
          <Image
            src="/assets/placeholder.png"
            alt="Finance Video Placeholder"
            width={900}
            height={400}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.faqSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>FAQ&apos;s</h2>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={`${styles.faqItem} ${
                activeId === faq.id ? styles.active : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: faq.id * 0.1 }}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
                <span className={styles.icon}>
                  {activeId === faq.id ? "−" : "+"}
                </span>
              </button>
              {activeId === faq.id && (
                <motion.p
                  className={styles.answer}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <section className={styles.formSection}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/assets/productpage/RedAshva4x4.png"
            alt="Form Illustration"
            width={400}
            height={400}
            className={styles.image}
          />
        </motion.div>

        <motion.div
          id={"getinfo"}
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Get More Info</h2>
          <p className={styles.subtitle}>
            Hear from adventurers, professionals, and enthusiasts who have pushed
            our vehicles to their limits.
          </p>

          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>ENTER YOUR NAME*</label>
                <div className={styles.row}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className={styles.inputField}
                  />
                  <input
                    type="text"
                    placeholder="Second Name"
                    className={styles.inputField}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>ENTER YOUR NUMBER*</label>
              <div className={styles.row}>
                <span className={styles.phoneCode}>+91</span>
                <input
                  type="text"
                  placeholder="Your Number"
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>ENTER YOUR EMAIL ADDRESS*</label>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>MODEL TYPE*</label>
              <select className={styles.inputField}>
                <option>Select The Model</option>
                <option>Ashva 4x4 XTR</option>
                <option>Ashva 4x4 PFX</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                placeholder="Message"
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;