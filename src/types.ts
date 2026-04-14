import { type Database } from "./database.types";

export type BoxEtity = Database["public"]["Tables"]["box"]["Row"];

export type Box = BoxEtity & { isBookmark: boolean };

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
