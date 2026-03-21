import { MapMarker } from "react-kakao-maps-sdk";

export default function Marker({ lat, lng }: { lat: number; lng: number }) {
  return <MapMarker position={{ lat: lat, lng: lng }}></MapMarker>;
}
