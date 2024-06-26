import React, { useEffect, useState } from "react";
import styles from "./1Navbar.module.css";
import Logo from "../../../assets/imgs/Logo.webp";
import Hamburger from "../../../components/Navbar/Hamburger";
import Close from "../../../components/Navbar/Close";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const href =
    "https://wa.me/5511981517956?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+conhecer+mais+sobre+seus+servi%C3%A7os%21";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false); // Fechar o dropdown após clicar em um item
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo empresa" />
        <h1>Daniela Felix Menezes</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li onClick={() => scrollToSection("ebook")}>E-Books</li>
          <Link to={"/blog"}>
            <li>Blog</li>
          </Link>
          <li onClick={() => scrollToSection("clientes")}>Clientes</li>
          <Link to={"/parceiros"}>
            <li>Parceiros</li>
          </Link>
        </ul>
        <a href={href} target="_blank">
          <button>Consulta</button>
        </a>
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
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li onClick={() => scrollToSection("ebook")}>E-Books</li>
            <Link to={"/blog"}>
              <li>Blog</li>
            </Link>
            <li onClick={() => scrollToSection("clientes")}>Clientes</li>
            <Link to={"/parceiros"}>
              <li>Parceiros</li>
            </Link>
          </ul>
          <a href={href} target="_blank">
            <button>Consulta</button>
          </a>
        </div>
      </nav>
    </header>
  );
}
