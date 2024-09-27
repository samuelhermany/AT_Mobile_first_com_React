import React from "react";
import styles from "./GlobalMenu.module.css";
import { useState } from "react";
import { MenuResponsivo } from "./MenuResponsivo";

export function GlobalMenu() {
  return(
    <nav className={styles.globalMenu}>
      <MenuResponsivo />
    </nav>
  );
}
