import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <h1 class={styles.title}>Platzi Trello</h1>

      <h2 class={styles.subtitle}>#ID Tablero</h2>

      <input
        type="text"
        placeholder="Escriba el id del tablero"
        name=""
        id="id__input"
      />

      <button>Comenzar</button>
    </div>
  );
};

export default Login;
