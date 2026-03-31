import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import RegionFilterModal from "./RegionFilterModal";

export default function ModalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {createPortal(
        <>
          <RegionFilterModal />
        </>,
        document.getElementById("modal-root")!,
      )}
      {children}
    </>
  );
}
