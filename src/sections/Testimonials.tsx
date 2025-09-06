// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import styles from "./Testimonials.module.css";

// import img1 from "/assets/landingPage/Test1.webp";
// import img2 from "/assets/landingPage/Test2.webp";
// import img3 from "/assets/landingPage/Test3.webp";

// export default function Testimonials() {
//   const testimonials = [
//     { id: 1, img: img1 },
//     { id: 2, img: img2 },
//     { id: 3, img: img3 },
//   ];

//   return (
//     <section className={styles.testimonials}>
//       <motion.h2
//         className={styles.title}
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Testimonials
//       </motion.h2>

//       <motion.p
//         className={styles.subtitle}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         Hear from adventurers, professionals, and enthusiasts who have pushed
//         our vehicles to their limits.
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
//             <img src={t.img.src} alt="testimonial" />
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
//                 <img src={t.img.src} alt="testimonial" />
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
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    { id: 1, img: "/assets/landingPage/Test1.webp" },
    { id: 2, img: "/assets/landingPage/Test2.webp" },
    { id: 3, img: "/assets/landingPage/Test3.webp" },
  ];

  return (
    <section className={styles.testimonials}>
      {/* Title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hear from adventurers, professionals, and enthusiasts who have pushed
        our vehicles to their limits.
      </motion.p>

      {/* Grid (for desktop view) */}
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={t.img} alt={`testimonial-${t.id}`} />
          </motion.div>
        ))}
      </div>

      {/* Slider (for mobile view) */}
      <div className={styles.slider}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={t.img} alt={`testimonial-${t.id}`} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
