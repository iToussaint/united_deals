import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import Button from "./components/ui/Button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>HELLO WORLD</h1>
    <Button variant="secondary" size="lg" loading>
      CLICK MEE
    </Button>
  </StrictMode>,
);
