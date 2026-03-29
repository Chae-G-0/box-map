import type React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/map?q=${searchKeyword}`);
  };

  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    if (!searchKeyword.trim()) return;
    handleSearch();
  };

  useEffect(() => {
    setSearchKeyword(q);
  }, [q]);

  return {
    searchKeyword,
    handleSearchOnChange,
    handleSearch,
    handleEnterPress,
  };
}
