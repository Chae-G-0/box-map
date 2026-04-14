import { Link } from "react-router-dom";
import { useCloseBottomSheet } from "@/store/useBottomSheetStore";
import { useSetCenter } from "@/store/useBoxStore";
import BookmarkButton from "../bookmark/BookmarkButton";
import type { Box } from "@/types";

export default function BoxListItem({ ...boxData }: Box) {
  const setBoxState = useSetCenter();
  const closeBottomSheet = useCloseBottomSheet();

  const labelStyle = `rounded-full border px-3 py-1 w-fit`;

  return (
    <div className="border-b p-4">
      <div className="mb-2 flex justify-between">
        <div>
          <p
            className="inline-block cursor-pointer text-[16px] font-bold"
            onClick={() => {
              setBoxState({ lat: boxData.lat, lng: boxData.lng });
              closeBottomSheet();
            }}
          >
            {boxData.name}
          </p>
          <p className="text-[10px] break-keep">{boxData.address}</p>
        </div>
        <BookmarkButton id={boxData.id} isBookmark={boxData.isBookmark} />
      </div>
      <div className="flex flex-wrap gap-1 text-[12px]">
        <p className={labelStyle}>주차 {boxData.parking ? `가능` : `불가`}</p>
        <p className={labelStyle}>샤워 {boxData.shower ? `가능` : `불가`}</p>

        <p className={labelStyle}>
          바벨 드랍 {boxData.barbell_drop ? `가능` : `불가`}
        </p>
        {boxData.platform && <p className={labelStyle}>역도플랫폼</p>}
        {boxData.instagram && (
          <Link
            to={boxData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={labelStyle}
          >
            인스타그램
          </Link>
        )}
        {boxData.website && (
          <Link
            to={boxData.website}
            target="_blank"
            rel="noopener noreferrer"
            className={labelStyle}
          >
            web
          </Link>
        )}
      </div>
    </div>
  );
}
