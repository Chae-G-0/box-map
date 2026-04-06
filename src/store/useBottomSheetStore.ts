import { create } from "zustand";

interface BottomSheetState {
  isBottomSheetOpen: boolean;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
}

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isBottomSheetOpen: true,
  openBottomSheet: () => set({ isBottomSheetOpen: true }),
  closeBottomSheet: () => set({ isBottomSheetOpen: false }),
}));

export const useBottomSheet = () => {
  const store = useBottomSheetStore();
  return store;
};

export const useCloseBottomSheet = () => {
  const closeBottomSheet = useBottomSheetStore(
    (store) => store.closeBottomSheet,
  );
  return closeBottomSheet;
};
