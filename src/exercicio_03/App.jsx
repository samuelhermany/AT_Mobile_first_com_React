import React, { useState } from 'react';
import styles from './App.module.css';
import { Carrosel } from './components/Carrosel';

export default function App() {
  const [visibleIndex, setVisibleIndex] = useState(1); // Começa exibindo 1 imagem

  const handleIncrement = () => {
    setVisibleIndex(prev => Math.min(prev + 1, 9)); // Incrementa, mas o máximo é 9
  };

  const handleDecrement = () => {
    setVisibleIndex(prev => Math.max(prev - 1, 1)); // Decrementa, mas o mínimo é 1
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={handleIncrement}>+</button>
        <p>{visibleIndex}</p> {/* Mostra o número de imagens visíveis */}
        <button onClick={handleDecrement}>-</button>
      </div>

      <Carrosel visibleIndex={visibleIndex} />
    </div>
  );
}
