import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n.ts"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="Art_Gallery_Festival">
      <App />
    </Router>
  </StrictMode>
);
