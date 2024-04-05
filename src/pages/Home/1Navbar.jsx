import React from "react";
import styles from "./1Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      <div>
        <h1>Daniela Felix Menezes</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>E-Books</li>
          <li>Blog</li>
          <li>Alunos</li>
          <li>Parceiros</li>
        </ul>
        <button>Consulta</button>
      </nav>
    </header>
  );
}
