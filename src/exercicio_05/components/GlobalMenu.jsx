import React from "react";
import styles from "./GlobalMenu.module.css";
import { useState } from "react";

export function GlobalMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return(
  <nav className={styles.globalMenu}>
    <label
          className={`${styles.checkbtn} ${isChecked ? styles.checked : ''}`}
          onClick={toggleCheckbox} // Adiciona onClick para alternar o estado
        >
          <i className={isChecked ? 'fa-solid fa-xmark' : 'fas fa-bars'}></i>
    </label>
    <p>Global Menu</p>
  </nav>
);
}
