import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { GlobalMenu } from "./components/GlobalMenu";
import { ContextMenu } from "./components/ContextMenu";
import { MainContent } from "./components/MainContent";
import { AdSection } from "./components/AdSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.globalMenu_row}>
          <GlobalMenu />
        </div>
        <div className={styles.header_row}>
          <Header />
        </div>
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.globalMenu}>
        <GlobalMenu />
      </div>
      <div className={styles.contextMenu}>
        <ContextMenu />
      </div>
      <div className={styles.mainContext}>
        <MainContent />
      </div>
      <div className={styles.adSection}>
        <AdSection />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
