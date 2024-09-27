import React, { useState } from 'react';
import styles from './ButtonTheme.module.css';
import './/..//../global.css';

export function ButtonTheme({ toggleTheme, isDarkTheme }) {
   return (
      <div className={`${styles.button} ${!isDarkTheme ? 'theme-light-button' : 'theme-dark-button'}`}>
         <button
            onClick={toggleTheme}
            className={`${styles.themeToggle} ${!isDarkTheme ? 'theme-light-button' : 'theme-dark-button'}`}>
          {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </div>
   )
}