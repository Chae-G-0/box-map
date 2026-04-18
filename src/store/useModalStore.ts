import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
interface ConfirmModalState {
  isConfirmOpen: boolean;
  title: string;
  content: string;
  submitButtonText: string;
  onSubmit?: () => void;
  openConfirmModal: (options: {
    title: string;
    content: string;
    submitButtonText: string;
    onSubmit: () => void;
  }) => void;
  closeConfirmModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

const useConfirmModalStore = create<ConfirmModalState>((set) => ({
  isConfirmOpen: false,
  title: "",
  content: "",
  submitButtonText: "",
  onSubmit: () => {},
  openConfirmModal: (options) => set({ isConfirmOpen: true, ...options }),
  closeConfirmModal: () =>
    set({
      isConfirmOpen: false,
      title: "",
      content: "",
      submitButtonText: "",
      onSubmit: () => {},
    }),
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

export const useOpenConfirmModal = () => {
  const openConfirmModal = useConfirmModalStore(
    (store) => store.openConfirmModal,
  );
  return openConfirmModal;
};

export const useConfirmModal = () => {
  const store = useConfirmModalStore();
  return store;
};
