import React, { useState } from "react";
import styles from "./1Navbar.module.css";
import Logo from "../../../assets/imgs/Logo.webp";
import Hamburger from "../../../components/Navbar/Hamburger";
import Close from "../../../components/Navbar/Close";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo empresa" />
        <h1>Daniela Felix Menezes</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>E-Books</li>
          <li>Blog</li>
          <li>Alunos</li>
          <li>Parceiros</li>
        </ul>
        <button>Consulta</button>
      </nav>
      <nav className={styles.navMobile}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={styles.hamburger}
        >
          {!isDropdownOpen ? <Hamburger /> : <Close />}
        </button>
        <div
          className={`${styles.divMenu} ${
            isDropdownOpen ? styles.active : null
          }`}
        >
          <ul>
            <li>Home</li>
            <li>E-Books</li>
            <li>Blog</li>
            <li>Alunos</li>
            <li>Parceiros</li>
          </ul>
          <button>Consulta</button>
        </div>
      </nav>
    </header>
  );
}
