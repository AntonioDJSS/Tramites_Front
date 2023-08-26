import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Modal from "react-modal";
import React from "react";

// Establecer el elemento raíz de la aplicación para los modales
Modal.setAppElement("#root"); // Cambia "#root" al selector de tu elemento raíz

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
