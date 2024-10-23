import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Gitdetails from "./Gitdetails.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gitdetails />
  </StrictMode>
);
