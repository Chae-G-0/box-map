import { Outlet } from "react-router-dom";
import SearchInput from "../home/SearchInput";
import Sidebar from "../menu/Sidebar";

export default function GlobalLayout() {
  return (
    <div className="relative flex min-h-screen min-w-screen">
      <Sidebar />
      <SearchInput />
      <Outlet />
    </div>
  );
}
