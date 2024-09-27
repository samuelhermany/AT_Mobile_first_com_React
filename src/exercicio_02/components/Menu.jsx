import React, { useState } from 'react';
import styles from './Menu.module.css';
import logo from '../assets/logo.svg';
import './/..//../global.css';

export function Menu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div className={styles.card}>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} alt="logo" />
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
        <ul className={`${styles.menu} ${isChecked ? styles.visible : styles.hidden}`}>
          <li>Home</li>
          <li>Serviços</li>
          <li>Produtos</li>
          <li>Contato</li>
          <li>Fotos</li>
          <li>Amigos</li>
          <li>Postagens</li>
          <li>Perfil</li>
        </ul>
      </nav>
    </div>
  );
}