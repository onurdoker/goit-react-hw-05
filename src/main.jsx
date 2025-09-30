import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import Header from "./contents/Header/Header.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
          <BrowserRouter>
            <Header />
            <App />
          </BrowserRouter>
        </StrictMode>,
    );
