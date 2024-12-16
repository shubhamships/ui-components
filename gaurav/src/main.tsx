import "./index.css";
// import { Provider } from "react-redux";
// import store, { persistor } from "./app/store.ts";
// import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { InstallPWA } from "./components/InstallPWA.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      {/* <PersistGate persistor={persistor}> */}
        <App />
        <InstallPWA />
      {/* </PersistGate> */}
    {/* </Provider> */}
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
