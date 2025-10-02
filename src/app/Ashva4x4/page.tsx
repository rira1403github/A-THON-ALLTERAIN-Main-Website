"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Highlights from "@/components/HighProduct/High4x4";
import Footer from "@/components/Footer/Footer";
import styles from "./Ashva4x4.module.css";
import Blogs from "@/sections/Blogs";
import Testimonial from "@/sections/Testimonials";
import CTA from "@/sections/ActionsSection";
import { Phone } from "lucide-react";

const ProductPage = () => {

  interface GalleryImage {
    src: string;
    alt: string;
  }

  const [color, setColor] = useState<keyof typeof carImages>("red");
  const [imageIndex, setImageIndex] = useState(0);
  const [variant, setVariant] = useState("XTR");
  const router = useRouter();
  const carImages: Record<string, string[]> = {
    red: [
      "/assets/productpage/PFX1.webp",
      "/assets/productpage/PFX2.webp",
      "/assets/productpage/PFX3.webp",
      "/assets/productpage/PFX4.webp",
    ],
       orange: [
      "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    yellow: [
      "/assets/productpage/PFX9.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    green: [
     "/assets/productpage/PFX17.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    grey: [
     "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    black: [
      "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    white: [
      "/assets/productpage/PFX13.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    brown: [
      "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    blue: [
      "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
    rainbow: [
      "/assets/productpage/PFX5.webp",
      "/assets/productpage/PFX6.webp",
      "/assets/productpage/PFX7.webp",
      "/assets/productpage/PFX8.webp",
    ],
  };

  const images: GalleryImage[] = [
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 4x4 pict 1" },
    { src: "/assets/productpage/blogs4x42.webp", alt: "Ashva 4x4 pict 2" },
    { src: "/assets/productpage/blogs4x43.webp", alt: "Ashva 4x4 pict 3" },
    { src: "/assets/productpage/blogs4x44.webp", alt: "Ashva 4x4 pict 4" },
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 4x4 pict 1" },
  ];
  
const [selected, setSelected] = useState<GalleryImage>(images[0]);

const faqs = [
  { id: 1, question: "What is the Ashva 4X4 designed for?", answer: "The Ashva 4X4 ATV is built for off-road use across India, including farming, adventure tourism, forestry, and rescue operations. Its versatile design handles both work and leisure tasks efficiently." },
  { id: 2, question: "Can it handle rough Indian terrains?", answer: "Absolutely. The Ashva 4X4 is engineered specifically for Indian conditions, easily navigating mud, uneven fields, rocky paths, and hilly areas." },
  { id: 3, question: "What is the load-carrying capacity?", answer: "The Ashva 4X4 is designed to transport heavy loads, making it ideal for carrying goods, equipment, or supplies across challenging terrains." },
  { id: 4, question: "Is it suitable for both work and adventure?", answer: "Yes, this 4X4 all-terrain vehicle efficiently manages farm and industrial tasks while providing thrilling off-road adventure experiences." },
  { id: 5, question: "How reliable is the Ashva 4X4 in extreme weather?", answer: "Built for Indian heat, heavy rains, and rugged terrains, the Ashva 4X4 ensures minimal breakdowns and consistent off-road performance." },
  { id: 6, question: "What about maintenance and service?", answer: "Being proudly Made in India, it offers easy access to service centers and spare parts, making maintenance simple and affordable." },
  { id: 7, question: "Can it replace multiple vehicles?", answer: "Yes, its multi-purpose design allows it to replace several machines, handling towing, load transport, and off-road tasks in a single vehicle." },
  { id: 8, question: "Is it fuel-efficient?", answer: "The Ashva 4X4 balances power with fuel economy, delivering cost-effective operation without compromising performance." },
  { id: 9, question: "Who can benefit from using the Ashva 4X4?", answer: "Farmers, eco-tourism operators, resorts, forestry departments, rescue teams, and adventure enthusiasts can all benefit from its versatility and rugged design." },
  { id: 10, question: "Is it safe for off-road adventures?", answer: "Yes, with a strong chassis, stable 4X4 drive, and robust construction, it provides safety and stability on challenging trails." },
  { id: 11, question: "Can it be customized for specific needs?", answer: "The Ashva 4X4 can be fitted with accessories or attachments tailored to business or personal requirements, enhancing functionality." },
  { id: 12, question: "Why choose Ashva 4X4 over imported vehicles?", answer: "Designed for Indian terrains, it offers easier servicing, lower maintenance costs, reliable performance, and affordability compared to imported off-road ATVs." }
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
         <p className={styles.productdescrition}>
          A compact, fuel-efficient ATV built for daily utility and fun on farms, estates, and trails.
        </p>
        <p className={styles.productPrice}>
          Starting at <span>22 lakhs - 31 lakhs</span>
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

      <div
      className={styles.variantsSection}
      style={{ backgroundImage: `url(${carImages[color][imageIndex]})` }}
    >
      <div className={styles.overlay}>
        <motion.h2
          id="variants"
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
                <h4>1000 CC</h4>
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
                onClick={() => router.push("/products/Ashva4x4/Specifications")}
              >
                View All Specification
              </button>
              <button
                className={styles.fillBtn}
                onClick={() => router.push("/booking")}
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </div>

        <div className={styles.colorPicker}>
          {Object.keys(carImages).map((col) => (
            <span
              key={col}
              className={`${styles.colorDot} ${styles[col]} ${
                color === col ? styles.active : ""
              }`}
              onClick={() => {
                setColor(col as keyof typeof carImages);
                setImageIndex(0);
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>

      <div className={styles.galleryWrapper}>
          <h2 className={styles.Galleryheading}>Gallery</h2>

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

       <motion.div
      id="testimonials">
        <Testimonial />
      </motion.div>

      <motion.div
      id="blogs">
        <Blogs />
      </motion.div>

      <motion.section
      className={styles.financeSection}
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="finance"
    >
      <div className={styles.rupeeBg}>
        <Image src="/assets/finance/Finance3.png" 
          alt="RupeeBG" 
          width={250} 
          height={400} 
          priority
          className={styles.rupeeBgImage}
        />
      </div>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Finance
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We Are Connected With HDFC And ICICI Bank To Bring You Flexible Finance Options.
      </motion.p>

      <motion.div
        className={styles.banks}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className={styles.bankCard}>
          <Image src="/assets/finance/Finance2.png" alt="HDFC" width={150} height={80} />
        </div>
        <div className={styles.bankCard}>
          <Image src="/assets/finance/Finance1.png" alt="ICICI" width={150} height={80} />
        </div>
      </motion.div>

      <motion.a
        href="tel:+911234567890"
        className={styles.callBtn}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Phone size={18} /> Call Our Team To Know More
      </motion.a>
    </motion.section>

      <motion.div
        className={styles.faqSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id={"faqs"}
      >
        <h2 className={styles.title} >FAQ&apos;s</h2>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={`${styles.faqItem} ${
                activeId === faq.id ? styles.active : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: faq.id * 0.1 }}
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
          {/* <Image
            src="/assets/productpage/RedAshva4x4.png"
            alt="Form Illustration"
            width={400}
            height={400}
            className={styles.image}
          /> */}
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
                    className={styles.inputFieldname}
                  />
                  <input
                    type="text"
                    placeholder="Second Name"
                    className={styles.inputFieldname}
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
      <CTA />
      <Footer />
    </div>
  );
};

export default ProductPage;