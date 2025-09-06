// "use client";

// import React from "react";
// import styles from "./Collaborator.module.css";

// import logo1 from "/assets/landingPage/C-image1.webp";
// import logo2 from "/assets/landingPage/C-image2.webp";
// import logo3 from "/assets/landingPage/C-image3.webp";
// import logo4 from "/assets/landingPage/C-image4.webp";
// import logo5 from "/assets/landingPage/C-image5.webp";
// import logo6 from "/assets/landingPage/C-image6.webp";
// import logo7 from "/assets/landingPage/C-image7.webp";
// import logo8 from "/assets/landingPage/C-image8.webp";

// type Logo = {
//   img: any;
//   link?: string;
//   height: number;
//   width: number;
// };

// const logos: Logo[] = [
//   { img: logo1, link: "https://www.artpark.in/", height: 65, width: 300 },
//   { img: logo2, link: "https://twararobotics.in/", height: 60, width: 120 },
//   { img: logo3, link: "https://www.comradoaerospace.com/", height: 40, width: 160 },
//   { img: logo4, height: 50, width: 130 },
//   { img: logo5, link: "https://www.tssindia.in/", height: 85, width: 150 },
//   { img: logo6, link: "https://cogostrucks.com/", height: 80, width: 185 },
//   { img: logo7, link: "https://campcochocolates.com/", height: 90, width: 120 },
//   { img: logo8, link: "https://precisionhubllc.com/", height: 120, width: 195 },
// ];

// const Collaborators: React.FC = () => {
//   const doubledLogos = logos.concat(logos);

//   return (
//     <div className={styles["collaborators-section"]}>
//       <h2 className={styles["collab-heading"]}>TACTICAL COLLABORATIONS</h2>
//       <p className={styles["collab-sub-heading"]}>We partner with industry leaders in technology, adventure, and innovation to push the boundaries of what's possible.</p>
//       <div className={styles.slider}>
//         <div className={styles["slide-track"]}>
//           {doubledLogos.map((logo, index) => (
//             <div className={styles.slide} key={index}>
//               {logo.link ? (
//                 <a href={logo.link} target="_blank" rel="noopener noreferrer">
//                   <img
//                     src={logo.img.src}
//                     alt={`collab-${index}`}
//                     className={styles["logo-img"]}
//                     style={{
//                       height: `${logo.height}px`,
//                       width: `${logo.width}px`,
//                     }}
//                   />
//                 </a>
//               ) : (
//                 <img
//                   src={logo.img.src}
//                   alt={`collab-${index}`}
//                   className={styles["logo-img"]}
//                   style={{
//                     height: `${logo.height}px`,
//                     width: `${logo.width}px`,
//                   }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collaborators;





"use client";

import React from "react";
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
];

const Collaborators: React.FC = () => {
  const doubledLogos = logos.concat(logos);

  return (
    <div className={styles["collaborators-section"]}>
      <h2 className={styles["collab-heading"]}>TACTICAL COLLABORATIONS</h2>
      <p className={styles["collab-sub-heading"]}>
        We partner with industry leaders in technology, adventure, and innovation to push the boundaries of what's possible.
      </p>
      <div className={styles.slider}>
        <div className={styles["slide-track"]}>
          {doubledLogos.map((logo, index) => (
            <div className={styles.slide} key={index}>
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.img}
                    alt={`collab-${index}`}
                    className={styles["logo-img"]}
                    style={{
                      height: `${logo.height}px`,
                      width: `${logo.width}px`,
                    }}
                  />
                </a>
              ) : (
                <img
                  src={logo.img}
                  alt={`collab-${index}`}
                  className={styles["logo-img"]}
                  style={{
                    height: `${logo.height}px`,
                    width: `${logo.width}px`,
                  }}
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
