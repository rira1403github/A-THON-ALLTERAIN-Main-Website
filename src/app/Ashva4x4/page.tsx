"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Highlights from "@/components/HighProduct/High4x4";
import Footer from "@/components/Footer/Footer";
import styles from "./Ashva4x4.module.css";
import Blogs from "@/sections/Blogs";
import Testimonial from "@/sections/Testimonials";
import CTA from "@/sections/ActionsSection";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProductPage: React.FC = () => {
  interface GalleryImage {
    src: string;
    alt: string;
  }

  const css = styles as Record<string, string>;
  const router = useRouter();

  const carImages: Record<string, string[]> = {
    red: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    yellow: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    green: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    grey: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    black: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    brown: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    orange: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
    blue: [
      "/assets/productpage/4x4-1.webp",
      "/assets/productpage/4x4-2.webp",
      "/assets/productpage/4x4-3.webp",
      "/assets/productpage/4x4-4.webp",
    ],
  };

  const [color, setColor] = useState<keyof typeof carImages>("red");
  const [variant, setVariant] = useState<"XTR" | "PFX">("XTR");
  const [showColorName, setShowColorName] = useState(false);
  const colorTimeoutRef = useRef<number | null>(null);

  const variantData = {
    XTR: {
      price: "₹ 22,09,000*",
      fuel: "Petrol",
      engine: "1000 CC",
      transmission: "Automatic",
      hp: "71 Hp",
      seater: "2",
      torque: "2",
    },
    PFX: {
      price: "₹ 18,49,000*",
      fuel: "Petrol",
      engine: "800 CC",
      transmission: "Manual",
      hp: "58 Hp",
      seater: "2",
      torque: "2",
    },
  };

  const colorNames: Record<string, string> = {
    red: "Inferno Red",
    yellow: "Solar Yellow",
    green: "Army Green",
    grey: "Shadow Grey",
    black: "Midnight Black",
    brown: "Desert Brown",
    orange: "Lava Orange",
    blue: "Ocean Blue",
  };

  const images: GalleryImage[] = [
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 4x4 pict 1" },
    { src: "/assets/productpage/blogs4x42.webp", alt: "Ashva 4x4 pict 2" },
    { src: "/assets/productpage/blogs4x43.webp", alt: "Ashva 4x4 pict 3" },
    { src: "/assets/productpage/blogs4x44.webp", alt: "Ashva 4x4 pict 4" },
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 4x4 pict 1 duplicate" },
  ];

  const [selected, setSelected] = useState<GalleryImage>(images[0]);

  const faqs = [
    {
      id: 1,
      question: "What is the Ashva 4X4 designed for?",
      answer:
        "The Ashva 4X4 ATV is built for off-road use across India, including farming, adventure tourism, forestry, and rescue operations. Its versatile design handles both work and leisure tasks efficiently.",
    },
    {
      id: 2,
      question: "Can it handle rough Indian terrains?",
      answer:
        "Absolutely. The Ashva 4X4 is engineered specifically for Indian conditions, easily navigating mud, uneven fields, rocky paths, and hilly areas.",
    },
    {
      id: 3,
      question: "What is the load-carrying capacity?",
      answer:
        "The Ashva 4X4 is designed to transport heavy loads, making it ideal for carrying goods, equipment, or supplies across challenging terrains.",
    },
    {
      id: 4,
      question: "Is it suitable for both work and adventure?",
      answer:
        "Yes, this 4X4 all-terrain vehicle efficiently manages farm and industrial tasks while providing thrilling off-road adventure experiences.",
    },
    {
      id: 5,
      question: "How reliable is the Ashva 4X4 in extreme weather?",
      answer:
        "Built for Indian heat, heavy rains, and rugged terrains, the Ashva 4X4 ensures minimal breakdowns and consistent off-road performance.",
    },
    {
      id: 6,
      question: "What about maintenance and service?",
      answer:
        "Being proudly Made in India, it offers easy access to service centers and spare parts, making maintenance simple and affordable.",
    },
    {
      id: 7,
      question: "Can it replace multiple vehicles?",
      answer:
        "Yes, its multi-purpose design allows it to replace several machines, handling towing, load transport, and off-road tasks in a single vehicle.",
    },
    {
      id: 8,
      question: "Is it fuel-efficient?",
      answer:
        "The Ashva 4X4 balances power with fuel economy, delivering cost-effective operation without compromising performance.",
    },
    {
      id: 9,
      question: "Who can benefit from using the Ashva 4X4?",
      answer:
        "Farmers, eco-tourism operators, resorts, forestry departments, rescue teams, and adventure enthusiasts can all benefit from its versatility and rugged design.",
    },
    {
      id: 10,
      question: "Is it safe for off-road adventures?",
      answer:
        "Yes, with a strong chassis, stable 4X4 drive, and robust construction, it provides safety and stability on challenging trails.",
    },
    {
      id: 11,
      question: "Can it be customized for specific needs?",
      answer:
        "The Ashva 4X4 can be fitted with accessories or attachments tailored to business or personal requirements, enhancing functionality.",
    },
    {
      id: 12,
      question: "Why choose Ashva 4X4 over imported vehicles?",
      answer:
        "Designed for Indian terrains, it offers easier servicing, lower maintenance costs, reliable performance, and affordability compared to imported off-road ATVs.",
    },
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

  useEffect(() => {
    return () => {
      if (colorTimeoutRef.current) {
        window.clearTimeout(colorTimeoutRef.current);
        colorTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className={css.pageWrapper}>
      <Navbar />

      <motion.div
        className={css.videoSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video className={css.video} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
        <motion.div
          className={css.playButton}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          role="button"
          aria-label="Play video"
        >
          ▶
        </motion.div>
      </motion.div>

      <motion.div
        id={"overview"}
        className={css.scrollNav}
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
            className={css.scrollBtn}
          >
            {item.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className={css.productInfo}
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
          className={css.productName}
        />
        <p className={css.productdescrition}>
          A compact, fuel-efficient ATV built for daily utility and fun on farms, estates, and trails.
        </p>
        <p className={css.productPrice}>
          Starting at <span>22 lakhs - 31 lakhs</span>
        </p>
        <div className={css.buttons}>
          <button className={css.brochureBtn}>Download The Brochure</button>
          <button className={css.testDriveBtn}>Book Test Drive</button>
        </div>
      </motion.div>

      <motion.div id={"highlights"}>
        <Highlights />
      </motion.div>

      <section className={css.variantsSection}>
        <motion.h2
          id="variants"
          className={css.heading}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Variants & Pricing
        </motion.h2>

        <motion.p
          className={css.subheading}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hear from adventurers, professionals, and enthusiasts who have pushed
          our vehicles to their limits.
        </motion.p>

        <div className={css.container}>
          <motion.div
            className={css.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className={css.swiper}
            >
              {carImages[color].map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img}
                    alt={`${color} variant ${i + 1}`}
                    width={700}
                    height={500}
                    className={css.vehicleImage}
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            className={css.details}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={css.tabs}>
              <button
                className={`${css.tab} ${variant === "XTR" ? css.activeTab : ""}`}
                onClick={() => setVariant("XTR")}
                aria-pressed={variant === "XTR"}
              >
                XTR
              </button>
              <button
                className={`${css.tab} ${variant === "PFX" ? css.activeTab : ""}`}
                onClick={() => setVariant("PFX")}
                aria-pressed={variant === "PFX"}
              >
                PFX
              </button>
            </div>
            <p className={css.variantLabel}>Variants</p>

            <h3 className={css.price}>Starting at {variantData[variant].price}</h3>

            <div className={css.specs}>
              <div>
                <h4>{variantData[variant].fuel}</h4>
                <p>Fuel</p>
              </div>
              <div>
                <h4>{variantData[variant].engine}</h4>
                <p>Engine</p>
              </div>
              <div>
                <h4>{variantData[variant].transmission}</h4>
                <p>Transmission</p>
              </div>
              <div>
                <h4>{variantData[variant].hp}</h4>
                <p>Horse Power</p>
              </div>
              <div>
                <h4>{variantData[variant].seater}</h4>
                <p>Seater</p>
              </div>
              <div>
                <h4>{variantData[variant].torque}</h4>
                <p>Torque</p>
              </div>
            </div>

            <div className={css.buttons}>
              <button
                className={css.outlineBtn}
                onClick={() => router.push("/products/Ashva4x4/Specifications")}
              >
                View All Specification
              </button>
              <button className={css.fillBtn} onClick={() => router.push("/booking")}>
                Get A Quote
              </button>
            </div>
          </motion.div>
        </div>

        <div className={css.colorPicker}>
          {Object.keys(carImages).map((col) => (
            <div key={col} className={css.colorDotWrapper}>
              <span
                className={`${css.colorDot} ${css[col]} ${color === col ? css.active : ""}`}
                onClick={() => {
                  setColor(col as keyof typeof carImages);
                  setShowColorName(true);
                  if (colorTimeoutRef.current) {
                    window.clearTimeout(colorTimeoutRef.current);
                  }
                  colorTimeoutRef.current = window.setTimeout(() => {
                    setShowColorName(false);
                    colorTimeoutRef.current = null;
                  }, 1500);
                }}
                role="button"
                aria-label={`Select ${colorNames[col] ?? col}`}
              ></span>

              <AnimatePresence>
                {color === col && showColorName && (
                  <motion.div
                    className={css.colorNameDropdown}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {colorNames[col] ?? col.charAt(0).toUpperCase() + col.slice(1)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <div className={css.galleryWrapper}>
        <h2 className={css.Galleryheading}>Gallery</h2>

        <motion.div
          key={selected.src}
          className={css.mainImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={selected.src} width={700} height={500} alt={selected.alt} />
        </motion.div>

        <div className={css.thumbnailRow}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={`${css.thumbnail} ${img.src === selected.src ? css.active : ""}`}
              onClick={() => setSelected(img)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(img);
              }}
              aria-label={`View ${img.alt}`}
            >
              <Image src={img.src} width={120} height={80} alt={img.alt} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div id="testimonials">
        <Testimonial />
      </motion.div>

      <motion.div id="blogs">
        <Blogs />
      </motion.div>

      <motion.section
        className={css.financeSection}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="finance"
      >
        <div className={css.rupeeBg}>
          <Image
            src="/assets/finance/Finance3.png"
            alt="Rupee Background"
            width={250}
            height={400}
            priority
            className={css.rupeeBgImage}
          />
        </div>

        <motion.h2
          className={css.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Finance
        </motion.h2>

        <motion.p
          className={css.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We Are Connected With HDFC And ICICI Bank To Bring You Flexible Finance Options.
        </motion.p>

        <motion.div
          className={css.banks}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className={css.bankCard}>
            <Image src="/assets/finance/Finance2.png" alt="HDFC" width={150} height={80} />
          </div>
          <div className={css.bankCard}>
            <Image src="/assets/finance/Finance1.png" alt="ICICI" width={150} height={80} />
          </div>
        </motion.div>

        <motion.a
          href="tel:+911234567890"
          className={css.callBtn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Phone size={18} /> Call Our Team To Know More
        </motion.a>
      </motion.section>

      <motion.div
        className={css.faqSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id={"faqs"}
      >
        <h2 className={css.title}>FAQ&apos;s</h2>
        <div className={css.faqList}>
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={`${css.faqItem} ${activeId === faq.id ? css.active : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: faq.id * 0.02 }}
            >
              <button className={css.question} onClick={() => toggleFAQ(faq.id)}>
                {faq.question}
                <span className={css.icon}>{activeId === faq.id ? "−" : "+"}</span>
              </button>
              {activeId === faq.id && (
                <motion.p
                  className={css.answer}
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

      <section className={css.formSection}>
        <motion.div
          className={css.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        <motion.div
          id={"getinfo"}
          className={css.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={css.title}>Get More Info</h2>
          <p className={css.subtitle}>
            Hear from adventurers, professionals, and enthusiasts who have pushed
            our vehicles to their limits.
          </p>

          <form
            className={css.form}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted");
            }}
          >
            <div className={css.row}>
              <div className={css.inputGroup}>
                <label>ENTER YOUR NAME*</label>
                <div className={css.row}>
                  <input type="text" placeholder="First Name" className={css.inputFieldname} />
                  <input type="text" placeholder="Second Name" className={css.inputFieldname} />
                </div>
              </div>
            </div>

            <div className={css.inputGroup}>
              <label>ENTER YOUR NUMBER*</label>
              <div className={css.row}>
                <span className={css.phoneCode}>+91</span>
                <input type="tel" placeholder="Your Number" className={css.inputField} />
              </div>
            </div>

            <div className={css.inputGroup}>
              <label>ENTER YOUR EMAIL ADDRESS*</label>
              <input type="email" placeholder="Email" className={css.inputField} />
            </div>

            <div className={css.inputGroup}>
              <label>MODEL TYPE*</label>
              <select className={css.inputField} defaultValue="">
                <option value="" disabled>
                  Select The Model
                </option>
                <option value="XTR">Ashva 4x4 XTR</option>
                <option value="PFX">Ashva 4x4 PFX</option>
              </select>
            </div>

            <div className={css.inputGroup}>
              <textarea placeholder="Message" className={css.textarea}></textarea>
            </div>

            <button type="submit" className={css.submitBtn}>
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