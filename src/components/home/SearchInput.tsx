import useResponsive from "@/hooks/useResponsive";
import { Input } from "../ui/input";

export default function SearchInput() {
  const { isPc } = useResponsive();

  return (
    <Input
      className={`${isPc ? `w-105` : `w-80`} my-4 h-10 rounded-full pl-5 focus-visible:ring-0`}
      placeholder="박스 이름을 검색해보세요."
    />
  );
}
