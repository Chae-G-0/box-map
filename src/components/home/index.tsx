import useResponsive from "@/hooks/useResponsive";
import Sidebar from "../menu/Sidebar";
import { Input } from "../ui/input";

export default function Home() {
  const { isPc } = useResponsive();
  return (
    <div className="flex min-h-screen min-w-screen">
      <Sidebar />
      <div className="flex min-h-screen w-full items-center">
        <div className="w-full text-center">
          <Input
            className="h-10 w-150 rounded-full"
            placeholder="지역 또는 박스 이름으로 검색해보세요."
          />
        </div>
      </div>
    </div>
  );
}
