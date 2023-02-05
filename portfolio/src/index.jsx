import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./index.css";
import MainRoutes from "./routes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
