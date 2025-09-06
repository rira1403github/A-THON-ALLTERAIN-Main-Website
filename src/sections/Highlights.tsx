// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import styles from "./Highlights.module.css";

// import img1 from "/assets/landingPage/Test1.webp";
// import img2 from "/assets/landingPage/Test2.webp";
// import img3 from "/assets/landingPage/Test3.webp";

// export default function Highlights() {
//   const testimonials = [
//     { id: 1, img: img1, title: "India’s First Homegrown ATV", desc: "A-THON made history by unveiling the Ashva 4X4, designed and engineered in India for agriculture, adventure, and extreme off-road use." },
//     { id: 2, img: img2, title: "Powerful Engineering", desc: "Equipped with a 976cc V-twin engine, advanced suspension, and 2WD/4WD with locking differentials, ensuring durability, precision, and control across terrains." },
//     { id: 3, img: img3, title: "Multi-Industry Applications", desc: "Built not only for farming but also for defence, robotics, and adventure sports, making it a versatile solution for different industries." },
//     { id: 4, img: img3, title: "Trusted & Recognized", desc: "Endorsed by leaders in AI, defence, and heavy industries, highlighting A-THON’s credibility, innovation, and impact as a true game-changer" },
//   ];

//   return (
//     <section className={styles.highlights}>
//       <motion.h2
//         className={styles.title}
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         KEY HIGHLIGHTS
//       </motion.h2>

//       <motion.p
//         className={styles.subtitle}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         A-THON isn’t just building ATVs, we’re building a new era of mobility. These highlights reveal how we turn challenges into unstoppable journeys.
//       </motion.p>

//       <div className={styles.grid}>
//         {testimonials.map((t) => (
//           <motion.div
//             key={t.id}
//             className={styles.card}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src={t.img.src} alt="highlights" />
//             <h2>{t.title}</h2>
//             <p>{t.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       <div className={styles.slider}>
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop
//           autoplay={{ delay: 2500 }}
//           // pagination={{ clickable: true }}
//         >
//           {testimonials.map((t) => (
//             <SwiperSlide key={t.id}>
//               <motion.div
//                 className={styles.card}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <img src={t.img.src} alt="highlights" />
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Highlights.module.css";

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      img: "/assets/landingPage/Test1.webp",
      title: "India’s First Homegrown ATV",
      desc: "A-THON made history by unveiling the Ashva 4X4, designed and engineered in India for agriculture, adventure, and extreme off-road use.",
    },
    {
      id: 2,
      img: "/assets/landingPage/Test2.webp",
      title: "Powerful Engineering",
      desc: "Equipped with a 976cc V-twin engine, advanced suspension, and 2WD/4WD with locking differentials, ensuring durability, precision, and control across terrains.",
    },
    {
      id: 3,
      img: "/assets/landingPage/Test3.webp",
      title: "Multi-Industry Applications",
      desc: "Built not only for farming but also for defence, robotics, and adventure sports, making it a versatile solution for different industries.",
    },
    {
      id: 4,
      img: "/assets/landingPage/Test3.webp",
      title: "Trusted & Recognized",
      desc: "Endorsed by leaders in AI, defence, and heavy industries, highlighting A-THON’s credibility, innovation, and impact as a true game-changer.",
    },
  ];

  return (
    <section className={styles.highlights}>
      {/* Title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        KEY HIGHLIGHTS
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A-THON isn’t just building ATVs, we’re building a new era of mobility. These highlights reveal how we turn challenges into unstoppable journeys.
      </motion.p>

      {/* Grid view for desktop */}
      <div className={styles.grid}>
        {highlights.map((h) => (
          <motion.div
            key={h.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={h.img} alt={`highlight-${h.id}`} />
            <h3>{h.title}</h3>
            <p>{h.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Slider view for mobile */}
      <div className={styles.slider}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
        >
          {highlights.map((h) => (
            <SwiperSlide key={h.id}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={h.img} alt={`highlight-${h.id}`} />
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
