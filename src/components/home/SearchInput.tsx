import useSearch from "@/hooks/useSearch";
import { Input } from "../ui/input";

export default function SearchInput() {
  const { searchKeyword, handleSearchOnChange, handleEnterPress } = useSearch();

  return (
    <Input
      value={searchKeyword}
      className={`my-4 h-10 rounded-full bg-white pl-5 focus-visible:ring-0`}
      placeholder="박스 이름을 검색해보세요."
      onChange={handleSearchOnChange}
      onKeyDown={handleEnterPress}
    />
  );
}
