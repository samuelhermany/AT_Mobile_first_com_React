import React from "react";
import styles from "./App.module.css";
import { ShoppingList } from "./components/ShoppingList";
import { useState } from "react";
import { useEffect } from "react";
import { ButtonTheme } from "./components/ButtonTheme";

export default function App() {
  const items = [
    { nome: "Maçã", precoUnitario: 0.5, quantidade: 4 },
    { nome: "Banana", precoUnitario: 0.3, quantidade: 6 },
    { nome: "Laranja", precoUnitario: 0.7, quantidade: 3 },
  ];

  const [isDarkTheme, setIsDarkTheme] = useState('');

  const toggleTheme = () => {
    setIsDarkTheme((prev) => {
      const newTheme = !prev;
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? "theme-dark" : "theme-light";
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.btn}>
          <ButtonTheme
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme} />
        </div>
        <ShoppingList
          items={items}
          isDarkTheme={isDarkTheme}
        />
    </div>
  );
}