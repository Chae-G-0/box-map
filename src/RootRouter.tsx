import { Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./components/page/IndexPage";
import BoxMapPage from "./components/page/BoxMapPage";
import GlobalLayout from "./components/layout/GlobalLayout";
import SignInPage from "./components/page/SignInPage";
import MemberOnlyLayout from "./components/layout/MemberOnlyLayout";
import MyPage from "./components/page/MyPage";
import GuestOnlyLayout from "./components/layout/GuestOnlyLayout";
import BookmarkPage from "./components/page/BookmarkPage";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />

      <Route element={<GuestOnlyLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>

      <Route element={<GlobalLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/map" element={<BoxMapPage />} />
      </Route>

      <Route element={<MemberOnlyLayout />}>
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/my-page/bookmark" element={<BookmarkPage />} />
      </Route>
    </Routes>
  );
}
