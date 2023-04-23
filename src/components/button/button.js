import React from "react";
import styles from "./button.module.css";
export default function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
}
