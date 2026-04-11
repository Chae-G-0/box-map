import { Outlet, useNavigate } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import { useOpenModal } from "@/store/useModalStore";
import SearchInput from "../home/SearchInput";
import { MenuIcon, User } from "lucide-react";
import boxmapIcon from "@/assets/boxmapIcon.png";
import { useSession } from "@/store/useSession";

export default function GlobalLayout() {
  const session = useSession();
  const { isPc } = useResponsive();
  const navigate = useNavigate();
  const openModal = useOpenModal();

  return (
    <div className="relative min-h-screen min-w-screen">
      <div
        className={`${isPc ? `w-200 p-6` : `w-full p-4`} absolute top-0 left-[50%] z-998 translate-x-[-50%]`}
      >
        <div
          className={`${isPc ? `gap-4` : `gap-2`} flex items-center justify-between`}
        >
          <div
            onClick={() => navigate("/")}
            className="bg-muted cursor-pointer"
          >
            <img src={boxmapIcon} alt="boxmap icon" className="h-6 w-6" />
          </div>
          <div className={`flex-1`}>
            <SearchInput />
          </div>
          <MenuIcon
            className="bg-muted h-6 w-6 cursor-pointer rounded-sm p-1"
            onClick={openModal}
          />
          <User
            className="bg-muted h-6 w-6 cursor-pointer rounded-sm p-1"
            onClick={() => navigate(session ? `my-page` : `sign-in`)}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
