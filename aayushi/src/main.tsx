import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById('root') as HTMLElement | null;

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
