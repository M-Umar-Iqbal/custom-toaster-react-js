import Button from "./components/button/button";
import styles from "./App.module.css";
import Toast from "./components/toast/toast";
import { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  console.log(list);
  let toastProperties = null;
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a Success Toast",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a Danger Toast",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a Info Toast",
          backgroundColor: "#5bc8de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a Warning Toast",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastProperties]);
  };
  return (
    <div className={styles.root}>
      <h1>React Toast Component</h1>
      <div className={styles.buttons}>
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
      </div>
      <Toast toastList={list} position="bottom-right" setList={setList} />
    </div>
  );
}

export default App;
