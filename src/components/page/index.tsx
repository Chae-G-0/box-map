import useResponsive from "@/hooks/useResponsive";
import RegionCard from "../home/RegionCard";

export default function Home() {
  const { isPc } = useResponsive();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <p className="mb-[-6px] text-[16px]">
        크로스핏도 여행의 일부인 핏터들을 위한
      </p>
      <p className={`${isPc ? `text-[36px]` : `text-[26px]`} mb-2 font-bold`}>
        전국 크로스핏 BOX MAP
      </p>
      <RegionCard />
    </div>
  );
}
