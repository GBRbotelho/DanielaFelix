import React from "react";
import styles from "./Section1.module.css";
import Geo from "../../../components/Parceiros/Geo";
import Profile from "../../../components/Parceiros/Profile";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Nossos <span>parceiros</span>
          </h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
          <div className={styles.card}>
            <div className={styles.image}></div>
            <ul>
              <li>
                <Profile />
                Dentista
              </li>
              <li>
                <Geo />
                Hortolandia-SP
              </li>
            </ul>
            <button>Conhecer</button>
          </div>
        </div>
      </div>
    </section>
  );
}
