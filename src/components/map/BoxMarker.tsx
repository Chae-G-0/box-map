import { useSetCenter } from "@/store/useBoxStore";
import { MapMarker } from "react-kakao-maps-sdk";

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
    <MapMarker
      position={{ lat: lat, lng: lng }}
      onClick={() => setBoxState({ lat, lng })}
    >
      {boxName}
    </MapMarker>
  );
}
