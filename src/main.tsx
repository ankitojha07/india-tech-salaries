import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import WebSuggestion from "./components/WebSuggestion.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-full bg-blue-500">
      <WebSuggestion />
    </div>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white sm:px-12 lg:px-56">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
