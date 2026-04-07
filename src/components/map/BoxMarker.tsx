import { useSetCenter } from "@/store/useBoxStore";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import boxMarker from "@/assets/boxMarker.svg";

export default function BoxMarker({
  lat,
  lng,
  boxName,
}: {
  lat: number;
  lng: number;
  boxName: string;
}) {
  const setBoxState = useSetCenter();
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <div
        className="flex cursor-pointer flex-col items-center"
        onClick={() => setBoxState({ lat, lng })}
      >
        <div className="mb-1 rounded-md border bg-white p-1 px-2 text-[12px]">
          {boxName}
        </div>
        <img src={boxMarker} width={24} height={36} alt="marker" />
      </div>
    </CustomOverlayMap>
  );
}
