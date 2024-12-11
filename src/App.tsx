import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      {/* Route for the Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Catch-All Route for NoPage */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
