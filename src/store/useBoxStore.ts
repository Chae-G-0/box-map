import { create } from "zustand";

interface LatLng {
  lat: number;
  lng: number;
}

interface BoxState {
  center: LatLng | null;
  setCenter: (center: LatLng) => void;
  reset: () => void;
}

const useBoxStore = create<BoxState>((set) => ({
  center: null,
  setCenter: (center) => set({ center }),
  reset: () => set({ center: null }),
}));

export const useSelectedBoxState = () => {
  const center = useBoxStore((store) => store);
  return center;
};

export const useSetCenter = () => {
  const setCenter = useBoxStore((store) => store.setCenter);
  return setCenter;
};

export const useCenterReset = () => {
  const centerReset = useBoxStore((store) => store.reset);
  return centerReset;
};
