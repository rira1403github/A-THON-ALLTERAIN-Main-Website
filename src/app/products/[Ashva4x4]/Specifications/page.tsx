// "use client";

// import React, { useState, useRef } from "react";
// import styles from "./Specifications.module.css";
// import { useRouter } from "next/navigation";
// import Footer from "@/components/Footer/Footer";

// const Specification: React.FC = () => {
//   const router = useRouter();
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (section: string) => {
//     setOpenDropdown(openDropdown === section ? null : section);
//   };

//   const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   const sections = [
//     {
//       title: "Engine & Drivetrain",
//       content: (
//         <table className={styles.specTable}>
//           <tbody>
//             <tr>
//               <td className="word">Engine Type</td>
//               <td>4 stroke, V-twin, Differential Integrated, Liquid Cooling</td>
//               <td>4 stroke, V-twin, Liquid Cooling</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Power</td>
//               <td>976 cc, 71 hp @ 6500 rpm</td>
//               <td>976 cc, 71 hp @ 6500 rpm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Fuel System</td>
//               <td>EFI, Gasoline</td>
//               <td>EFI, Gasoline</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Ignition System</td>
//               <td>Automatic (CVT)</td>
//               <td>Automatic (CVT)</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Transmission</td>
//               <td>Automatic (CVT)</td>
//               <td>Automatic (CVT)</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">No. of Gears</td>
//               <td>L - H - N - R - P (5 positions)</td>
//               <td>L - H - N - R - P (5 positions)</td>
//             </tr>
//           </tbody>
//         </table>
//       ),
//     },
//     {
//       title: "Suspensions",
//       content: (
//         <table className={styles.specTable}>
//           <tbody>
//             <tr>
//               <td className="w-1/3">Front Shocks</td>
//               <td>Coil Over Dual Rated Nitro</td>
//               <td>Coil Over Dual Rated Nitro</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Front Suspension</td>
//               <td>Double Wishbone</td>
//               <td>Double Wishbone</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Rear Shocks</td>
//               <td>Coil Over Dual Rated Remote Canister</td>
//               <td>Coil Over Dual Rated Remote Canister</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Rear Suspension</td>
//               <td>Trailing ARM With Triple Camber Links</td>
//               <td>Trailing ARM With Triple Camber Links</td>
//             </tr>
//           </tbody>
//         </table>
//       ),
//     },
//     {
//       title: "Brakes & Tires/Rim",
//       content: (
//         <table className={styles.specTable}>
//           <tbody>
//             <tr>
//               <td className="w-1/3">Front & Rear Brakes</td>
//               <td>Disc</td>
//               <td>Disc</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Front Tires</td>
//               <td>31 x 10.5</td>
//               <td>31 x 10.5</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Rear Tires</td>
//               <td>31 x 10.5</td>
//               <td>31 x 10.5</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Wheel Size</td>
//               <td>Alloy R15 - 7”</td>
//               <td>Alloy R15 - 7”</td>
//             </tr>
//           </tbody>
//         </table>
//       ),
//     },
//     {
//       title: "Dimensions",
//       content: (
//         <table className={styles.specTable}>
//           <tbody>
//             <tr>
//               <td className="w-1/3">Length</td>
//               <td>3556 mm</td>
//               <td>3556 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Width</td>
//               <td>1950 mm</td>
//               <td>1950 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Height</td>
//               <td>2000 mm</td>
//               <td>2000 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Wheelbase</td>
//               <td>2600 mm</td>
//               <td>2600 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Track Width</td>
//               <td>1653 mm</td>
//               <td>1653 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Payload Capacity</td>
//               <td>600 kg</td>
//               <td>600 kg</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Dry Weight</td>
//               <td>950 kg</td>
//               <td>950 kg</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Fuel Tank Capacity</td>
//               <td>30 L</td>
//               <td>30 L</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Ground Clearance</td>
//               <td>381 mm</td>
//               <td>381 mm</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Cargo Capacity</td>
//               <td>60 L</td>
//               <td>60 L</td>
//             </tr>
//           </tbody>
//         </table>
//       ),
//     },
//     {
//       title: "Features",
//       content: (
//         <table className={styles.specTable}>
//           <tbody>
//             <tr>
//               <td>Cargo System</td>
//               <td>In built cargo box</td>
//               <td>In built cargo box </td>
//             </tr>
//             <tr>
//               <td>Transmission Modes</td>
//               <td>2WD, 4WD, Front & Rear + Open & Lock Differential Modes </td>
//               <td>2WD, 4WD, Front & Rear + Open & Lock Differential Modes </td>
//             </tr>
//             <tr>
//               <td>Chassis/ Cage</td>
//               <td>Space Frame</td>
//               <td>Space Frame</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Hitch Type</td>
//               <td>Single Point (Front & Rear)</td>
//               <td>Single Point (Front & Rear)</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Lighting</td>
//               <td>Halogen</td>
//               <td>Halogen</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Seat Belt</td>
//               <td>3- point/ 4- point/ 5-point</td>
//               <td>3- point/ 4- point/ 5-point</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Seat Type</td>
//               <td>Bucket</td>
//               <td>Bucket</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Seat Capacity</td>
//               <td>Two</td>
//               <td>Two</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Instrumentation</td>
//               <td>Semi Digital Instrument Cluster</td>
//               <td>Semi Digital Instrument Cluster</td>
//             </tr>
//             <tr>
//               <td className="w-1/3">Snorkel</td>
//               <td>Inlet & Outlet for CVT</td>
//               <td>Inlet & Outlet for CVT</td>
//             </tr>
//             <tr>
//               <td>Gravel Guard </td>
//               <td>Yes</td>
//               <td>Yes</td>
//             </tr>
//           </tbody>
//         </table>
//       ),
//     },
//   ];

//   return (
//     <section>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <div className={styles.title}>IMAGE</div>
//           <div className={styles.closeBtn} onClick={() => router.back()}>
//             ✕
//           </div>
//         </div>

//         <div className={styles.tabMenu}>
//           {sections.map((s) => (
//             <button
//               key={s.title}
//               className={openDropdown === s.title ? "active" : ""}
//               onClick={() => {
//                 toggleDropdown(s.title);
//                 sectionRefs.current[s.title]?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               {s.title}
//             </button>
//           ))}
//         </div>

//         <div className={styles.logo}>
//           <img src="/assets/productpage/Ashva4x4Title.png" alt="" />
//         </div>

//         <div className={styles.models}>
//           <div>
//             <p style={{ textAlign: "center", fontWeight: "800" }}>ASHVA 4X4 XTR</p>
//             <img src="/assets/productpage/ashva-xtr.png" alt="ASHVA XTR" />
//           </div>
//           <div>
//             <p style={{ textAlign: "center", fontWeight: "800" }}>ASHVA 4X4 PFX</p>
//             <img src="/assets/productpage/ashva-pfx.png" alt="ASHVA PFX" />
//           </div>
//         </div>

//         {sections.map((section) => (
//           <div
//             key={section.title}
//             className={styles.dropdown}
//             ref={(el) => {
//               sectionRefs.current[section.title] = el;
//             }}
//           >
//             <div
//               className={styles.dropdownHeader}
//               onClick={() => toggleDropdown(section.title)}
//             >
//               {section.title}
//               <img
//                 src="/assets/productpage/arrow.png"
//                 alt="arrow"
//                 className={`${styles.arrowIcon} ${
//                   openDropdown === section.title ? styles.arrowUp : ""
//                 }`}
//               />
//             </div>
//             <div
//               className={`${styles.dropdownContent} ${
//                 openDropdown === section.title ? styles.open : ""
//               }`}
//             >
//               {section.content}
//             </div>
//           </div>
//         ))}

//         <div className={styles.icons}>
//           <div className={styles.iconCard}>
//             <img src="/assets/productpage/grade45.webp" alt="Gradeability" />
//             <p>GRADEABILITY</p>
//           </div>
//           <div className={styles.iconCard}>
//             <img src="/assets/productpage/side40.webp" alt="Side Stability" />
//             <p>SIDE STABILITY</p>
//           </div>
//           <div className={styles.iconCard}>
//             <img src="/assets/productpage/grade65.webp" alt="Gradeability" />
//             <p>GRADEABILITY</p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default Specification;



"use client";

import React, { useState, useRef } from "react";
import styles from "./Specifications.module.css";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const Specification: React.FC = () => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const sections = [
    {
      title: "Engine & Drivetrain",
      content: (
        <table className={styles.specTable}>
          <tbody>
            <tr>
              <td>Engine Type</td>
              <td>4 stroke, V-twin, Differential Integrated, Liquid Cooling</td>
              <td>4 stroke, V-twin, Liquid Cooling</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>976 cc, 71 hp @ 6500 rpm</td>
              <td>976 cc, 71 hp @ 6500 rpm</td>
            </tr>
            <tr>
              <td>Fuel System</td>
              <td>EFI, Gasoline</td>
              <td>EFI, Gasoline</td>
            </tr>
            <tr>
              <td>Ignition System</td>
              <td>Automatic (CVT)</td>
              <td>Automatic (CVT)</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>Automatic (CVT)</td>
              <td>Automatic (CVT)</td>
            </tr>
            <tr>
              <td>No. of Gears</td>
              <td>L - H - N - R - P (5 positions)</td>
              <td>L - H - N - R - P (5 positions)</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "Suspensions",
      content: (
        <table className={styles.specTable}>
          <tbody>
            <tr>
              <td>Front Shocks</td>
              <td>Coil Over Dual Rated Nitro</td>
              <td>Coil Over Dual Rated Nitro</td>
            </tr>
            <tr>
              <td>Front Suspension</td>
              <td>Double Wishbone</td>
              <td>Double Wishbone</td>
            </tr>
            <tr>
              <td>Rear Shocks</td>
              <td>Coil Over Dual Rated Remote Canister</td>
              <td>Coil Over Dual Rated Remote Canister</td>
            </tr>
            <tr>
              <td>Rear Suspension</td>
              <td>Trailing ARM With Triple Camber Links</td>
              <td>Trailing ARM With Triple Camber Links</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "Brakes & Tires/Rim",
      content: (
        <table className={styles.specTable}>
          <tbody>
            <tr>
              <td>Front & Rear Brakes</td>
              <td>Disc</td>
              <td>Disc</td>
            </tr>
            <tr>
              <td>Front Tires</td>
              <td>31 x 10.5</td>
              <td>31 x 10.5</td>
            </tr>
            <tr>
              <td>Rear Tires</td>
              <td>31 x 10.5</td>
              <td>31 x 10.5</td>
            </tr>
            <tr>
              <td>Wheel Size</td>
              <td>Alloy R15 - 7”</td>
              <td>Alloy R15 - 7”</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "Dimensions",
      content: (
        <table className={styles.specTable}>
          <tbody>
            <tr>
              <td>Length</td>
              <td>3556 mm</td>
              <td>3556 mm</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>1950 mm</td>
              <td>1950 mm</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>2000 mm</td>
              <td>2000 mm</td>
            </tr>
            <tr>
              <td>Wheelbase</td>
              <td>2600 mm</td>
              <td>2600 mm</td>
            </tr>
            <tr>
              <td>Track Width</td>
              <td>1653 mm</td>
              <td>1653 mm</td>
            </tr>
            <tr>
              <td>Payload Capacity</td>
              <td>600 kg</td>
              <td>600 kg</td>
            </tr>
            <tr>
              <td>Dry Weight</td>
              <td>950 kg</td>
              <td>950 kg</td>
            </tr>
            <tr>
              <td>Fuel Tank Capacity</td>
              <td>30 L</td>
              <td>30 L</td>
            </tr>
            <tr>
              <td>Ground Clearance</td>
              <td>381 mm</td>
              <td>381 mm</td>
            </tr>
            <tr>
              <td>Cargo Capacity</td>
              <td>60 L</td>
              <td>60 L</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: "Features",
      content: (
        <table className={styles.specTable}>
          <tbody>
            <tr>
              <td>Cargo System</td>
              <td>In built cargo box</td>
              <td>In built cargo box </td>
            </tr>
            <tr>
              <td>Transmission Modes</td>
              <td>2WD, 4WD, Front & Rear + Open & Lock Differential Modes </td>
              <td>2WD, 4WD, Front & Rear + Open & Lock Differential Modes </td>
            </tr>
            <tr>
              <td>Chassis/ Cage</td>
              <td>Space Frame</td>
              <td>Space Frame</td>
            </tr>
            <tr>
              <td>Hitch Type</td>
              <td>Single Point (Front & Rear)</td>
              <td>Single Point (Front & Rear)</td>
            </tr>
            <tr>
              <td>Lighting</td>
              <td>Halogen</td>
              <td>Halogen</td>
            </tr>
            <tr>
              <td>Seat Belt</td>
              <td>3- point/ 4- point/ 5-point</td>
              <td>3- point/ 4- point/ 5-point</td>
            </tr>
            <tr>
              <td>Seat Type</td>
              <td>Bucket</td>
              <td>Bucket</td>
            </tr>
            <tr>
              <td>Seat Capacity</td>
              <td>Two</td>
              <td>Two</td>
            </tr>
            <tr>
              <td>Instrumentation</td>
              <td>Semi Digital Instrument Cluster</td>
              <td>Semi Digital Instrument Cluster</td>
            </tr>
            <tr>
              <td>Snorkel</td>
              <td>Inlet & Outlet for CVT</td>
              <td>Inlet & Outlet for CVT</td>
            </tr>
            <tr>
              <td>Gravel Guard </td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      ),
    },
  ];

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>IMAGE</div>
          <div className={styles.closeBtn} onClick={() => router.back()}>
            ✕
          </div>
        </div>

        <div className={styles.tabMenu}>
          {sections.map((s) => (
            <button
              key={s.title}
              className={openDropdown === s.title ? "active" : ""}
              onClick={() => {
                toggleDropdown(s.title);
                sectionRefs.current[s.title]?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className={styles.logo}>
          <Image
            src="/assets/productpage/Ashva4x4Title.png"
            alt="Ashva 4x4 Title"
            width={400}
            height={100}
            priority
          />
        </div>

        <div className={styles.models}>
          <div>
            <p style={{ textAlign: "center", fontWeight: "800" }}>ASHVA 4X4 XTR</p>
            <Image
              src="/assets/productpage/ashva-xtr.png"
              alt="ASHVA XTR"
              width={500}
              height={300}
            />
          </div>
          <div>
            <p style={{ textAlign: "center", fontWeight: "800" }}>ASHVA 4X4 PFX</p>
            <Image
              src="/assets/productpage/ashva-pfx.png"
              alt="ASHVA PFX"
              width={500}
              height={300}
            />
          </div>
        </div>

        {sections.map((section) => (
          <div
            key={section.title}
            className={styles.dropdown}
            ref={(el) => {
              sectionRefs.current[section.title] = el;
            }}
          >
            <div
              className={styles.dropdownHeader}
              onClick={() => toggleDropdown(section.title)}
            >
              {section.title}
              <Image
                src="/assets/productpage/arrow.png"
                alt="arrow"
                width={20}
                height={20}
                className={`${styles.arrowIcon} ${
                  openDropdown === section.title ? styles.arrowUp : ""
                }`}
              />
            </div>
            <div
              className={`${styles.dropdownContent} ${
                openDropdown === section.title ? styles.open : ""
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}

        <div className={styles.icons}>
          <div className={styles.iconCard}>
            <Image
              src="/assets/productpage/grade45.webp"
              alt="Gradeability"
              width={80}
              height={80}
            />
            <p>GRADEABILITY</p>
          </div>
          <div className={styles.iconCard}>
            <Image
              src="/assets/productpage/side40.webp"
              alt="Side Stability"
              width={80}
              height={80}
            />
            <p>SIDE STABILITY</p>
          </div>
          <div className={styles.iconCard}>
            <Image
              src="/assets/productpage/grade65.webp"
              alt="Gradeability"
              width={80}
              height={80}
            />
            <p>GRADEABILITY</p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Specification;