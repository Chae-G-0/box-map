import useResponsive from "@/hooks/useResponsive";
import Sidebar from "../menu/Sidebar";
import SearchInput from "./SearchInput";
import RegionCard from "./RegionCard";

export default function Home() {
  const { isPc } = useResponsive();
  return (
    <div className="flex min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
        <p className="mb-[-6px] text-[16px]">
          크로스핏도 여행의 일부인 핏터들을 위한
        </p>
        <p className={`${isPc ? `text-[36px]` : `text-[26px]`} font-bold`}>
          전국 크로스핏 BOX MAP
        </p>
        <SearchInput />
        <RegionCard />
      </div>
    </div>
  );
}
