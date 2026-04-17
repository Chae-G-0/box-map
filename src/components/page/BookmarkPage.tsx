import useBookmarkData from "@/hooks/queries/useBookmarkData";
import { useSession } from "@/store/useSession";
import BoxListItem from "../map/BoxListItem";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function BookmarkPage() {
  const navigate = useNavigate();
  const session = useSession();
  const { data } = useBookmarkData(session!.user.id);

  return (
    <div className="h-screen p-6">
      <div
        className="mb-8 flex cursor-pointer items-center"
        onClick={() => navigate("/my-page")}
      >
        <ChevronLeft className="text-gray-500" />
        <p className="text-[14px] text-gray-500">마이페이지</p>
      </div>
      <div className="m-auto max-w-175">
        <div className="mb-2">북마크한 박스</div>
        <div className="border-t">
          {data?.map((boxData) => {
            return <BoxListItem key={boxData.id} {...boxData} />;
          })}
        </div>
      </div>
    </div>
  );
}
