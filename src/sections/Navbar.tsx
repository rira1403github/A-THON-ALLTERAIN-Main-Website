// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import logoImg from "@/assets/landingPage/main-logo.png";
// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.container}>

//         <Link href="/" className={styles.logoWrapper}>
//           <img src={logoImg.src} alt="A-THON Logo" className={styles.logo} />
//         </Link>

//         <div className={styles.links}>
//           <Link href="/products" className={styles.link}>
//             Products
//           </Link>
//           <Link href="/agri" className={styles.link}>
//             Agri & Robotics
//           </Link>
//           <Link href="/about" className={styles.link}>
//             About Us
//           </Link>
//           <Link href="/contact" className={styles.link}>
//             Contact Us
//           </Link>
//         </div>

//         <div className={styles.userIcon}>
//           <User size={24} />
//         </div>

//         <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </div>
//       </div>

//       {isOpen && (
//         <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
//           <Link href="/products" onClick={() => setIsOpen(false)}>
//             Products
//           </Link>
//           <Link href="/agri" onClick={() => setIsOpen(false)}>
//             Agri & Robotics
//           </Link>
//           <Link href="/about" onClick={() => setIsOpen(false)}>
//             About Us
//           </Link>
//           <Link href="/contact" onClick={() => setIsOpen(false)}>
//             Contact Us
//           </Link>
//           <div className={styles.mobileUser}>
//             <User size={24} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }





// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import styles from "./Navbar.module.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.container}>
//         {/* Logo */}
//         <Link href="/" className={styles.logoWrapper}>
//           <Image
//             src="/assets/landingPage/main-logo.png"
//             alt="A-THON Logo"
//             width={140}
//             height={50}
//             className={styles.logo}
//             priority
//           />
//         </Link>

//         {/* Desktop Links */}
//         <div className={styles.links}>
//           <Link href="/products" className={styles.link}>
//             Products
//           </Link>
//           <Link href="/agri" className={styles.link}>
//             Agri & Robotics
//           </Link>
//           <Link href="/about" className={styles.link}>
//             About Us
//           </Link>
//           <Link href="/contact" className={styles.link}>
//             Contact Us
//           </Link>
//         </div>

//         {/* User Icon */}
//         <div className={styles.userIcon}>
//           <User size={24} aria-label="User Account" />
//         </div>

//         {/* Hamburger Menu */}
//         <button
//           className={styles.hamburger}
//           onClick={() => setIsOpen((prev) => !prev)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={30} /> : <Menu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
//         aria-hidden={!isOpen}
//       >
//         <Link href="/products" onClick={() => setIsOpen(false)}>
//           Products
//         </Link>
//         <Link href="/agri" onClick={() => setIsOpen(false)}>
//           Agri & Robotics
//         </Link>
//         <Link href="/about" onClick={() => setIsOpen(false)}>
//           About Us
//         </Link>
//         <Link href="/contact" onClick={() => setIsOpen(false)}>
//           Contact Us
//         </Link>
//         <div className={styles.mobileUser}>
//           <User size={24} aria-label="User Account" />
//         </div>
//       </div>
//     </nav>
//   );
// }






"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
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

        {/* Desktop Links */}
        <div className={styles.links}>
          <Link href="/products" className={styles.link}>
            Products
          </Link>
          <Link href="/agri" className={styles.link}>
            Agri & Robotics
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact Us
          </Link>
        </div>

        {/* User Icon */}
        <div className={styles.userIcon} role="button" tabIndex={0}>
          <User size={24} aria-label="User Account" />
        </div>

        {/* Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        <Link href="/products" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
          Products
        </Link>
        <Link href="/agri" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
          Agri & Robotics
        </Link>
        <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
          About Us
        </Link>
        <Link href="/contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
        <div className={styles.mobileUser}>
          <User size={24} aria-label="User Account" />
        </div>
      </div>
    </nav>
  );
}

