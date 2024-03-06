import React from "react";
import styles from "../styles/Loader.module.css";
export default function Loader() {
  return (
    <div className="grid place-content-center py-20">
      <div className={styles.loader}></div>
    </div>
  );
}
