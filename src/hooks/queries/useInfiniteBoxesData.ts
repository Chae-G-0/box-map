import { fetchBoxes } from "@/api/box";
import { QUERY_KEY } from "@/lib/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 10;

export default function useInfiniteBoxesData(region: string, city: string) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.box.list, region, city],
    queryFn: async ({ pageParam }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const boxes = await fetchBoxes({ region, city, from, to });
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
