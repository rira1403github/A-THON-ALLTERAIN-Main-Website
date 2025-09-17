// "use client";

// import { motion } from "framer-motion";
// import styles from "./about.module.css";
// import { FaLinkedin } from "react-icons/fa";
// import Footer from "@/components/Footer/Footer";
// import Navbar from "@/sections/Navbar";
// import { section } from "framer-motion/client";
// import Link from "next/link";

// const team = [
//   {
//     name: "Farzan Ahmed",
//     role: "Ideation & Innovation Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Zoheb Jafari",
//     role: "Director of Operations",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Vikash Choudhary",
//     role: "Marketing Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Arpita Bhatt",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Irfann Sheriff",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Ashoka VA",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Farzan Ahmed",
//     role: "Ideation & Innovation Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Zoheb Jafari",
//     role: "Director of Operations",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Vikash Choudhary",
//     role: "Marketing Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Farzan Ahmed",
//     role: "Ideation & Innovation Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Zoheb Jafari",
//     role: "Director of Operations",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Vikash Choudhary",
//     role: "Marketing Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Arpita Bhatt",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Irfann Sheriff",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Ashoka VA",
//     role: "Head of Human Resource",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Farzan Ahmed",
//     role: "Ideation & Innovation Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Zoheb Jafari",
//     role: "Director of Operations",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Vikash Choudhary",
//     role: "Marketing Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Farzan Ahmed",
//     role: "Ideation & Innovation Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Zoheb Jafari",
//     role: "Director of Operations",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   },
//   {
//     name: "Vikash Choudhary",
//     role: "Marketing Head",
//     img: "assets/Team/Team1.png",
//     linkedin: "#",
//   }
// ];

// export default function AboutUs() {
//   return (
//     <section>
//         <Navbar />
//     <div className={styles.container}>
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className={styles.hero}
//       >
//         <div className={styles.heroImage}>image</div>
//         <h2 className={styles.heading}>About Us</h2>
//         <p className={styles.subtext}>
//           Explore stories of innovation, adventure, and the technology that
//           drives our vehicles forward.
//         </p>
//       </motion.div>

//       <div className={styles.section}>
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className={styles.left}
//         >
//           <h3 className={styles.title}>W H O &nbsp; W E &nbsp; A R E</h3>
//           <p className={styles.text}>
//             At A-THON, we are driven by a bold vision to redefine mobility,
//             engineering, and innovation for the future. Born with the spirit of
//             exploration and resilience, A-THON specializes in advanced
//             all-terrain vehicles, cutting-edge robotic solutions, and technology
//             platforms designed to perform in the toughest environments.
//             <br />
//             We are more than just a company—we are engineers, creators, and
//             problem-solvers committed to pushing the boundaries of performance,
//             safety, and adaptability. Every product we build reflects our core
//             values: strength, reliability, and innovation. From off-road
//             mobility solutions like the ASHVA series to pioneering contributions
//             in defense, disaster response, and industrial automation, A-THON is
//             shaping a future where technology seamlessly meets real-world
//             challenges.
//             <br />
//             Our approach is collaborative, modular, and forward-looking,
//             ensuring that our solutions not only solve today's problems but are
//             also prepared for tomorrow’s needs. With a focus on Made in India
//             excellence, we blend engineering precision with rugged practicality,
//             enabling industries, defense forces, and individuals to achieve the
//             extraordinary.
//             <br />
//             At A-THON, we don’t just build machines—we build platforms of
//             possibility.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className={styles.right}
//         >
//           <div className={styles.mission}>
//             <h3 className={styles.title}>M I S S I O N</h3>
//             <p>
//               “To engineer advanced, reliable, and sustainable mobility
//               solutions that empower people to conquer any terrain with
//               confidence.”
//             </p>
//           </div>
//           <div className={styles.vision}>
//             <h3 className={styles.title}>V I S I O N</h3>
//             <p>
//               “To engineer advanced, reliable, and sustainable mobility
//               solutions that empower people to conquer any terrain with
//               confidence.”
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className={styles.teamSection}
//       >
//         <h2 className={styles.heading}>Our Family</h2>
//         <p className={styles.subtext}>
//           Explore stories of innovation, adventure, and the technology that
//           drives our vehicles forward.
//         </p>

//         <div className={styles.teamGrid}>
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               className={styles.card}
//               whileHover={{ scale: 1.02 }}
//             >
//                 <img src={member.img} alt={member.name} className={styles.avatar} />
//                 <h4>{member.name}</h4>
//                 <div className={styles.teambottom}>
//                     <div>
//               <p>{member.role}</p>
//               </div>
//               <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin className={styles.icon} />
//               </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//       <motion.div
//               className={styles.facility}
//             >
//                <h2 className={styles.heading}>Our Facility</h2>
//         <p className={styles.subtext}>
//           Explore stories of innovation, adventure, and the technology that drives our vehicles forward.
//         </p>
//         <div className={styles.imagecontainer}>

//         </div>
//     </motion.div>
//       <section className={styles.subscribe}>
//       <div className={styles.subscribecontainer}>
//         <div className={styles.left}>
//             <h2 className={styles.subscribetitle}>
//             Join
//             <br /> – Our Team
//           </h2>
//           <p className={styles.subscribesubtitle}>
//             Get weekly update about our product on your email, no spam guaranteed we promise ✌️
//           </p>
//         </div>

//         <form className={styles.subscribeform}>
//           <div className={styles.inputWrapper}>
//             <span className={styles.icon}>📩</span>
//             <input
//               type="email"
//               placeholder="youremail123@gmail.com"
//               aria-label="Email"
//               required
//               className={styles.input}
//             />
//             <button type="submit" className={styles.button}>
//               SUBSCRIBE
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//     </div>
//     <Footer />
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import styles from "./about.module.css";
import { FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/sections/Navbar";
import Image from "next/image";

const team = [
  {
    name: "Farzan Ahmed",
    role: "Ideation & Innovation Head",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
  {
    name: "Zoheb Jafari",
    role: "Director of Operations",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
  {
    name: "Vikash Choudhary",
    role: "Marketing Head",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
  {
    name: "Arpita Bhatt",
    role: "Head of Human Resource",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
  {
    name: "Irfann Sheriff",
    role: "Head of Human Resource",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
  {
    name: "Ashoka VA",
    role: "Head of Human Resource",
    img: "/assets/Team/Team1.png",
    linkedin: "#",
  },
];

export default function AboutUs() {
  return (
    <section>
      <Navbar />
      <div className={styles.container}>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.hero}
        >
          <div className={styles.heroImage}>image</div>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.subtext}>
            Explore stories of innovation, adventure, and the technology that
            drives our vehicles forward.
          </p>
        </motion.div>

        {/* Who We Are + Mission/Vision */}
        <div className={styles.section}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={styles.left}
          >
            <h3 className={styles.title}>W H O &nbsp; W E &nbsp; A R E</h3>
            <p className={styles.text}>
              At A-THON, we are driven by a bold vision to redefine mobility,
              engineering, and innovation for the future. Born with the spirit
              of exploration and resilience, A-THON specializes in advanced
              all-terrain vehicles, cutting-edge robotic solutions, and
              technology platforms designed to perform in the toughest
              environments.
              <br />
              We are more than just a company&mdash;we are engineers, creators,
              and problem-solvers committed to pushing the boundaries of
              performance, safety, and adaptability. Every product we build
              reflects our core values: strength, reliability, and innovation.
              From off-road mobility solutions like the ASHVA series to
              pioneering contributions in defense, disaster response, and
              industrial automation, A-THON is shaping a future where technology
              seamlessly meets real-world challenges.
              <br />
              Our approach is collaborative, modular, and forward-looking,
              ensuring that our solutions not only solve today&apos;s problems
              but are also prepared for tomorrow&apos;s needs. With a focus on
              Made in India excellence, we blend engineering precision with
              rugged practicality, enabling industries, defense forces, and
              individuals to achieve the extraordinary.
              <br />
              At A-THON, we don&apos;t just build machines&mdash;we build
              platforms of possibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={styles.right}
          >
            <div className={styles.mission}>
              <h3 className={styles.title}>M I S S I O N</h3>
              <p>
                “To engineer advanced, reliable, and sustainable mobility
                solutions that empower people to conquer any terrain with
                confidence.”
              </p>
            </div>
            <div className={styles.vision}>
              <h3 className={styles.title}>V I S I O N</h3>
              <p>
                “To engineer advanced, reliable, and sustainable mobility
                solutions that empower people to conquer any terrain with
                confidence.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={styles.teamSection}
        >
          <h2 className={styles.heading}>Our Family</h2>
          <p className={styles.subtext}>
            Explore stories of innovation, adventure, and the technology that
            drives our vehicles forward.
          </p>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className={styles.card}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  className={styles.avatar}
                  width={200}
                  height={200}
                />
                <h4>{member.name}</h4>
                <div className={styles.teambottom}>
                  <div>
                    <p>{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className={styles.icon} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facility */}
        <motion.div className={styles.facility}>
          <h2 className={styles.heading}>Our Facility</h2>
          <p className={styles.subtext}>
            Explore stories of innovation, adventure, and the technology that
            drives our vehicles forward.
          </p>
          <div className={styles.imagecontainer}></div>
        </motion.div>

        {/* Subscribe Section */}
        <section className={styles.subscribe}>
          <div className={styles.subscribecontainer}>
            <div className={styles.left}>
              <h2 className={styles.subscribetitle}>
                Join
                <br /> – Our Team
              </h2>
              <p className={styles.subscribesubtitle}>
                Get weekly update about our product on your email, no spam
                guaranteed we promise ✌️
              </p>
            </div>

            <form className={styles.subscribeform}>
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
      </div>
      <Footer />
    </section>
  );
}