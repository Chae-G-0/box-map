import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import BoxMap from "./components/map/BoxMap";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/map/:region/:city" element={<BoxMap />} />
    </Routes>
  );
}
