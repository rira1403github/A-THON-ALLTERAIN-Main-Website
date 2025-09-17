"use client";

import React from "react";
import Image from "next/image"; 
import styles from "./Collaborator.module.css";

type Logo = {
  img: string;
  link?: string;
  height: number;
  width: number;
};

const logos: Logo[] = [
  { img: "/assets/landingPage/C-image1.webp", link: "https://www.artpark.in/", height: 65, width: 300 },
  { img: "/assets/landingPage/C-image2.webp", link: "https://twararobotics.in/", height: 60, width: 120 },
  { img: "/assets/landingPage/C-image3.webp", link: "https://www.comradoaerospace.com/", height: 40, width: 160 },
  { img: "/assets/landingPage/C-image4.webp", height: 50, width: 130 },
  { img: "/assets/landingPage/C-image5.webp", link: "https://www.tssindia.in/", height: 85, width: 150 },
  { img: "/assets/landingPage/C-image6.webp", link: "https://cogostrucks.com/", height: 80, width: 185 },
  { img: "/assets/landingPage/C-image7.webp", link: "https://campcochocolates.com/", height: 90, width: 120 },
  { img: "/assets/landingPage/C-image8.webp", link: "https://precisionhubllc.com/", height: 120, width: 195 },
  { img: "/assets/landingPage/C-image1.webp", link: "https://www.artpark.in/", height: 65, width: 300 },
  { img: "/assets/landingPage/C-image2.webp", link: "https://twararobotics.in/", height: 60, width: 120 },
  { img: "/assets/landingPage/C-image3.webp", link: "https://www.comradoaerospace.com/", height: 40, width: 160 },
  { img: "/assets/landingPage/C-image4.webp", height: 50, width: 130 },
  { img: "/assets/landingPage/C-image5.webp", link: "https://www.tssindia.in/", height: 85, width: 150 },
  { img: "/assets/landingPage/C-image6.webp", link: "https://cogostrucks.com/", height: 80, width: 185 },
  { img: "/assets/landingPage/C-image7.webp", link: "https://campcochocolates.com/", height: 90, width: 120 },
  { img: "/assets/landingPage/C-image8.webp", link: "https://precisionhubllc.com/", height: 120, width: 195 },
];

const Collaborators: React.FC = () => {
  const doubledLogos: Logo[] = [...logos, ...logos];

  return (
    <div className={styles["collaborators-section"]}>
      <h2 className={styles["collab-heading"]}>TACTICAL COLLABORATIONS</h2>
      <p className={styles["collab-sub-heading"]}>
        We partner with industry leaders in technology, adventure, and innovation to push the boundaries of what&apos;s possible.
      </p>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {doubledLogos.map((logo: Logo, index: number) => (
            <div className={styles.slide} key={index}>
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.img}
                    alt={`collab-${index}`}
                    className={styles["logo-img"]}
                    height={logo.height}
                    width={logo.width}
                  />
                </a>
              ) : (
                <Image
                  src={logo.img}
                  alt={`collab-${index}`}
                  className={styles["logo-img"]}
                  height={logo.height}
                  width={logo.width}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;