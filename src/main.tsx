import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PopupProvider } from "@shared/lib/context/PopupContext.tsx";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PopupProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PopupProvider>
  </React.StrictMode>
);
