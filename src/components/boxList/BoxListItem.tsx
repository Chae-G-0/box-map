import { useSetCenter } from "@/store/useBoxStore";
import type { BoxEtity } from "@/types";
import { Link } from "react-router-dom";

export default function BoxListItem({ ...boxData }: BoxEtity) {
  const setBoxState = useSetCenter();

  const labelStyle = `rounded-full border px-3 py-1 w-fit`;

  return (
    <div className="border-b p-4">
      <div className="mb-2">
        <p
          className="inline-block cursor-pointer text-[16px] font-bold"
          onClick={() => setBoxState({ lat: boxData.lat, lng: boxData.lng })}
        >
          {boxData.name}
        </p>
        <p className="text-[10px] break-keep">{boxData.address}</p>
      </div>
      <div className="flex flex-wrap gap-1 text-[12px]">
        <p className={labelStyle}>주차 {boxData.parking ? `가능` : `불가능`}</p>
        <p className={labelStyle}>샤워 {boxData.shower ? `가능` : `불가능`}</p>
        <p className={labelStyle}>
          바벨 드랍 {boxData.barbell_drop ? `가능` : `불가능`}
        </p>
        <p className={labelStyle}>
          역도플랫폼 {boxData.platform ? `있음` : `없음`}
        </p>
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
