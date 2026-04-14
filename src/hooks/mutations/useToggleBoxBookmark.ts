import { useMutation } from "@tanstack/react-query";
import { toggleBoxBookmark } from "@/api/box";
import type { UseMutationCallback } from "@/types";

export default function useToggleBoxBookmark(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: toggleBoxBookmark,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
