import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PopupProvider } from "@shared/lib/context/PopupContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopupProvider>
      <App />
    </PopupProvider>
  </React.StrictMode>
);
