import { MapMarker } from "react-kakao-maps-sdk";

export default function BoxMarker({ lat, lng }: { lat: number; lng: number }) {
  return <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>;
}
