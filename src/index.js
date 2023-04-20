import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1 style={{ textAlign: "center" }}>Words Counter</h1>
    <App />
    <p style={{ textAlign: "center" }}>Made with ❤ by Rizwan Khan (India)</p>
  </StrictMode>
);
