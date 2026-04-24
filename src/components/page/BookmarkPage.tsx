import useBookmarkData from "@/hooks/queries/useBookmarkData";
import { useSession } from "@/store/useSession";
import BoxListItem from "../map/BoxListItem";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import GlobalLoader from "../GlobalLoader";

export default function BookmarkPage() {
  const navigate = useNavigate();
  const session = useSession();
  const { data, isFetching } = useBookmarkData(session!.user.id);

  if (isFetching) return <GlobalLoader />;

  return (
    <div className="flex h-screen flex-col p-6">
      <div
        className="mb-8 flex cursor-pointer items-center"
        onClick={() => navigate("/my-page")}
      >
        <ChevronLeft className="text-gray-500" />
        <p className="text-[14px] text-gray-500">마이페이지</p>
      </div>
      <div className="m-auto w-full max-w-175 flex-1">
        {data && data.length > 0 ? (
          <>
            <div className="mb-2">북마크한 박스</div>
            <div className="border-t">
              {data.map((boxData) => {
                return <BoxListItem key={boxData.id} {...boxData} />;
              })}
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-center text-gray-500">
            북마크한 박스가 없습니다.
            <br />
            지도에서 가고싶은 박스를 저장해보세요.
          </div>
        )}
      </div>
    </div>
  );
}
