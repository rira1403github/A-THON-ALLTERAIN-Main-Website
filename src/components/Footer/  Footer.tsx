// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaChevronUp,
//   FaChevronDown,
// } from "react-icons/fa";

// import styles from "./Footer.module.css";

// type SectionLink = {
//   name: string;
//   path?: string;
//   id?: string;
// };

// type Section = {
//   title: string;
//   links: SectionLink[];
// };

// const Footer = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const router = useRouter();

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const sections: Section[] = [
//     {
//       title: "QUICK LINKS",
//       links: [
//         { name: "Home", path: "/influenceOffer" },
//         { name: "Agri & Robotics", path: "/weekOffer" },
//         { name: "Parts & Services", path: "/groupOffer" },
//         { name: "Dealership", path: "/festiveOffer" },
//         { name: "Build your Ashva", path: "/festiveOffer" },
//         { name: "A-THON Experience Centre", path: "/festiveOffer" },
//       ],
//     },
//     {
//       title: "PRODUCTS",
//       links: [
//         { name: "ASHVA 4X4", path: "/proDriver" },
//         { name: "ASHVA 6X6", path: "/obstacle" },
//         { name: "ASHVA 4S", path: "/throttle" },
//         { name: "ASHVA UT", path: "/adventure" },
//       ],
//     },
//     {
//       title: "ABOUT Us",
//       links: [
//         { name: "Our Story", path: "/eventCele" },
//         { name: "Team & Facilities", path: "/eventCor" },
//         { name: "Join Our Team", path: "/eventRally" },
//         { name: "Join Our Network", path: "/eventCele" },
//         { name: "Our Media Kit", path: "/eventCele" },
//         { name: "Contact", path: "/eventCele" },
//       ],
//     },
//     {
//       title: "LEGAL",
//       links: [
//         { name: "Privacy", id: "ourStoy" },
//         { name: "Equal Opportunities", id: "whoweare" },
//       ],
//     },
//   ];

//   const handleAboutClick = (id: string) => {
//     router.push("/aboutUs", { scroll: false });
    
//     setOpenIndex(null);
//   };

//   return (
//     <footer className={styles.footerSection}>
      
//       <div className={styles.footerColumns}>
//         {sections.map((col, i) => (
//           <div className={styles.footerCol} key={i}>
//             <div
//               className={styles.footerColHeader}
//               onClick={() => handleToggle(i)}
//             >
//               <h4>{col.title}</h4>
//               <span className={styles.toggleIcon}>
//                 {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
//               </span>
//             </div>
//             <ul
//               className={`${styles.footerColLinks} ${
//                 openIndex === i ? styles.open : ""
//               }`}
//             >
//               {col.links.map((link, j) => (
//                 <li key={j}>
//                   {link.path ? (
//                     <Link href={link.path} onClick={() => setOpenIndex(null)}>
//                       {link.name}
//                     </Link>
//                   ) : (
//                     <button
//                       className={styles.footerLinkBtn}
//                       onClick={() => handleAboutClick(link.id!)}
//                     >
//                       {link.name}
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <div className={styles.socialFooter}>
//         <a
//           href="https://www.facebook.com/p/ASX-Motodrome-61575127250339/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.socialItem}
//         >
//           <FaFacebookF /> <span>FACEBOOK</span>
//         </a>
//         <a
//           href="https://www.instagram.com/asx_motodrome?igsh=Z2Zmdm13a3ZncHd0"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.socialItem}
//         >
//           <FaInstagram /> <span>INSTAGRAM</span>
//         </a>
//         <a
//           href="https://www.linkedin.com/company/asx-motodrome/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.socialItem}
//         >
//           <FaLinkedinIn /> <span>LINKEDIN</span>
//         </a>
//         <a
//           href="https://youtube.com/@asxmotodrome?si=MN43_eDC-g2c1SK3"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.socialItem}
//         >
//           <FaYoutube /> <span>YOUTUBE</span>
//         </a>
//       </div>

//       <div className={styles.footerBottom}>
//         <div className={styles.footerLinks}>
//             <h3>REACH US ON</h3>
//           <Link href="/privacy">mail@a-thonallterrain.com</Link>
//         </div>
//         <p className={styles.footerCopy}>
//           ©  2023. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.<br />
//           CIN: U34100KA2022PTC1S1300
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

import styles from "./Footer.module.css";

type SectionLink = {
  name: string;
  path?: string;
  id?: string; // ✅ still allowed, but now always used where required
};

type Section = {
  title: string;
  links: SectionLink[];
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections: Section[] = [
    {
      title: "QUICK LINKS",
      links: [
        { name: "Home", path: "/influenceOffer" },
        { name: "Agri & Robotics", path: "/weekOffer" },
        { name: "Parts & Services", path: "/groupOffer" },
        { name: "Dealership", path: "/festiveOffer" },
        { name: "Build your Ashva", path: "/festiveOffer" },
        { name: "A-THON Experience Centre", path: "/festiveOffer" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { name: "ASHVA 4X4", path: "/proDriver" },
        { name: "ASHVA 6X6", path: "/obstacle" },
        { name: "ASHVA 4S", path: "/throttle" },
        { name: "ASHVA UT", path: "/adventure" },
      ],
    },
    {
      title: "ABOUT Us",
      links: [
        { name: "Our Story", path: "/eventCele" },
        { name: "Team & Facilities", path: "/eventCor" },
        { name: "Join Our Team", path: "/eventRally" },
        { name: "Join Our Network", path: "/eventCele" },
        { name: "Our Media Kit", path: "/eventCele" },
        { name: "Contact", path: "/eventCele" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacy", id: "ourStoy" },
        { name: "Equal Opportunities", id: "whoweare" },
      ],
    },
  ];

  const handleAboutClick = (id?: string) => {
    if (!id) return; // ✅ safeguard
    router.push(`/aboutUs#${id}`, { scroll: false });
    setOpenIndex(null);
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerColumns}>
        {sections.map((col, i) => (
          <div className={styles.footerCol} key={i}>
            <div
              className={styles.footerColHeader}
              onClick={() => handleToggle(i)}
            >
              <h4>{col.title}</h4>
              <span className={styles.toggleIcon}>
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <ul
              className={`${styles.footerColLinks} ${
                openIndex === i ? styles.open : ""
              }`}
            >
              {col.links.map((link, j) => (
                <li key={j}>
                  {link.path ? (
                    <Link href={link.path} onClick={() => setOpenIndex(null)}>
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      className={styles.footerLinkBtn}
                      onClick={() => handleAboutClick(link.id)}
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.socialFooter}>
        <a
          href="https://www.facebook.com/p/ASX-Motodrome-61575127250339/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaFacebookF /> <span>FACEBOOK</span>
        </a>
        <a
          href="https://www.instagram.com/asx_motodrome?igsh=Z2Zmdm13a3ZncHd0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaInstagram /> <span>INSTAGRAM</span>
        </a>
        <a
          href="https://www.linkedin.com/company/asx-motodrome/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaLinkedinIn /> <span>LINKEDIN</span>
        </a>
        <a
          href="https://youtube.com/@asxmotodrome?si=MN43_eDC-g2c1SK3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaYoutube /> <span>YOUTUBE</span>
        </a>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
          <h3>REACH US ON</h3>
          <Link href="/privacy">mail@a-thonallterrain.com</Link>
        </div>
        <p className={styles.footerCopy}>
          © 2023. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.<br />
          CIN: U34100KA2022PTC1S1300
        </p>
      </div>
    </footer>
  );
};

export default Footer;
