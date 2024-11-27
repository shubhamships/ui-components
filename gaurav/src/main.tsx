import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Button from "./components/ui/Button.tsx";
import { InstallPWA } from "./components/InstallPWA.tsx";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <InstallPWA />
  </React.StrictMode>,
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}
