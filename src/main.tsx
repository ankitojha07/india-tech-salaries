import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white sm:px-12 lg:px-56">
      <Navbar />
      <App />
    </div>
  </StrictMode>
);
