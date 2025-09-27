"use client";

import { useState } from "react";
import styles from "./info.module.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";
import CTA from "@/sections/ActionsSection";

export default function GetMoreInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    model: "",
    communication: "",
    message: "",
  });

  const countries = [
    { code: "+91", name: "India" },
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+61", name: "Australia" },
    { code: "+81", name: "Japan" },
  ];

  const models = ["Ashva BSX", "Ashva 4x4", "Ashva 4S", "Ashva 6x6"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Form Submitted Successfully!");
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.formsection}>
        <h2 className={styles.heading}>GET MORE INFO</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Enter Your Name*</label>
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

          {/* Phone Row */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Enter Your Number*</label>
              <div className={styles.phoneInput}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
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

          {/* Email */}
          <div className={styles.field}>
            <label>Enter Your Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Model */}
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

          {/* Communication */}
          <div className={styles.field}>
            <label>Preferred Communication*</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="communication"
                  value="Call"
                  onChange={handleChange}
                  required
                />{" "}
                Via Call
              </label>
              <label>
                <input
                  type="radio"
                  name="communication"
                  value="Email"
                  onChange={handleChange}
                />{" "}
                Via Email
              </label>
              <label>
                <input
                  type="radio"
                  name="communication"
                  value="In Person"
                  onChange={handleChange}
                />{" "}
                In Person
              </label>
            </div>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
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