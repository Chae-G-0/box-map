import { Outlet, useNavigate } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import { useOpenModal } from "@/store/useModal";
import SearchInput from "../home/SearchInput";
import { MenuIcon } from "lucide-react";

export default function GlobalLayout() {
  const { isPc } = useResponsive();
  const navigate = useNavigate();
  const openModal = useOpenModal();

  return (
    <div className="relative min-h-screen min-w-screen">
      <div
        className={`${isPc ? `w-200` : `w-full p-4`} absolute left-[50%] z-998 flex h-20 translate-x-[-50%] items-center justify-between`}
      >
        <div
          onClick={() => navigate("/")}
          className="bg-muted cursor-pointer rounded-sm p-1"
        >
          BOXMAP
        </div>
        <div className={`${isPc ? `w-105` : `min-w-60`}`}>
          <SearchInput />
        </div>
        <MenuIcon
          className="bg-muted h-7 w-7 cursor-pointer rounded-sm p-1.5"
          onClick={openModal}
        />
      </div>
      <Outlet />
    </div>
  );
}
