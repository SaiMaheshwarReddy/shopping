import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { enableMocking } from "./mocks/index.js";

async function startApp() {
  try {
    // await enableMocking();
    console.log("✅ MSW setup complete");
  } catch (error) {
    console.error("❌ MSW setup failed:", error);
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

startApp();
