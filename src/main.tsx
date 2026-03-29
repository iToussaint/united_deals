import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>HELLO WORLD</h1>
    <Button variant="secondary" size="lg" loading>
      CLICK MEE
    </Button>
  </StrictMode>,
);
