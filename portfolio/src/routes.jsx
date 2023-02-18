import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
