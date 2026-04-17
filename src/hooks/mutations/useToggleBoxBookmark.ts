import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from "@tanstack/react-query";
import { toggleBoxBookmark } from "@/api/box";
import type { Box, UseMutationCallback } from "@/types";
import { QUERY_KEY } from "@/lib/constants";

export default function useToggleBoxBookmark(callbacks?: UseMutationCallback) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleBoxBookmark,
    onMutate: async ({ boxId }) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.box.list] });
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY.bookmark.list] });

      const prevBox = queryClient
        .getQueriesData<InfiniteData<Box[]>>({ queryKey: [QUERY_KEY.box.list] })
        .flatMap(([, data]) => data?.pages.flat() ?? [])
        .find((box) => box.id === boxId);

      const prevBookmarkList = queryClient.getQueriesData<Box[]>({
        queryKey: [QUERY_KEY.bookmark.list],
      });

      queryClient.setQueriesData(
        { queryKey: [QUERY_KEY.box.list] },
        (data: InfiniteData<Box[]> | undefined) => {
          if (!data) return data;
          return {
            ...data,
            pages: data.pages.map((page) =>
              page.map((box) =>
                box.id === boxId
                  ? { ...box, isBookmark: !box.isBookmark }
                  : box,
              ),
            ),
          };
        },
      );

      queryClient.setQueriesData(
        { queryKey: [QUERY_KEY.bookmark.list] },
        (data: Box[] | undefined) => {
          if (!data) return data;
          return data.filter((box) => box.id !== boxId);
        },
      );

      return { prevBox, prevBookmarkList };
    },
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error, _, context) => {
      if (context && context.prevBox) {
        queryClient.setQueryData(
          QUERY_KEY.box.byId(context.prevBox.id),
          context.prevBox,
        );

        queryClient.setQueriesData(
          { queryKey: [QUERY_KEY.bookmark.list] },
          context.prevBookmarkList,
        );
      }
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
