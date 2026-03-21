import { Map } from "react-kakao-maps-sdk";
import Marker from "./Marker";

export default function BoxMap() {
  return (
    <>
      <Map
        center={{ lat: 35.15911939, lng: 129.0645682 }}
        style={{ width: "100%", height: "600px" }}
        level={3}
        isPanto
      >
        <Marker lat={35.15911939} lng={129.0645682} />
      </Map>
    </>
  );
}
