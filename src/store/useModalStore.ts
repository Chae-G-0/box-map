import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const useOpenModal = () => {
  const openModal = useModalStore((store) => store.openModal);
  return openModal;
};

export const useCloseModal = () => {
  const closeModal = useModalStore((store) => store.closeModal);
  return closeModal;
};

export const useModal = () => {
  const store = useModalStore();
  return store;
};
