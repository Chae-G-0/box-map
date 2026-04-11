import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/page";
import BoxMap from "./components/page/BoxMap";
import GlobalLayout from "./components/layout/GlobalLayout";
import SignIn from "./components/page/SignIn";
import MemberOnlyLayout from "./components/layout/MemberOnlyLayout";
import MyPage from "./components/page/MyPage";
import GuestOnlyLayout from "./components/layout/GuestOnlyLayout";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route element={<GuestOnlyLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
      </Route>

      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<BoxMap />} />
      </Route>

      <Route element={<MemberOnlyLayout />}>
        <Route path="/my-page" element={<MyPage />} />
      </Route>
    </Routes>
  );
}
