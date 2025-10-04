// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import Navbar from "@/sections/Navbar";
// import Highlights from "@/components/HighProduct/High6x6";
// import Footer from "@/components/Footer/Footer";
// import styles from "./Ashva6x6.module.css";
// import Blogs from "@/sections/Blogs";
// import Testimonial from "@/sections/Testimonials";
// import CTA from "@/sections/ActionsSection";
// import { Phone } from "lucide-react";

// const ProductPage = () => {

//   interface GalleryImage {
//     src: string;
//     alt: string;
//   }

//   const [color, setColor] = useState<keyof typeof carImages>("red");
//   const [imageIndex, setImageIndex] = useState(0);
//   const [variant, setVariant] = useState("XTR");
//   const router = useRouter();
//   const carImages: Record<string, string[]> = {
//     red: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//        orange: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     yellow: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     green: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     grey: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     black: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     white: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     brown: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     blue: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//     rainbow: [
//       "/assets/productpage/4x4-1.webp",
//       "/assets/productpage/4x4-2.webp",
//       "/assets/productpage/4x4-3.webp",
//       "/assets/productpage/4x4-4.webp",
//     ],
//   };

//   const images: GalleryImage[] = [
//     { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 6x6 pict 1" },
//     { src: "/assets/productpage/blogs4x42.webp", alt: "Ashva 6x6 pict 2" },
//     { src: "/assets/productpage/blogs4x43.webp", alt: "Ashva 6x6 pict 3" },
//     { src: "/assets/productpage/blogs4x44.webp", alt: "Ashva 6x6 pict 4" },
//     { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 6x6 pict 1" },
//   ];
  
// const [selected, setSelected] = useState<GalleryImage>(images[0]);

// const faqs = [
//   { id: 1, question: "What is the Ashva 6X6 designed for?", answer: "The Ashva 6X6 ATV is a heavy-duty off-road vehicle designed for carrying large loads, navigating tough terrains, and serving industries such as agriculture, forestry, rescue operations, and adventure tourism." },
//   { id: 2, question: "How does the six-wheel design help?", answer: "The six-wheel configuration provides superior stability, enhanced traction, and greater load-carrying capacity compared to standard 4X4 vehicles, making it ideal for challenging Indian terrains." },
//   { id: 3, question: "Can it handle extreme terrains?", answer: "Yes, the Ashva 6X6 is engineered to navigate mud, sand, rocks, steep slopes, and uneven paths without compromising performance, ensuring a smooth off-road ATV riding experience." },
//   { id: 4, question: "What is the load capacity of the Ashva 6X6?", answer: "It is built for heavy-duty work and can carry larger loads than conventional off-road vehicles, making it perfect for industrial, agricultural, and utility purposes." },
//   { id: 5, question: "Is it suitable for both work and adventure?", answer: "Absolutely. The 6X6 manages rigorous work tasks while also delivering thrilling off-road adventures for tourism or recreational purposes." },
//   { id: 6, question: "How reliable is it in Indian conditions?", answer: "Designed specifically for India’s diverse climates and terrains, the Ashva 6X6 ensures consistent performance in heat, rains, and rugged landscapes." },
//   { id: 7, question: "What about maintenance and servicing?", answer: "Being proudly Made in India, it offers easy access to service centers and spare parts, making maintenance simple, convenient, and cost-effective." },
//   { id: 8, question: "Who can benefit from using the Ashva 6X6?", answer: "Farmers, industrial operators, forestry departments, rescue teams, and adventure tourism operators all benefit from its unmatched power, stability, and versatility." },
//   { id: 9, question: "Can it be customized?", answer: "Yes, the Ashva 6X6 can be fitted with attachments or accessories tailored to specific business, industrial, or operational needs." },
//   { id: 10, question: "Why choose Ashva 6X6 over imported vehicles?", answer: "It offers superior stability, higher load capacity, Indian terrain compatibility, lower maintenance costs, and reliable performance at a competitive price compared to imported off-road vehicles." },
//   { id: 11, question: "Is it safe to operate on challenging terrains?", answer: "Yes, with a robust chassis, six-wheel drive, and reinforced design, the Ashva 6X6 provides maximum safety, control, and confidence even on extreme off-road trails." },
//   { id: 12, question: "Does it provide long-term value?", answer: "Absolutely. With durable construction, easy servicing, and versatile performance, the Ashva 6X6 is a long-term investment for both business operations and adventure activities." }
// ];

//   const [activeId, setActiveId] = useState<number | null>(null);

//   const toggleFAQ = (id: number) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <div className={styles.pageWrapper}>
//       <Navbar />

//       <motion.div
//         className={styles.videoSection}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <video className={styles.video} autoPlay muted loop>
//           Your browser does not support the video tag.
//         </video>
//         <motion.div
//           className={styles.playButton}
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           ▶
//         </motion.div>
//       </motion.div>

//       <motion.div
//         id={"overview"}
//         className={styles.scrollNav}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//       >
//         {[
//           { id: "overview", label: "Overview" },
//           { id: "highlights", label: "Key Highlights" },
//           { id: "variants", label: "Variants & Pricing" },
//           { id: "gallery", label: "Gallery" },
//           { id: "blogs", label: "Blogs" },
//           { id: "testimonials", label: "Testimonials" },
//           { id: "finance", label: "Finance" },
//           { id: "faqs", label: "FAQ's" },
//           { id: "getinfo", label: "Get More Info" },
//         ].map((item) => (
//           <button
//             key={item.id}
//             onClick={() => scrollToSection(item.id)}
//             className={styles.scrollBtn}
//           >
//             {item.label}
//           </button>
//         ))}
//       </motion.div>

//       <motion.div
//         className={styles.productInfo}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <Image
//           src="/assets/productpage/Ashva6x6Title.png"
//           alt="Ashva 6x6"
//           width={400}
//           height={100}
//           priority
//           className={styles.productName}
//         />
//          <p className={styles.productdescrition}>
//           A compact, fuel-efficient ATV built for daily utility and fun on farms, estates, and trails.
//         </p>
//         <p className={styles.productPrice}>
//           Starting at <span>22lakhs-42 lakhs*</span>
//         </p>
//         <div className={styles.buttons}>
//           <button className={styles.brochureBtn}>Download The Brochure</button>
//           <button className={styles.testDriveBtn}>Book Test Drive</button>
//         </div>
//       </motion.div>

//       <motion.div
//       id={"highlights"}>
//       <Highlights />
//       </motion.div>

//       <div
//       className={styles.variantsSection}
//       style={{ backgroundImage: `url(${carImages[color][imageIndex]})` }}
//     >
//       <div className={styles.overlay}>
//         <motion.h2
//           id="variants"
//           className={styles.heading}
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Variants & Pricing
//         </motion.h2>

//         <motion.p
//           className={styles.subheading}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           Hear from adventurers, professionals, and enthusiasts who have pushed
//           our vehicles to their limits.
//         </motion.p>

//         <div className={styles.content}>
//           <motion.div
//             className={styles.details}
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className={styles.tabs}>
//               <button
//                 className={`${styles.tab} ${
//                   variant === "XTR" ? styles.activeTab : ""
//                 }`}
//                 onClick={() => setVariant("XTR")}
//               >
//                 XTR
//               </button>
//               <button
//                 className={`${styles.tab} ${
//                   variant === "PFX" ? styles.activeTab : ""
//                 }`}
//                 onClick={() => setVariant("PFX")}
//               >
//                 PFX
//               </button>
//             </div>
//             <p className={styles.variantLabel}>Variants</p>
//             <h3 className={styles.price}>Starting at ₹ 22,09,000*</h3>

//             <div className={styles.specs}>
//               <div>
//                 <h4>Petrol</h4>
//                 <p>Fuel</p>
//               </div>
//               <div>
//                 <h4>1000 CC</h4>
//                 <p>Engine</p>
//               </div>
//               <div>
//                 <h4>Automatic</h4>
//                 <p>Transmission</p>
//               </div>
//               <div>
//                 <h4>71 Hp</h4>
//                 <p>Horse Power</p>
//               </div>
//               <div>
//                 <h4>2</h4>
//                 <p>Seater</p>
//               </div>
//               <div>
//                 <h4>2</h4>
//                 <p>Torque</p>
//               </div>
//             </div>

//             <div className={styles.buttons}>
//               <button
//                 className={styles.outlineBtn}
//                 onClick={() => router.push("/products/Ashva4x4/Specifications")}
//               >
//                 View All Specification
//               </button>
//               <button
//                 className={styles.fillBtn}
//                 onClick={() => router.push("/booking")}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         <div className={styles.colorPicker}>
//           {Object.keys(carImages).map((col) => (
//             <span
//               key={col}
//               className={`${styles.colorDot} ${styles[col]} ${
//                 color === col ? styles.active : ""
//               }`}
//               onClick={() => {
//                 setColor(col as keyof typeof carImages);
//                 setImageIndex(0);
//               }}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>

//       <div className={styles.galleryWrapper}>
//           <h2 className={styles.Galleryheading}>Gallery</h2>

//           <motion.div
//             key={selected.src}
//             className={styles.mainImage}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src={selected.src}
//               width={700}
//               height={500}
//               alt={selected.alt}
//             />
//           </motion.div>

//           <div className={styles.thumbnailRow}>
//             {images.map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 className={`${styles.thumbnail} ${
//                   img.src === selected.src ? styles.active : ""
//                 }`}
//                 onClick={() => setSelected(img)}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Image src={img.src} width={120} height={80} alt={img.alt} />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//        <motion.div
//       id="testimonials">
//         <Testimonial />
//       </motion.div>

//       <motion.div
//       id="blogs">
//         <Blogs />
//       </motion.div>

//       <motion.section
//       className={styles.financeSection}
//       initial={{ opacity: 0, y: -40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       id="finance"
//     >
//       <div className={styles.rupeeBg}>
//         <Image src="/assets/finance/Finance3.png" 
//           alt="RupeeBG" 
//           width={250} 
//           height={400} 
//           priority
//           className={styles.rupeeBgImage}
//         />
//       </div>

//       <motion.h2
//         className={styles.title}
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1, duration: 0.8 }}
//       >
//         Finance
//       </motion.h2>

//       <motion.p
//         className={styles.subtitle}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//       >
//         We Are Connected With HDFC And ICICI Bank To Bring You Flexible Finance Options.
//       </motion.p>

//       <motion.div
//         className={styles.banks}
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//       >
//         <div className={styles.bankCard}>
//           <Image src="/assets/finance/Finance2.png" alt="HDFC" width={150} height={80} />
//         </div>
//         <div className={styles.bankCard}>
//           <Image src="/assets/finance/Finance1.png" alt="ICICI" width={150} height={80} />
//         </div>
//       </motion.div>

//       <motion.a
//         href="tel:+911234567890"
//         className={styles.callBtn}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//       >
//         <Phone size={18} /> Call Our Team To Know More
//       </motion.a>
//     </motion.section>

//       <motion.div
//         className={styles.faqSection}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         id={"faqs"}
//       >
//         <h2 className={styles.title} >FAQ&apos;s</h2>
//         <div className={styles.faqList}>
//           {faqs.map((faq) => (
//             <motion.div
//               key={faq.id}
//               className={`${styles.faqItem} ${
//                 activeId === faq.id ? styles.active : ""
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.1, delay: faq.id * 0.1 }}
//             >
//               <button
//                 className={styles.question}
//                 onClick={() => toggleFAQ(faq.id)}
//               >
//                 {faq.question}
//                 <span className={styles.icon}>
//                   {activeId === faq.id ? "−" : "+"}
//                 </span>
//               </button>
//               {activeId === faq.id && (
//                 <motion.p
//                   className={styles.answer}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   {faq.answer}
//                 </motion.p>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       <section className={styles.formSection}>
//         <motion.div
//           className={styles.left}
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* <Image
//             src="/assets/productpage/RedAshva4x4.png"
//             alt="Form Illustration"
//             width={400}
//             height={400}
//             className={styles.image}
//           /> */}
//         </motion.div>

//         <motion.div
//           id={"getinfo"}
//           className={styles.right}
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className={styles.title}>Get More Info</h2>
//           <p className={styles.subtitle}>
//             Hear from adventurers, professionals, and enthusiasts who have pushed
//             our vehicles to their limits.
//           </p>

//           <form className={styles.form}>
//             <div className={styles.row}>
//               <div className={styles.inputGroup}>
//                 <label>ENTER YOUR NAME*</label>
//                 <div className={styles.row}>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className={styles.inputFieldname}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Second Name"
//                     className={styles.inputFieldname}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className={styles.inputGroup}>
//               <label>ENTER YOUR NUMBER*</label>
//               <div className={styles.row}>
//                 <span className={styles.phoneCode}>+91</span>
//                 <input
//                   type="text"
//                   placeholder="Your Number"
//                   className={styles.inputField}
//                 />
//               </div>
//             </div>

//             <div className={styles.inputGroup}>
//               <label>ENTER YOUR EMAIL ADDRESS*</label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className={styles.inputField}
//               />
//             </div>

//             <div className={styles.inputGroup}>
//               <label>MODEL TYPE*</label>
//               <select className={styles.inputField}>
//                 <option>Select The Model</option>
//                 <option>Ashva 4x4 XTR</option>
//                 <option>Ashva 4x4 PFX</option>
//               </select>
//             </div>

//             <div className={styles.inputGroup}>
//               <textarea
//                 placeholder="Message"
//                 className={styles.textarea}
//               ></textarea>
//             </div>

//             <button type="submit" className={styles.submitBtn}>
//               Submit
//             </button>
//           </form>
//         </motion.div>
//       </section>
//       <CTA />
//       <Footer />
//     </div>
//   );
// };

// export default ProductPage;





"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Highlights from "@/components/HighProduct/High6x6";
import Footer from "@/components/Footer/Footer";
import styles from "./Ashva6x6.module.css";
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
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 6x6 pict 1" },
    { src: "/assets/productpage/blogs4x42.webp", alt: "Ashva 6x6 pict 2" },
    { src: "/assets/productpage/blogs4x43.webp", alt: "Ashva 6x6 pict 3" },
    { src: "/assets/productpage/blogs4x44.webp", alt: "Ashva 6x6 pict 4" },
    { src: "/assets/productpage/blogs4x41.webp", alt: "Ashva 6x6 pict 1" },
  ];

  const [selected, setSelected] = useState<GalleryImage>(images[0]);

  const faqs = [
  { id: 1, question: "What is the Ashva 6X6 designed for?", answer: "The Ashva 6X6 ATV is a heavy-duty off-road vehicle designed for carrying large loads, navigating tough terrains, and serving industries such as agriculture, forestry, rescue operations, and adventure tourism." },
  { id: 2, question: "How does the six-wheel design help?", answer: "The six-wheel configuration provides superior stability, enhanced traction, and greater load-carrying capacity compared to standard 4X4 vehicles, making it ideal for challenging Indian terrains." },
  { id: 3, question: "Can it handle extreme terrains?", answer: "Yes, the Ashva 6X6 is engineered to navigate mud, sand, rocks, steep slopes, and uneven paths without compromising performance, ensuring a smooth off-road ATV riding experience." },
  { id: 4, question: "What is the load capacity of the Ashva 6X6?", answer: "It is built for heavy-duty work and can carry larger loads than conventional off-road vehicles, making it perfect for industrial, agricultural, and utility purposes." },
  { id: 5, question: "Is it suitable for both work and adventure?", answer: "Absolutely. The 6X6 manages rigorous work tasks while also delivering thrilling off-road adventures for tourism or recreational purposes." },
  { id: 6, question: "How reliable is it in Indian conditions?", answer: "Designed specifically for India’s diverse climates and terrains, the Ashva 6X6 ensures consistent performance in heat, rains, and rugged landscapes." },
  { id: 7, question: "What about maintenance and servicing?", answer: "Being proudly Made in India, it offers easy access to service centers and spare parts, making maintenance simple, convenient, and cost-effective." },
  { id: 8, question: "Who can benefit from using the Ashva 6X6?", answer: "Farmers, industrial operators, forestry departments, rescue teams, and adventure tourism operators all benefit from its unmatched power, stability, and versatility." },
  { id: 9, question: "Can it be customized?", answer: "Yes, the Ashva 6X6 can be fitted with attachments or accessories tailored to specific business, industrial, or operational needs." },
  { id: 10, question: "Why choose Ashva 6X6 over imported vehicles?", answer: "It offers superior stability, higher load capacity, Indian terrain compatibility, lower maintenance costs, and reliable performance at a competitive price compared to imported off-road vehicles." },
  { id: 11, question: "Is it safe to operate on challenging terrains?", answer: "Yes, with a robust chassis, six-wheel drive, and reinforced design, the Ashva 6X6 provides maximum safety, control, and confidence even on extreme off-road trails." },
  { id: 12, question: "Does it provide long-term value?", answer: "Absolutely. With durable construction, easy servicing, and versatile performance, the Ashva 6X6 is a long-term investment for both business operations and adventure activities." }
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
          src="/assets/productpage/Ashva6x6Title.png"
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