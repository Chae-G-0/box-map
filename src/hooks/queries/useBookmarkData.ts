import { fetchBookmarkedBoxes } from "@/api/box";
import { QUERY_KEY } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export default function useBookmarkData(userId: string) {
  return useQuery({
    queryKey: [QUERY_KEY.bookmark.list],
    queryFn: () => fetchBookmarkedBoxes({ userId }),
  });
}
