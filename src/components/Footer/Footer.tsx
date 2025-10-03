"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronUp,
  FaChevronDown,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Footer.module.css";

type SectionLink = {
  name: string;
  path?: string;
  id?: string;
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
        { name: "Home", path: "#" },
        { name: "Agri & Robotics", path: "/agri" },
        { name: "Parts & Services", path: "/" },
        { name: "Dealership", path: "/festiveOffer" },
        { name: "Book a Test Drive", path: "/book" },
        { name: "Book Experience", path: "https://asxmotodrome.com/" },
      ],
    },
    {
      title: "PRODUCTS",
      links: [
        { name: "ASHVA BSX", path: "#" },
        { name: "ASHVA 4X4", path: "/Ashva4x4" },
        { name: "ASHVA 4S", path: "/Ashva4S" },
        { name: "ASHVA 6X6", path: "/Ashva6x6" },
      ],
    },
    {
      title: "ABOUT Us",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Team & Facilities", path: "/eventCor" },
        { name: "Join Our Team", path: "/about" },
        { name: "Join Our Network", path: "/about" },
        { name: "Our Media Kit", path: "/eventCele" },
        { name: "Contact", path: "/contact" },
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
    if (!id) return;
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
          href="https://www.facebook.com/profile.php?id=61567067664336&rdid=6ZjIdffMEmG7xn32&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcND9rTs3aHFeZcEi#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaFacebookF /> <span>FACEBOOK</span>
        </a>
        <a
          href="https://www.instagram.com/athon_allterrain/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaInstagram /> <span>INSTAGRAM</span>
        </a>
        <a
          href="https://www.linkedin.com/company/a-thon-allterrain-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaLinkedinIn /> <span>LINKEDIN</span>
        </a>
        <a
          href="https://www.youtube.com/@a-thon"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaYoutube /> <span>YOUTUBE</span>
        </a>
        <a
          href="https://x.com/ATHON1705"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialItem}
        >
          <FaTwitter /> <span>TWITTER</span>
        </a>
      </div>

      <div className={styles.footerBottom}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/assets/landingPage/main-logo.png"
            alt="A-THON Logo"
            width={140}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>
        <div className={styles.footerLinks}>
          <h3>REACH US ON</h3>
          <Link href="mailto:mail@a-thonallterrain.com">
            mail@a-thonallterrain.com
          </Link>
        </div>

        <p className={styles.footerCopy}>
          © 2023. A-THON ALLTERRAIN PVT. LTD. All Rights Reserved.
          <br />
          CIN: U34100KA2022PTC1S1300
        </p>
      </div>
    </footer>
  );
};

export default Footer;
