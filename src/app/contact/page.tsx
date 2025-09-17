"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/sections/Navbar";
import Footer from "@/components/Footer/Footer";

const countryCodes = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
   { code: "+93", label: "Afghanistan" },
  { code: "+355", label: "Albania" },
  { code: "+213", label: "Algeria" },
  { code: "+1-684", label: "American Samoa" },
  { code: "+376", label: "Andorra" },
  { code: "+244", label: "Angola" },
  { code: "+1-264", label: "Anguilla" },
  { code: "+1-268", label: "Antigua and Barbuda" },
  { code: "+54", label: "Argentina" },
  { code: "+374", label: "Armenia" },
  { code: "+297", label: "Aruba" },
  { code: "+61", label: "Australia" },
  { code: "+43", label: "Austria" },
  { code: "+994", label: "Azerbaijan" },
  { code: "+1-242", label: "Bahamas" },
  { code: "+973", label: "Bahrain" },
  { code: "+880", label: "Bangladesh" },
  { code: "+1-246", label: "Barbados" },
  { code: "+375", label: "Belarus" },
  { code: "+32", label: "Belgium" },
  { code: "+501", label: "Belize" },
  { code: "+229", label: "Benin" },
  { code: "+1-441", label: "Bermuda" },
  { code: "+975", label: "Bhutan" },
  { code: "+591", label: "Bolivia" },
  { code: "+387", label: "Bosnia and Herzegovina" },
  { code: "+267", label: "Botswana" },
  { code: "+55", label: "Brazil" },
  { code: "+246", label: "British Indian Ocean Territory" },
  { code: "+1-284", label: "British Virgin Islands" },
  { code: "+673", label: "Brunei" },
   { code: "+93", label: "Afghanistan" },
  { code: "+355", label: "Albania" },
  { code: "+213", label: "Algeria" },
  { code: "+1-684", label: "American Samoa" },
  { code: "+376", label: "Andorra" },
  { code: "+244", label: "Angola" },
  { code: "+1-264", label: "Anguilla" },
  { code: "+1-268", label: "Antigua and Barbuda" },
  { code: "+54", label: "Argentina" },
  { code: "+374", label: "Armenia" },
  { code: "+297", label: "Aruba" },
  { code: "+61", label: "Australia" },
  { code: "+43", label: "Austria" },
  { code: "+994", label: "Azerbaijan" },
  { code: "+1-242", label: "Bahamas" },
  { code: "+973", label: "Bahrain" },
  { code: "+880", label: "Bangladesh" },
  { code: "+1-246", label: "Barbados" },
  { code: "+375", label: "Belarus" },
  { code: "+32", label: "Belgium" },
  { code: "+501", label: "Belize" },
  { code: "+229", label: "Benin" },
  { code: "+1-441", label: "Bermuda" },
  { code: "+975", label: "Bhutan" },
  { code: "+591", label: "Bolivia" },
  { code: "+387", label: "Bosnia and Herzegovina" },
  { code: "+267", label: "Botswana" },
  { code: "+55", label: "Brazil" },
  { code: "+246", label: "British Indian Ocean Territory" },
  { code: "+1-284", label: "British Virgin Islands" },
  { code: "+673", label: "Brunei" },
  { code: "+359", label: "Bulgaria" },
  { code: "+226", label: "Burkina Faso" },
  { code: "+257", label: "Burundi" },
  { code: "+855", label: "Cambodia" },
  { code: "+237", label: "Cameroon" },
  { code: "+1", label: "Canada" },
  { code: "+238", label: "Cape Verde" },
  { code: "+1-345", label: "Cayman Islands" }
];

const Contact: React.FC = () => {
  const [selectedCode, setSelectedCode] = useState("+91");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className={styles.contactPage}>
      <Navbar />

      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1>Contact Us</h1>
          <p>
            Explore stories of innovation, adventure, and the technology that
            drives our vehicles forward.
          </p>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <h2>Reach Us Directly</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <FaEnvelope size={34} />
            <h3>Email</h3>
            <p>Sales@A-Thonallterrain.Com</p>
          </div>
          <div className={styles.card}>
            <FaPhone size={34} />
            <h3>Phone</h3>
            <p>+91-9740025534</p>
          </div>
          <div className={styles.card}>
            <FaMapMarkerAlt size={34} />
            <h3>Location</h3>
            <p>
              308, 1st Floor, 100ft. Rd, <br />Indira Nagar 1st Stage, <br />Bengaluru,
              Karnataka 560038
            </p>
          </div>
        </div>
      </section>

      <section className={styles.footprintsSection}>
        <h2>Our Footprints</h2>
        <div className={styles.footprintsContainer}>
          <div className={styles.footprint}>
            <h4>R & D Centre</h4>
            <p>
              Plot No: 08, Building B, KIADB Industrial Area, Dasarahosahalli,
              Bangarpet, Karnataka 563114
            </p>
          </div>
          <div className={styles.footprint}>
  <h4>R &amp; D Centre</h4>
  <p>
    Plot No: 08, Building B, KIADB Industrial Area, Dasarahosahalli, Bangarpet,
    Karnataka 563114
  </p>
</div>
          <div className={styles.footprint}>
            <h4>Corporate Office</h4>
            <p>
              308, 1st Floor, 100ft. Rd, Indira Nagar 1st Stage, Bengaluru,
              Karnataka 560038
            </p>
          </div>

          <div className={styles.footprint}>
            <h4>Test field</h4>
            <p>Nerelekere, Thammenhalli, Bangarpet, Karnataka 562114</p>
          </div>
          <div className={styles.footprint}>
            <h4>Production</h4>
            <p>
              Plot No: 08, Building B, KIADB Industrial Area, Dasarahosahalli,
              Bangarpet, Karnataka 563114
            </p>
          </div>
          
          <div className={styles.footprint}>
            <h4>Test centre</h4>
            <p>Hoskote, Karnataka 562114</p>
          </div>
        </div>
      </section>

      {/* <section className={styles.formSection}>
        <h2>Let’s Talk</h2>
        <p>
          Explore stories of innovation, adventure, and the technology that
          drives our vehicles forward.
        </p>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Second Name*" required />
          </div>

          <div className={styles.inputRow}>
            <input type="email" placeholder="Email*" required />
            <div className={styles.phoneInput}>
              <select
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label} ({c.code})
                  </option>
                ))}
              </select>
              <input type="tel" placeholder="Phone Number*" required />
            </div>
          </div>

          <input type="text" placeholder="Subject*" required />

          <textarea placeholder="Message" rows={6}></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section> */}

       <section className={styles.formSection}>
      <h2>Let’s Talk</h2>
      <p>
        Explore stories of innovation, adventure, and the technology that drives
        our vehicles forward.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <input type="text" placeholder="First Name*" required />
          <input type="text" placeholder="Second Name*" required />
        </div>

        <div className={styles.inputRow}>
          <input type="email" placeholder="Email*" required />
          <div className={styles.phoneInput}>
            <select
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label} ({c.code})
                </option>
              ))}
            </select>
            <input type="tel" placeholder="Phone Number*" required />
          </div>
        </div>

        <input type="text" placeholder="Subject*" required />

        <textarea placeholder="Message" rows={6}></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>

      <Footer />
    </div>
  );
};

export default Contact;