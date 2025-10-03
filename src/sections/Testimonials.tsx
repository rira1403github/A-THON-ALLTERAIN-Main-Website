// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "./Testimonials.module.css";

// interface Testimonial {
//   id: number;
//   img: string;
//   alt?: string;
//   quote: string;
//   author: string;
//   role: string;
//   link: string;
// }

// export default function Testimonials() {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       img: "/assets/landingPage/Test1.webp",
//       alt: "Rider testimonial 1",
//       quote: "Great Initiative! INTELLIGENCE REVOLUTION, The Key For Sustainable Growth.",
//       author: "Umakant Soni",
//       role: "Chaiman AI Foundry | Co-Founder ARTPARK",
//       link: "#",
//     },
//     {
//       id: 2,
//       img: "/assets/landingPage/Test2.webp",
//       alt: "Rider testimonial 2",
//       quote: "This Product, A Game Changer For Farming, Is Also A Game Changer For Defense.",
//       author: "Virbhadra Singh Rawat",
//       role: "Senior Advisor Aerospace, Defence, Startups",
//       link: "#",
//     },
//     {
//       id: 3,
//       img: "/assets/landingPage/Test3.webp",
//       alt: "Rider testimonial 3",
//       quote: "Quite pleases after seeing All of your Accomplishments in this Robotic World & Artificial Intelligence.",
//       author: "Sri HD Kumaraswany",
//       role: "Honorable Minister of Heavy Industries & Steel",
//       link: "#",
//     },
//   ];

//   return (
//     <section className={styles.testimonials} role="region" aria-label="Testimonials">
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
//         Hear from adventurers, professionals, and enthusiasts who have pushed our vehicles to their limits.
//       </motion.p>

//       {/* Desktop grid */}
//       <div className={styles.grid}>
//         {testimonials.map((t) => (
//           <motion.div
//             key={t.id}
//             className={styles.card}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className={styles.imageWrapper}>
//               <Image
//                 src={t.img}
//                 alt={t.alt ?? `testimonial-${t.id}`}
//                 width={600}
//                 height={400}
//                 className={styles.testimonialImage}
//               />
//               <div className={styles.overlay}>
//                 <p className={styles.quote}>"{t.quote}"</p>
//                 <Link href={t.link} className={styles.readMore}>
//                   Read More →
//                 </Link>
//                 <p className={styles.author}>
//                   {t.author}
//                   <br />
//                   {t.role}
//                 </p>
//                 {/* <p className={styles.role}>{t.role}</p> */}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Mobile slider */}
//       <div className={styles.slider}>
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//         >
//           {testimonials.map((t) => (
//             <SwiperSlide key={t.id}>
//               <motion.div
//                 className={styles.mobileCard}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <div className={styles.imageWrapper}>
//                   <Image
//                     src={t.img}
//                     alt={t.alt ?? `testimonial-${t.id}`}
//                     width={800}
//                     height={500}
//                     className={styles.testimonialImage}
//                   />
//                 </div>
//                 <div className={styles.mobileContent}>
//                   <p className={styles.author}>{t.author}</p>
//                   <p className={styles.role}>{t.role}</p>
//                   <Link href={t.link} className={styles.readMore}>
//                     Read More →
//                   </Link>
//                 </div>
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
import Image from "next/image";
import Link from "next/link";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: number;
  img: string;
  alt?: string;
  quote: string;
  author: string;
  role: string;
  link: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      img: "/assets/landingPage/Test1.webp",
      alt: "Rider testimonial 1",
      quote:
        "Great Initiative! INTELLIGENCE REVOLUTION, The Key For Sustainable Growth.",
      author: "Umakant Soni",
      role: "Chaiman AI Foundry | Co-Founder ARTPARK",
      link: "#",
    },
    {
      id: 2,
      img: "/assets/landingPage/Test2.webp",
      alt: "Rider testimonial 2",
      quote:
        "This Product, A Game Changer For Farming, Is Also A Game Changer For Defense.",
      author: "Virbhadra Singh Rawat",
      role: "Senior Advisor Aerospace, Defence, Startups",
      link: "#",
    },
    {
      id: 3,
      img: "/assets/landingPage/Test3.webp",
      alt: "Rider testimonial 3",
      quote:
        "Quite pleases after seeing All of your Accomplishments in this Robotic World & Artificial Intelligence.",
      author: "Sri HD Kumaraswany",
      role: "Honorable Minister of Heavy Industries & Steel",
      link: "#",
    },
  ];

  return (
    <section className={styles.testimonials} role="region" aria-label="Testimonials">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Hear from adventurers, professionals, and enthusiasts who have pushed our vehicles to their limits.
      </motion.p>

      {/* Desktop grid */}
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={t.img}
                alt={t.alt ?? `testimonial-${t.id}`}
                width={600}
                height={400}
                className={styles.testimonialImage}
              />
              <div className={styles.overlay}>
                <p className={styles.quote}>
                  &quot;{t.quote}&quot;
                </p>
                <Link href={t.link} className={styles.readMore}>
                  Read More →
                </Link>
                <p className={styles.author}>
                  {t.author}
                  <br />
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile slider */}
      <div className={styles.slider}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                className={styles.mobileCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={t.img}
                    alt={t.alt ?? `testimonial-${t.id}`}
                    width={800}
                    height={500}
                    className={styles.testimonialImage}
                  />
                </div>
                <div className={styles.mobileContent}>
                  <p className={styles.quote}>
                    &quot;{t.quote}&quot;
                  </p>
                  <p className={styles.author}>{t.author}</p>
                  <p className={styles.role}>{t.role}</p>
                  <Link href={t.link} className={styles.readMore}>
                    Read More →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}