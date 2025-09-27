"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./booking.module.css";

import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/sections/ActionsSection";

const steps = ["Vehicle", "Find a Dealer", "Finance & Exchange", "Review"];

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedDealer, setSelectedDealer] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <Navbar />
    <div className={styles.container}>
      <div className={styles.steps}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`${styles.step} ${idx === activeStep ? styles.activeStep : ""}`}
            onClick={() => setActiveStep(idx)}
          >
            {idx + 1}. {step}
          </div>
        ))}
      </div>
      
      <div className={styles.content}>
        {activeStep === 0 && (
          <motion.div
            className={styles.vehicleSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.vehicleInfo}>
              <Image
                src="/assets/productpage/ashva-xtr.png"
                alt="Ashva 4X4"
                width={300}
                height={200}
                className={styles.vehicleImage}
              />
              <div>
                <h2 className={styles.head}>ASHVA 4X4</h2>
                <p className={styles.headsub}>All terrain vehicle</p>
                <p className={styles.price}>
                  Starting at <span>22,03,200*</span>
                </p>
                <div className={styles.specs}>
                  <div>
                    <p className={styles.main}>Petrol</p>
                    <p className={styles.sub}>Fuel</p>
                  </div>
                  <div>
                    <p className={styles.main}>4WD</p>
                    <p className={styles.sub}>Drive Type</p>
                  </div>
                  <div>
                    <p className={styles.main}>Automatic</p>
                    <p className={styles.sub}>Transmission</p>
                  </div>
                  <div>
                    <p className={styles.main}>2</p>
                    <p className={styles.sub}>Seater</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.colors}>
              <h3 className={styles.colorgridhead}>Colour Option</h3>
              <div className={styles.colorGrid}>
                {["#ff0000", "#f2ff00", "#6b8e23", "#c0c0c0", "#000000", "#8b4513", "#ff6600", "#003399", "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)"].map((color, idx) => (
                  <div
                    key={idx}
                    className={`${styles.colorCircle} ${selectedColor === color ? styles.selectedColor : ""}`}
                    style={{ background: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <button className={styles.proceedBtn} onClick={() => setActiveStep(1)}>
              Confirm & Proceed
            </button>
          </motion.div>
        )}

        {activeStep === 1 && (
          <motion.div
            className={styles.dealerSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.vehicleInfo}>
              <Image
                src="/ashva.png"
                alt="Ashva 4X4"
                width={300}
                height={200}
                className={styles.vehicleImage}
              />
              <div>
                <h2>ASHVA 4X4</h2>
                <p className={styles.sub}>All terrain vehicle</p>
                <p className={styles.price}>
                  Starting at <span>22,03,200*</span>
                </p>
              </div>
            </div>

            <div className={styles.searchDealer}>
              <p>Enter The Pincode Or City</p>
              <div className={styles.searchBox}>
                <input type="text" placeholder="e.g. 560032 or Mumbai" />
                <button>Search Dealer</button>
              </div>
            </div>

            <div className={styles.dealerViews}>
              <div className={styles.mapView}>Maps View</div>
              <div className={styles.listView}>
                {["ASX MotoDrome", "ASX MotoDrome", "ASX MotoDrome", "ASX MotoDrome"].map((dealer, idx) => (
                  <div
                    key={idx}
                    className={`${styles.dealerCard} ${selectedDealer === dealer ? styles.selectedDealer : ""}`}
                    onClick={() => setSelectedDealer(dealer)}
                  >
                    <span>📍</span>
                    <div>
                      <h4>{dealer}</h4>
                      <p>next to AL Miraj Convention Centre, Hoskote, Karnataka 562114</p>
                    </div>
                    <span>✔</span>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.proceedBtn} onClick={() => setActiveStep(2)}>
              Confirm & Proceed
            </button>
          </motion.div>
        )}

        {activeStep === 2 && (
          <motion.div
            className={styles.placeholder}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>Finance & Exchange</h2>
            <p>(Coming soon...)</p>
          </motion.div>
        )}

        {activeStep === 3 && (
          <motion.div
            className={styles.placeholder}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>Review</h2>
            <p>(Coming soon...)</p>
          </motion.div>
        )}
      </div>
    </div>
    <CTA />
    <Footer />
    </section>
  );
}