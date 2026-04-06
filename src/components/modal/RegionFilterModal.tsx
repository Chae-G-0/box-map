import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import { useModal } from "@/store/useModalStore";
import { REGION_CITY } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";

export default function RegionFilterModal() {
  const { isPc } = useResponsive();
  const [selectedRegion, setSelectedRegion] = useState("seoul");
  const { isOpen, closeModal } = useModal();
  const navigate = useNavigate();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay className="z-999" />
      <DialogContent className={`${isPc && `max-h-[70vh] min-w-150`} z-9999`}>
        <DialogTitle>지역 필터</DialogTitle>
        <div
          className={`${isPc ? `text-[16px]` : `text-[14px]`} flex h-100 overflow-hidden rounded-xl border`}
        >
          <div className="flex-1 overflow-y-auto">
            {REGION_CITY.map((region) => {
              const isSelectedRegion = selectedRegion === region.id;
              return (
                <div
                  key={region.id}
                  className={`${isSelectedRegion && `bg-muted`} hover:bg-muted flex h-10 cursor-pointer items-center justify-center border-r`}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  {region.label}
                </div>
              );
            })}
          </div>
          <div className={`flex-1 overflow-y-auto`}>
            {REGION_CITY.find((r) => r.id === selectedRegion)?.cities.map(
              (city) => {
                return (
                  <div
                    key={city.id}
                    className="hover:bg-muted flex h-10 cursor-pointer items-center justify-center"
                    onClick={() => {
                      navigate(`map?region=${selectedRegion}&city=${city.id}`);
                      closeModal();
                    }}
                  >
                    {city.label}
                  </div>
                );
              },
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
