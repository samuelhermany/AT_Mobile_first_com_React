import React, { useState } from 'react';
import styles from './MenuResponsivo.module.css';
import './/..//../global.css';

export function MenuResponsivo() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div className={styles.card}>
      <nav className={styles.nav}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <label
          className={`${styles.checkbtn} ${isChecked ? styles.checked : ''}`}
          onClick={toggleCheckbox} // Adiciona onClick para alternar o estado
        >
          <i className={isChecked ? 'fa-solid fa-xmark' : 'fas fa-bars'}></i>
        </label>

        {/* <img className={styles.logo} src={logo} alt="logo" /> */}
        <ul className={`${styles.menu} ${isChecked ? styles.visible : styles.hidden}`}>
          <li>Home</li>
          <li>Serviços</li>
          <li>Produtos</li>
          <li>Sobre Nós</li>
          <li>Contato</li>
        </ul>
{/*
        <img className={styles.perfil} src={perfil} alt="" /> */}
      </nav>
      <p>Global Menu</p>
    </div>
  );
}