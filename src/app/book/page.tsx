"use client";

import { useState } from "react";
import styles from "./book.module.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/sections/ActionsSection";

export default function BookTestDrive() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    model: "",
    testCentre: "",
    date: "",
    time: "",
  });

  const countries = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+61", name: "Australia" },
    { code: "+81", name: "Japan" },
    { code: "+49", name: "Germany" },
    { code: "+33", name: "France" },
    { code: "+39", name: "Italy" },
    { code: "+7", name: "Russia" },
    { code: "+86", name: "China" },
    { code: "+971", name: "UAE" },
    { code: "+92", name: "Pakistan" },
    { code: "+94", name: "Sri Lanka" },
    { code: "+880", name: "Bangladesh" },
    { code: "+27", name: "South Africa" },
    { code: "+34", name: "Spain" },
    { code: "+55", name: "Brazil" },
    { code: "+82", name: "South Korea" },
    { code: "+62", name: "Indonesia" },
    { code: "+60", name: "Malaysia" },
  ];

  const models = ["Ashva BSX", "Ashva 4x4", "Ashva 4S", "Ashva 6x6"];
  const centres = ["Delhi ASX Motodrome", "Mumbai Test Track", "Pune Arena", "Bangalore Centre"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Test Drive Booked Successfully!");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.formsection}>
        <h2 className={styles.heading}>BOOK A TEST DRIVE</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>&nbsp;</label>
              <input
                type="text"
                name="lastName"
                placeholder="Second Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Phone Number*</label>
              <div className={styles.phoneInput}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <label>Model Type*</label>
            <select name="model" onChange={handleChange} required>
              <option value="">Select The Model</option>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          
          <div className={styles.field}>
            <label>Test Centre*</label>
            <select name="testCentre" onChange={handleChange} required>
              <option value="">Select The Test Centre</option>
              {centres.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Date*</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.field}>
              <label>Time*</label>
              <input
                type="time"
                name="time"
                onChange={handleChange}
                required
              />
            </div>
          </div> 

          <div className={styles.infoBox}>
            <h4>Test Centre</h4>
            <p>
              Experience The Thrill Of Ashva Vehicles At Our Official ASX
              Motodrome Test Centre. We Provide Everything You Need For A Safe
              And Exciting Ride.
            </p>
            <ul>
              <li>✔ Availability – Check Slots And Book Your Preferred Day With Ease.</li>
              <li>✔ Track – Specially Designed Off-Road Track Built To Test Performance In Real Conditions.</li>
              <li>✔ Safety Measures – Helmets, Gear, And Expert Supervision To Ensure Complete Safety.</li>
              <li>✔ Briefing – Pre-Ride Orientation To Guide You Through Vehicle Controls And Safety Protocols.</li>
            </ul>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}