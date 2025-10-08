import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LiquidBackground from "./components/LiquidBackground";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <LiquidBackground /> {/* full-page animated water */}
      <App />              {/* main app content */}
    </>
  </React.StrictMode>
);
