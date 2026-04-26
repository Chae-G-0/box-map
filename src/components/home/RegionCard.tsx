import { useNavigate } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import busan from "@/assets/busan.webp";
import jeju from "@/assets/jeju.webp";

export default function RegionCard() {
  const navigate = useNavigate();
  const { isPc } = useResponsive();

  return (
    <div className={`${!isPc && `flex-col`} flex gap-5`}>
      <div
        className="relative cursor-pointer"
        onClick={() => navigate(`/map?q=부산`)}
      >
        <div className="absolute top-6 left-6">
          <p
            className={`${isPc ? `text-[16px]` : `text-[12px]`} text-gray-200`}
          >
            FarEastThrowdown의 도시
          </p>
          <p
            className={`${isPc ? `text-[32px]` : `text-[20px]`} font-bold text-white`}
          >
            부산
          </p>
        </div>
        <img
          src={busan}
          className={`${isPc ? `h-120 w-105` : `h-50 w-80`} rounded-2xl object-cover`}
        />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => navigate("/map?q=제주")}
      >
        <div className="absolute top-6 left-6">
          <p
            className={`${isPc ? `text-[16px]` : `text-[12px]`} text-gray-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]`}
          >
            여행하면 제주, 제주하면 드랍인
          </p>
          <p
            className={`${isPc ? `text-[32px]` : `text-[20px]`} font-bold text-white`}
          >
            제주
          </p>
        </div>
        <img
          src={jeju}
          className={`${isPc ? `h-120 w-105` : `h-50 w-80`} rounded-2xl object-cover object-bottom`}
        />
      </div>
    </div>
  );
}
