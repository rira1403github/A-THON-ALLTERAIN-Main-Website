"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import styles from "./ProductSection.module.css";

function CarModel() {
  return (
    <Suspense fallback={null}>
      <mesh scale={2}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Suspense>
  );
}

export default function ProductSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.content}>
        <div className={styles.carWrapper}>
          <Canvas camera={{ position: [3, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <CarModel />
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className={styles.details}>
          <h3 className={styles.title}>Ashva 4x4</h3>
          <h4 className={styles.subTitle}>Unstoppable Capability</h4>
          <p className={styles.description}>
            The Ashva 4x4 redefines off-road capability with advanced terrain
            response systems, military-grade construction, and cutting-edge
            technology that conquers the most challenging landscapes with ease.
          </p>
          <p className={styles.price}>
            <span>Starting at</span> Rs 89,900 - Rs 1,80,900
          </p>
          <div className={styles.buttons}>
            <button className={styles.explore}>Explore</button>
            <button className={styles.book}>Book Test Drive</button>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>ASHVA BSX</button>
        <button className={styles.tab}>ASHVA 4X4</button>
        <button className={styles.tab}>ASHVA 4S</button>
        <button className={styles.tab}>ASHVA 6X6</button>
      </div>
    </section>
  );
}