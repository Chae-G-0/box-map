import useResponsive from "@/hooks/useResponsive";
import useSearch from "@/hooks/useSearch";
import { Input } from "../ui/input";

export default function SearchInput() {
  const { isPc } = useResponsive();
  const { searchKeyword, handleSearchOnChange, handleEnterPress } = useSearch();

  return (
    <Input
      value={searchKeyword}
      className={`${isPc ? `w-105` : `w-80`} absolute top-2 left-[50%] z-999 my-4 h-10 translate-x-[-50%] rounded-full bg-white pl-5 focus-visible:ring-0`}
      placeholder="박스 이름을 검색해보세요."
      onChange={handleSearchOnChange}
      onKeyDown={handleEnterPress}
    />
  );
}
