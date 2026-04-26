import useResponsive from "@/hooks/useResponsive";
import RegionCard from "../home/RegionCard";

export default function Home() {
  const { isPc } = useResponsive();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#F5F9FC] p-4">
      <p
        className={`${isPc ? `text-[16px]` : `text-[14px]`} mb-[-6px] text-gray-800`}
      >
        크로스핏도 여행의 일부인 핏터들을 위한
      </p>
      <div
        className={`${isPc ? `text-[36px]` : `text-[20px]`} mb-2 font-bold text-gray-800`}
      >
        전국 826개 크로스핏 BOX MAP
      </div>
      <RegionCard />
    </div>
  );
}
