import React from "react";
import styles from "./App.module.css";

import background from './assets/background.png';
import background_mobile from './assets/background_mobile.png';
import play from './assets/play.png';
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <div>
      <Menu />
      <div className={styles.conteudo}>
        <div className={styles.banner_div}>
          <img
            className={styles.banner_mobile}
            src={background_mobile}
            alt="praia"
          />
          <img
            className={styles.banner}
            src={background}
            alt="praia" />
        </div>
        <div>
          <h1 className={styles.titulo}>Paradise View</h1>
          <h2 className={styles.sub_titulo}>Hotel for every moment rich in emotion</h2>
          <p>Every moment feels like the first time in paradise view</p>
          <div className={styles.tour}>
            <button className={styles.btn_round}>Book now</button>
            <img
              className={styles.btn_play}
              src={play } alt="botao play" />
            <p className={styles.btn_play_titulo}>Take a tour</p>
          </div>
        </div>
      </div>
    </div>
  );
}