import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import RegionFilterModal from "./RegionFilterModal";
import ConfirmModal from "./ConfirmModal";

export default function ModalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {createPortal(
        <>
          <RegionFilterModal />
          <ConfirmModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
