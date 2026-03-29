import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import BoxMap from "./components/map/BoxMap";
import GlobalLayout from "./components/layout/GlobalLayout";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<BoxMap />} />
      </Route>
    </Routes>
  );
}
