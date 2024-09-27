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
    <div className={styles.gridContainer}>
      <Header />
      <GlobalMenu />
      <AdSection />
      <ContextMenu />
      <MainContent />
      <Footer />
    </div>
  );
}
