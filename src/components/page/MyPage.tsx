import { useNavigate } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import { useSession } from "@/store/useSession";
import { signOut } from "@/api/auth";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MyPage() {
  const session = useSession();
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div className="flex h-screen flex-col p-6">
      <div
        className="mb-8 flex cursor-pointer items-center"
        onClick={() => navigate("/")}
      >
        <ChevronLeft className="text-gray-500" />
        <p className="text-[14px] text-gray-500">홈으로</p>
      </div>
      <div className="m-auto h-full w-full max-w-175">
        <div className="text-[20px] font-bold">마이페이지</div>
        <div className="mb-4">{session?.user.email}</div>
        <div
          className="mb-2 flex cursor-pointer items-center justify-between"
          onClick={() => navigate("/my-page/bookmark")}
        >
          <div>북마크</div>
          <ChevronRight className="text-gray-500" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-end">
        <Button
          variant="outline"
          className={`${isMobile ? `w-full` : `w-80`} h-12`}
          onClick={signOut}
        >
          로그아웃
        </Button>
      </div>
    </div>
  );
}
