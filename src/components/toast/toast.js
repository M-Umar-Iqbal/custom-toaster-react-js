import React, { useCallback, useEffect } from "react";
import styles from "./toast.module.css";
export default function Toast({ toastList, position, setList }) {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastList, setList]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastList.map((toast) => (
        <div
          className={`${styles.notification} ${styles.toast} ${styles[position]}`}
          key={toast.id}
          style={{ background: toast.backgroundColor }}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
