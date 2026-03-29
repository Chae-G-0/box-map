import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchBoxes } from "@/api/box";
import { QUERY_KEY } from "@/lib/constants";

const PAGE_SIZE = 10;

export default function useInfiniteBoxesData(
  region: string,
  city: string,
  searchKeyword: string,
) {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  return useInfiniteQuery({
    queryKey: [QUERY_KEY.box.list, region, city, q],
    queryFn: async ({ pageParam }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const boxes = await fetchBoxes({ region, city, from, to, searchKeyword });
      return boxes;
    },

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      if (lastPage.length < PAGE_SIZE) return undefined;
      return allPage.length;
    },

    staleTime: Infinity,
  });
}
